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


a{
    color: #06283D;
}

a:visited{
    color: var(--cor-primaria);
}


*{
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-family: var(--font-titulo);
}

html{
    height: 100%;
    min-height: 100%;
}

body{
    max-width: 100vw;
    min-height: 100vh;
    background-color: var(--cor-azul-claro);
    flex: 1;
}

footer{
    margin-top: auto;
    width: 100%;
}
`