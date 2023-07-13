import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  var test = (localStorage.getItem('users_bd')).replace("[","")
  var test = test.replace("]","")
  test = test.replaceAll("},{",",")
  test = JSON.parse(test)

  return (
    <C.Container>
      <C.Title>Olá {test.name} 😈</C.Title>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Container>
  );
};

export default Home;
