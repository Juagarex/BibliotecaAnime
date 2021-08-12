import { useState } from "react";
import React from "react";
import { Container } from "./Login.elements";

const Login = () => {
  const [toggle, setToggle] = useState(true);

  function active_disable() {
       setToggle(!toggle);
       console.log(toggle);
  }

  return (
    <>
      <Container>
        <h3 className={ toggle ? 'active': 'disable'} >
          Hola mundo
        </h3>
        <button onClick={active_disable}> Ocultar </button>
      </Container>
    </>
  );
};

export default Login;
