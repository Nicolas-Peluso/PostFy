import {useState} from "react";
import Style from "./Header.module.css"
import userImage from "../../assets/user.svg"
import UserModal from "../UserModal/UserModal";

function Header(){
const [visible, setVisible] = useState(false);

    return (
        <header className={Style.Header}>
            <nav className={Style.Container}>
                <ul>
                    <li onClick={() => setVisible(!visible)}>
                        <img src={userImage} alt="imagem usuario" />
                    </li>
                    <li>
                        <p>TabNicolas</p>
                    </li>
                    <li>
                        <p>Recentes</p>
                    </li>
                </ul>

                <ul>
                    <li>
                        <img src={userImage} alt="imagem usuario" />
                    </li>
                    <li className={Style.liModal}>
                        {visible ? <UserModal/> : <></>}
                    </li>
                </ul>
            </nav>
            
        </header>
    );
}

export default Header;

