/* Style */
import Head from "next/head";
import { Content } from "@/components";
import { Section, SectionContainer } from "@/components/section";
import { Image, Title, TitleContainer } from "@/utils";

export default function Home() {
  return (
    <>
      <Head>
        <title>Banco de dados - Home</title>
      </Head>

      <TitleContainer>
        <Title size={4} as="h1">
          Banco de dados
        </Title>
      </TitleContainer>

      <Content>
        <a name="section-dataBases">
          <Section>
            <SectionContainer>
              <Title size={2}>O que é?</Title>

              <p>
                Trata-se de uma tecnologia que permite o armazenamento e a
                gestão organizada de dados estruturados ou não estruturados, a
                fim de fazer com que eles fiquem mais gerenciáveis, acessíveis e
                sempre atualizados. É possível dizer que um banco de dados é o
                local onde as informações ficam armazenadas.
              </p>

              <p>
                Os bancos de dados são estruturas lógicas usadas para organizar
                e armazenar dados para processamento, recuperação ou avaliações
                futuras.
              </p>
            </SectionContainer>

            <SectionContainer>
              <Title size={1.25} as="h3">
                Sua importância
              </Title>

              <p>
                O banco de dados se torna uma ferramenta fundamental para
                agilizar e colher as informações necessária para as negociações.
                Armazenar e fazer a gestão dessas informações e dados são de
                fundamental importância no mundo corporativo!
              </p>

              <div className="invert-colors">
                <Title size={1} as="h4">
                  Benefícios:
                </Title>

                <ul className="list">
                  <li className="item">
                    Facilita a análise de informações de clientes, vendas,
                    produção etc...;
                  </li>
                  <li className="item">
                    Possibilita traçar o perfil do público e a manter relação
                    com ele;
                  </li>
                  <li className="item">Expansão dos negócios;</li>
                  <li className="item">
                    Possuí informações essenciais na tomada de decisões;
                  </li>
                  <li className="item">
                    Ajuda para um melhor posicionamento competitivo.
                  </li>
                </ul>
              </div>
            </SectionContainer>
          </Section>
        </a>

        <a name="section-SGBDs">
          <Section>
            <SectionContainer>
              <Title size={2}>SGBDs</Title>

              <p>
                <abbr title=" Sistema de Gerenciamento de Banco de Dados">
                  SGBD
                </abbr>{" "}
                é um conjunto de softwares, utilizado para o gerenciamento de
                uma base de dados. Responsáveis por controlar, acessar,
                organizar e proteger as informações de uma aplicação, tendo como
              </p>
            </SectionContainer>

            <SectionContainer>
              <Title size={1.25}>Papel do SGBD</Title>

              <p>
                Tudo que fazemos em um banco de dados passa pelo SGBD! O SGBD é
                responsável por salvar os dados no HD, manter em memória os
                dados mais acessados, ligar dados e metadados, disponibilizar
                uma interface para que programas e usuários externos acessem o
                banco de dados, encriptar dados, controlar o acesso a
                informações, manter cópias dos dados para recuperação de uma
                possível falha, garantir transações no banco de dados
              </p>
            </SectionContainer>

            <SectionContainer>
              <Title size={1.25}>Principais vantagens</Title>

              <p>
                Existem muitas vantagens ao utilizar um SGBD e cada um deles
                possui suas características, na hora de escolher você precisa
                analisar o que atenda melhor a sua organização. Ao utilizar um
                SGBD você vai ter muitas vantagens, para o seu Banco de dados e
                também para a sua organização.
              </p>

              <div className="invert-colors">
                <Title size={1} as="h4">
                  vantagens:
                </Title>

                <ul className="list">
                  <li className="item">
                    A própria segurança: O SGBD permite que o administrador
                    consiga gerenciar de maneira eficiente quem acessa e o que
                    cada usuário tem acesso no banco de dados;
                  </li>

                  <li className="item">
                    Controle de redundância: Com um SGBD você pode reduzir
                    drasticamente o redundância, como regra geral a informação
                    no SGBD só aparece uma vez, e isso reduz a redundância e
                    sucessivamente diminui o custo de armazenamento de
                    informações em discos rígidos ou outros dispositivos de
                    armazenamento;
                  </li>

                  <li className="item">
                    Compartilhamento de dados: Ao utilizar um SGBD você consegue
                    acessar e manipular eles com mais facilidade;
                  </li>

                  <li className="item">
                    Possuí informações essenciais na tomada de decisões;
                  </li>

                  <li className="item">
                    Ajuda para um melhor posicionamento competitivo.
                  </li>
                </ul>
              </div>

              <div>
                <Title size={1} as="h4">
                  Conclusão
                </Title>

                <p>
                  Até alguns anos atrás utilizar um SGBD para gerenciar o seu
                  banco de dados era algo opcional hoje é algo primordial,
                  devido às aplicações estarem cada vez mais utilizando dados, é
                  necessário ter um controle maior e mais eficiente e com um
                  SGBD você vai conseguir isso, com mais facilidade além de
                  muitas outras vantagens.
                </p>
              </div>
            </SectionContainer>
          </Section>
        </a>

        <a name="section-teoremaCAP">
          <Section>
            <SectionContainer>
              <Title size={2}>Teorema CAP</Title>

              <p>
                Teorema CAP ou Teorema de Brewer fala sobre as escolhas que se
                precisa tomar ao desenvolver um armazenamento de dados
                distribuído.
              </p>

              <p>
                O Teorema CAP afirma que não é possível que um sistema
                distribuído consiga aplicar às três características:
              </p>

              <div className="invert-colors">
                <ul className="list">
                  <li className="item">Consistência (Consistency);</li>
                  <li className="item">Disponibilidade (Availability);</li>
                  <li className="item">
                    Particionamento (Partition tolerance).
                  </li>
                </ul>
              </div>
            </SectionContainer>

            <SectionContainer>
              <Image
                src="/images/teorema-cap.png"
                alt="Teorema CAP"
                width={597}
                height={500}
                quality={100}
              />

              <div>
                <Title size={1.2}>
                  Consistência <br /> — Todo mundo vendo a mesma coisa? —
                </Title>
                <p>
                  Independente de qual seja o nó que o cliente esteja conectado,
                  todos devem ver a mesma coisa. Quando algo é registrado em um
                  nó, ele deve ser replicado aos outros nós.
                </p>
              </div>
              <div>
                <Title size={1.2}>
                  Disponibilidade <br /> — Todo mundo conseguindo acessar? —
                </Title>
                <p>
                  Se por um acaso, um nó estiver indisponível, o sistema deve
                  continuar respondendo. Não se tem a garantia de que o dado
                  esteja com a sua versão mais recente, mas se deve ter a
                  garantia da resposta sem falha.
                </p>
              </div>
              <div>
                <Title size={1.2}>
                  Particionamento <br /> — Mesmo sem um nó, continua
                  funcionando? —
                </Title>
                <p>
                  Caso os nós não consigam se comunicar, o sistema deve
                  continuar funcionando. Criando grupos de nós isolados que
                  mantenham o funcionamento do sistema.
                </p>
              </div>
            </SectionContainer>
          </Section>

          <Section>
            <SectionContainer>
              <p>
                Como o teorema CAP fala que só é possível um sistema distribuído
                possuir duas das três características, então temos três
                possibilidades:
              </p>

              <div className="invert-colors">
                <Title size={1} as="h4">
                  Sistemas CA (Consistência e Disponibilidade)
                </Title>

                <p>
                  Esse sistema entrega consistência e disponibilidade, mas no
                  caso de particionamento não entrega tolerância a falhas.
                </p>

                <Title size={0.8} as="h5">
                  Exemplos de bancos de dados que implementam CA:
                </Title>

                <ul className="list">
                  <li className="item">MySql</li>
                  <li className="item">Postgres</li>
                </ul>
              </div>

              <div className="invert-colors">
                <Title size={1} as="h4">
                  Sistemas CP (Consistência e Particionamento)
                </Title>

                <p>
                  Em caso de particionamento de dois nós, o sistema desativa o
                  nó inconsistente até ele estar novamente consistente com os
                  outros nós, assim o funcionamento consistente sempre se
                  mantém.
                </p>

                <Title size={0.8} as="h5">
                  Exemplos de bancos de dados que implementam CP:
                </Title>
                <ul className="list">
                  <li className="item">MongoDB</li>
                  <li className="item">HBa</li>
                </ul>
              </div>

              <div className="invert-colors">
                <Title size={1} as="h4">
                  Sistemas AP (Disponibilidade e Particionamento)
                </Title>

                <p>
                  Os nós sempre ficam disponíveis mesmo em caso de
                  particionamento e podem retornar uma versão antiga dos dados,
                  somente após a partição ser resolvida que os dados
                  inconsistentes são sincronizados.
                </p>

                <Title size={0.8} as="h5">
                  Exemplos de bancos de dados que implementam AP:
                </Title>

                <ul className="list">
                  <li className="item">Dynamo</li>
                  <li className="item">Cassandra</li>
                </ul>
              </div>
            </SectionContainer>
          </Section>
        </a>

        <a name="section-mongoDB">
          <Section>
            <SectionContainer>
              <Title size={2}>MongoDB e o Teorema CAP (CP)</Title>

              <p>
                O MongoDB é um sistema de gerenciamento de banco de dados NoSQL
                bastante conhecido, armazena dados como documentos BSON (JSON
                binário). É usado frequentemente para big data e aplicativos em
                tempo real com execução em vários locais diferentes. Relativo ao
                teorema CAP, o MongoDB é um armazenamento de dados CP, ou seja,
                resolve partições de rede mantendo a consistência, porém, não
                oferece disponibilidade.
              </p>
            </SectionContainer>
          </Section>
        </a>
      </Content>
    </>
  );
}
