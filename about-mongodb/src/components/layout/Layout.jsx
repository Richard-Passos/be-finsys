/* Style */
import Head from "next/head";
import { Header } from "../header";
import { Container } from "./Layout.style";
import { Footer } from "../footer";

/* Logic */
import { useEffect, useState } from "react";

let lastScrollY = 0;

export default function Layout({ children }) {
  const [scrollY, setScrollY] = useState(0);
  const [headerDisappear, setHeaderDisappear] = useState(false);

  function handleScrollY(currentScrollY) {
    if (currentScrollY > lastScrollY && currentScrollY >= 100) {
      setHeaderDisappear(true);
    } else {
      setHeaderDisappear(false);
    }

    lastScrollY = currentScrollY - 0.1;
  }

  useEffect(() => {
    window.addEventListener("scroll", () => setScrollY(window.scrollY));
  }, []);

  useEffect(() => {
    handleScrollY(scrollY);
  }, [scrollY]);
  return (
    <Container>
      <Head>
        <meta
          name="description"
          content="Sobre banco de dados, SGBDs, teorema CAP e sua aplicação com mongoDB"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <Header disappear={headerDisappear} />
      {children}
      <Footer />
    </Container>
  );
}
