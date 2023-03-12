/* Style */
import { Container } from "./Header.style";
import Link from "next/link";
import { Nav } from "../nav";

export default function Header({ disappear }) {
  return (
    <Container className={disappear ? `disappear` : ""}>
      <div>
        <Link href="https://github.com/Richard-Passos" target="_blank">
          <h2 className="logo">
            <span>{"<"}</span>RichardP<span>{"/>"}</span>
          </h2>
        </Link>
      </div>

      <div>
        <Nav>
          <li>
            <a href="#section-dataBases" className="item">
              Banco de dados
            </a>
          </li>
          <li>
            <a href="#section-SGBDs" className="item">
              SGBDs
            </a>
          </li>
          <li>
            <a href="#section-teoremaCAP" className="item">
              Teorema CAP
            </a>
          </li>
          <li>
            <a href="#section-mongoDB" className="item">
              MongoDB
            </a>
          </li>
        </Nav>
      </div>
    </Container>
  );
}
