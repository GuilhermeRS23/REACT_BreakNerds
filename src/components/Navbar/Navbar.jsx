import logo from "../../images/logo.png"
import { Button, ImagemLogo, InputSpace, Nav } from "./NavbarStyled"

export default function Navbar() {
    return (
        <>
            <Nav>
                <InputSpace>
                    <i className="bi bi-search"></i>
                    <input type="text" placeholder="Busque por um título..." />
                </InputSpace>
                <ImagemLogo src={logo} alt="Logo Breaking Nerds" />
                <Button>Entrar</Button>
            </Nav>
        </>
    )
}
