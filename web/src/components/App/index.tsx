import React, { useEffect, useState } from "react";
import { useNuiEvent } from "../../hooks/useNuiEvent";
import { useVisibility } from "../../providers/VisibilityProvider";
import { fetchNui } from "../../utils/fetchNui";
import logoPolice from "../../assets/logo_police.png";
import avatarPolice from "../../assets/avatar_police.png";

import {
  BodyLeft,
  BodyRight,
  BoxBottom,
  BoxCenter,
  BoxInputSearch,
  BoxLeft,
  BoxPrison,
  BoxRight,
  BoxTop,
  ButtonConnect,
  ButtonSearch,
  CompleteData,
  Container,
  Header,
  InitialScreen,
  PersonData,
  Prisons,
  WrapperBody,
} from "./styles";
import Text from "../Text";
import Button from "../Button";
import Input from "../Input";
import Separator from "../Separator";

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [connected, setConnected] = useState(false);
  const { visible, setVisible } = useVisibility();
  const [data, setData] = useState();

  useNuiEvent("open", () => {
    setVisible(true);
  });

  useNuiEvent("close", () => {
    setVisible(false);
  });

  const handleConnectUser = async () => {
    try {
      setLoading(true);
      const res = await fetchNui("getUser");
      setData(res);
      console.log("testando a res>>", res["result"][0]);
      setLoading(false);
      setConnected(true);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleKeyUp = (e: any) => {
    if (e.keyCode === 27) {
      fetchNui("closeTablet");
      setTimeout(() => {
        setConnected(false);
      }, 500);
    }
  };

  useEffect(() => {
    document.addEventListener("keyup", (e) => handleKeyUp(e));
    return () => {
      document.removeEventListener("keyup", () => {});
    };
  }, []);

  return (
    <>
      {visible && (
        <Container>
          {!connected && !loading && (
            <InitialScreen>
              <img src={logoPolice} alt="" />
              <Button
                height="60px"
                width="280px"
                type="button"
                onClick={handleConnectUser}
              >
                CONECTAR
              </Button>
            </InitialScreen>
          )}

          {/* <Header>
            <BoxLeft>
              <img src={logoPolice} alt="" />
              <Text weight="bold" textColor="#e1e1e6">
                Sistema policial
              </Text>
            </BoxLeft>
            <BoxCenter>
              <Text weight="bold" textColor="#e1e1e6">
                Prisão
              </Text>
              <Text weight="bold" textColor="#e1e1e6">
                Multa
              </Text>
              <Text weight="bold" textColor="#e1e1e6">
                Código Penal
              </Text>
            </BoxCenter>
            <BoxRight>
              <Text weight="bold" textColor="#e1e1e6">
                Test
              </Text>
              <div>
                <img src={avatarPolice} alt="" />
              </div>
            </BoxRight>
          </Header>

          <WrapperBody>
            <BodyLeft>
              <BoxInputSearch>
                <Input
                  height="45px"
                  width="100%"
                  type="number"
                  placeholder="Consulte o passaporte..."
                  onChange={(e) => console.log(e)}
                />

                <Button
                  height="45px"
                  width="150px"
                  type="button"
                  onClick={() => {}}
                >
                  Buscar
                </Button>
              </BoxInputSearch>

              <PersonData>
                <Text weight="bold" size="20px">
                  Nome da pessoa
                </Text>

                <CompleteData>
                  <Text textColor="#1B1A1A">
                    <strong>Passaporte:</strong>{" "}
                    <Text textColor="#1B1A1A">123</Text>
                  </Text>
                  <Text textColor="#1B1A1A">
                    <strong>Nome:</strong>{" "}
                    <Text textColor="#1B1A1A">Nome da pessoa</Text>
                  </Text>
                  <Text textColor="#1B1A1A">
                    <strong>Telefone:</strong>{" "}
                    <Text textColor="#1B1A1A">123-456</Text>
                  </Text>
                  <Text textColor="#1B1A1A">
                    <strong>Multas:</strong> <Text textColor="#1B1A1A">$0</Text>
                  </Text>
                  <Text textColor="#1B1A1A">
                    <strong>Nacionalidade:</strong>{" "}
                    <Text textColor="#1B1A1A">Sul</Text>
                  </Text>
                  <Text textColor="#1B1A1A">
                    <strong>Porte de armas:</strong>{" "}
                    <Text textColor="#1B1A1A">Não</Text>
                  </Text>
                </CompleteData>

                <Text weight="bold" size="20px">
                  Histórico de prisões
                </Text>

                <Prisons>
                  <BoxPrison>
                    <BoxTop>
                      <Text textColor="#1B1A1A">
                        <strong>Policial:</strong>{" "}
                        <Text textColor="#1B1A1A">Roberto Dinamite</Text>
                      </Text>
                      <Text textColor="#1B1A1A">
                        <strong>Serviços:</strong>{" "}
                        <Text textColor="#1B1A1A">100</Text>
                      </Text>
                      <Text textColor="#1B1A1A">
                        <strong>Multa:</strong>{" "}
                        <Text textColor="#1B1A1A">$ 1.000</Text>
                      </Text>
                      <Text weight="bold" textColor="#1B1A1A">
                        10/03/2023 ás 17:29
                      </Text>
                    </BoxTop>
                    <BoxBottom>
                      <Text textColor="#1B1A1A">
                        Tentativa de homicidio, fuga, se veste mal
                      </Text>
                    </BoxBottom>
                  </BoxPrison>

                  <BoxPrison>
                    <BoxTop>
                      <Text textColor="#1B1A1A">
                        <strong>Policial:</strong>{" "}
                        <Text textColor="#1B1A1A">Ribamar</Text>
                      </Text>
                      <Text textColor="#1B1A1A">
                        <strong>Serviços:</strong>{" "}
                        <Text textColor="#1B1A1A">10</Text>
                      </Text>
                      <Text textColor="#1B1A1A">
                        <strong>Multa:</strong>{" "}
                        <Text textColor="#1B1A1A">$ 1.000</Text>
                      </Text>
                      <Text weight="bold" textColor="#1B1A1A">
                        10/03/2023 ás 13:35
                      </Text>
                    </BoxTop>
                    <BoxBottom>
                      <Text textColor="#1B1A1A">Perde muito gol</Text>
                    </BoxBottom>
                  </BoxPrison>
                </Prisons>
              </PersonData>
            </BodyLeft>

            <Separator />

            <BodyRight>
              <Text type="h1" size="20px" weight="bold">
                Observações:
              </Text>
              <Text size="20px" weight="bold">
                1 - Todas as informações encontradas são de uso exclusivo
                policial, tudo que for encontrado na mesma são informações em
                tempo real
              </Text>
              <Text size="20px" weight="bold">
                2 - Nunca forneça qualquer informação dessa página para outra
                pessoa, apenas se a pessoa for o proprietário ou o advogado do
                mesmo
              </Text>
            </BodyRight>
          </WrapperBody> */}

          {connected && !loading && data && (
            <>
              <Header>
                <BoxLeft>
                  <img src={logoPolice} alt="" />
                  <Text weight="bold" textColor="#e1e1e6">
                    Sistema policial
                  </Text>
                </BoxLeft>
                <BoxCenter>
                  <Text weight="bold" textColor="#e1e1e6">
                    Prisão
                  </Text>
                  <Text weight="bold" textColor="#e1e1e6">
                    Multa
                  </Text>
                  <Text weight="bold" textColor="#e1e1e6">
                    Código Penal
                  </Text>
                </BoxCenter>
                <BoxRight>
                  <Text weight="bold" textColor="#e1e1e6">
                    {data["result"][0]}
                  </Text>
                  <div>
                    <img src={avatarPolice} alt="" />
                  </div>
                </BoxRight>
              </Header>

              <WrapperBody>
                <BodyLeft>
                  <BoxInputSearch>
                    <Input
                      height="45px"
                      width="100%"
                      type="number"
                      placeholder="Consulte o passaporte..."
                      onChange={(e) => console.log(e)}
                    />

                    <Button
                      height="45px"
                      width="150px"
                      type="button"
                      onClick={() => {}}
                    >
                      Buscar
                    </Button>
                  </BoxInputSearch>

                  <PersonData>
                    <Text weight="bold" size="20px">
                      Nome da pessoa
                    </Text>

                    <CompleteData>
                      <Text textColor="#1B1A1A">
                        <strong>Passaporte:</strong>{" "}
                        <Text textColor="#1B1A1A">123</Text>
                      </Text>
                      <Text textColor="#1B1A1A">
                        <strong>Nome:</strong>{" "}
                        <Text textColor="#1B1A1A">Nome da pessoa</Text>
                      </Text>
                      <Text textColor="#1B1A1A">
                        <strong>Telefone:</strong>{" "}
                        <Text textColor="#1B1A1A">123-456</Text>
                      </Text>
                      <Text textColor="#1B1A1A">
                        <strong>Multas:</strong>{" "}
                        <Text textColor="#1B1A1A">$0</Text>
                      </Text>
                      <Text textColor="#1B1A1A">
                        <strong>Nacionalidade:</strong>{" "}
                        <Text textColor="#1B1A1A">Sul</Text>
                      </Text>
                      <Text textColor="#1B1A1A">
                        <strong>Porte de armas:</strong>{" "}
                        <Text textColor="#1B1A1A">Não</Text>
                      </Text>
                    </CompleteData>

                    <Text weight="bold" size="20px">
                      Histórico de prisões
                    </Text>

                    <Prisons>
                      <BoxPrison>
                        <BoxTop>
                          <Text textColor="#1B1A1A">
                            <strong>Policial:</strong>{" "}
                            <Text textColor="#1B1A1A">Roberto Dinamite</Text>
                          </Text>
                          <Text textColor="#1B1A1A">
                            <strong>Serviços:</strong>{" "}
                            <Text textColor="#1B1A1A">100</Text>
                          </Text>
                          <Text textColor="#1B1A1A">
                            <strong>Multa:</strong>{" "}
                            <Text textColor="#1B1A1A">$ 1.000</Text>
                          </Text>
                          <Text weight="bold" textColor="#1B1A1A">
                            10/03/2023 ás 17:29
                          </Text>
                        </BoxTop>
                        <BoxBottom>
                          <Text textColor="#1B1A1A">
                            Tentativa de homicidio, fuga, se veste mal
                          </Text>
                        </BoxBottom>
                      </BoxPrison>

                      <BoxPrison>
                        <BoxTop>
                          <Text textColor="#1B1A1A">
                            <strong>Policial:</strong>{" "}
                            <Text textColor="#1B1A1A">Ribamar</Text>
                          </Text>
                          <Text textColor="#1B1A1A">
                            <strong>Serviços:</strong>{" "}
                            <Text textColor="#1B1A1A">10</Text>
                          </Text>
                          <Text textColor="#1B1A1A">
                            <strong>Multa:</strong>{" "}
                            <Text textColor="#1B1A1A">$ 1.000</Text>
                          </Text>
                          <Text weight="bold" textColor="#1B1A1A">
                            10/03/2023 ás 13:35
                          </Text>
                        </BoxTop>
                        <BoxBottom>
                          <Text textColor="#1B1A1A">Perde muito gol</Text>
                        </BoxBottom>
                      </BoxPrison>
                    </Prisons>
                  </PersonData>
                </BodyLeft>

                <Separator />

                <BodyRight>
                  <Text type="h1" size="20px" weight="bold">
                    Observações:
                  </Text>
                  <Text size="20px" weight="bold">
                    1 - Todas as informações encontradas são de uso exclusivo
                    policial, tudo que for encontrado na mesma são informações
                    em tempo real
                  </Text>
                  <Text size="20px" weight="bold">
                    2 - Nunca forneça qualquer informação dessa página para
                    outra pessoa, apenas se a pessoa for o proprietário ou o
                    advogado do mesmo
                  </Text>
                </BodyRight>
              </WrapperBody>
            </>
          )}
        </Container>
      )}
    </>
  );
};

export default App;
