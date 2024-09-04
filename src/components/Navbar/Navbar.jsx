import logo from "../../images/logo.png"
import "./Navbar.css"

export default function Navbar() {
    return (
        <>
            <nav>
                <div className="input-search-space">
                <i className="bi bi-search"></i>
                    <input type="text" placeholder="Busque por um título..."/>
                </div>
                <img src={logo} alt="Logo Breaking Nerds" />
                <button>Entrar</button>
            </nav>
        </>
    )
}
