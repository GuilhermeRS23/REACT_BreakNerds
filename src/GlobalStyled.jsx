import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

*{
    margin: 0;
    padding: 0;
    font-family: "Barlow", sans-serif;
}

html{
    width: auto;
}

body{
    max-width: 100vw;
    height: 100vh;
    background-color: #EBF2FA;
}
`