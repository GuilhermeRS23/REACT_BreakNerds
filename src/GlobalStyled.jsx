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
    text-decoration: none;
    font-family: var(--font-titulo);
    color: #06283D;
}

html{
    height: 100%;
    min-height: 100%;
}

body{
    max-width: 100vw;
    height: 100vh;
    background-color: var(--cor-azul-claro);
}

footer{
    margin-top: auto;
}
`