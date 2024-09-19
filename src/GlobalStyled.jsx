import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
:root{
    --cor-primaria: #06283D;
    --cor-secundaria: #1363DF;
    --cor-terciaria: #47B5FF;
    --cor-azul-claro: #DFF6FF;

    --font-titulo: "Play", sans-serif;
    --font-principal: "Titillium Web", sans-serif;
    --font-secundaria: "Ubuntu", sans-serif;
}

*{
    margin: 0;
    padding: 0;
    font-family: var(--font-titulo);
}

html{
    width: auto;
}

body{
    max-width: 100vw;
    height: 100vh;
    background-color: var(--cor-azul-claro);
}
`