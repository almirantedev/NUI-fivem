import React, { useEffect, useState } from "react";
import { useNuiEvent } from "../../hooks/useNuiEvent";
import { useVisibility } from "../../providers/VisibilityProvider";
import { fetchNui } from "../../utils/fetchNui";
import logoPolice from "../../assets/logo_police.png";
import avatarPolice from "../../assets/avatar_police.png";

import {
  BodyLeft,
  BodyRight,
  BoxCenter,
  BoxInputSearch,
  BoxLeft,
  BoxRight,
  ButtonConnect,
  ButtonSearch,
  Container,
  Header,
  InitialScreen,
  WrapperBody,
} from "./styles";
import Text from "../Text";
import Button from "../Button";
import Input from "../Input";

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
                </BodyLeft>

                <BodyRight>
                  <Text size="20px" weight="bold">
                    Observações:
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
