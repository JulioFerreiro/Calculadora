import React, { useState } from "react";
import "./calcstyle.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";

export default function Calculadora() {
  const [num, setNum] = useState(0);
  const [salvar, setSalvar] = useState(0);
  const [opera, setOperador] = useState();

  function inputNum(e) {
    let input = e.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function clear() {
    setNum(0);
  }

  function porcentage() {
    setNum(num / 100);
  }

  function operador() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }

  function calcular() {
    if(opera === '/'){
      setNum(salvar / num);
    }
    if(opera === '+'){
      setNum(parseFloat(salvar) + parseFloat(num));
    }
    if(opera === '-') {
      setNum(salvar - num);
    }
    if(opera === 'x') {
      setNum(salvar * num);
    }
    
  }

  function operadorHeadle(e) {
    let operadorInput = e.target.value;
    setOperador(operadorInput)
    setSalvar(num)
    setNum(0)
  }

  return (
    <div>
      <Box m={3} />
      <Container maxWidth="xs">
        <div class="fundo">
          <h1 className="resultado">{num}</h1>
          <button onClick={clear}>AC</button>
          <button onClick={operador}>+/-</button>
          <button onClick={porcentage}>%</button>
          <button class="colororange" onClick={operadorHeadle} value={'/'}>
            /
          </button>
          <button className="gray" onClick={inputNum} value={8}>
            8
          </button>
          <button className="gray" onClick={inputNum} value={7}>
            7
          </button>
          <button className="gray" onClick={inputNum} value={9}>
            9
          </button>
          <button class="colororange" onClick={operadorHeadle} value={'x'}>
            X
          </button>
          <button className="gray" onClick={inputNum} value={4}>
            4
          </button>
          <button className="gray" onClick={inputNum} value={5}>
            5
          </button>
          <button className="gray" onClick={inputNum} value={6}>
            6
          </button>
          <button class="colororange" onClick={operadorHeadle} value={'-'}>
            -
          </button>
          <button className="gray" onClick={inputNum} value={1}>
            1
          </button>
          <button className="gray" onClick={inputNum} value={2}>
            2
          </button>
          <button className="gray" onClick={inputNum} value={3}>
            3
          </button>
          <button class="colororange" onClick={operadorHeadle} value={'+'}>
            +
          </button>
          <button className="gray" onClick={inputNum} value={0}>
            0
          </button>
          <button className="gray" onClick={inputNum} value={"."}>
            .
          </button>
          <button className="gray" style={{ visibility: "hidden" }}>
            .
          </button>
          <button className="colororange" onClick={calcular}>
            =
          </button>
        </div>
      </Container>
    </div>
  );
  }