import {useContext, useEffect} from "react";
import Style from "./Header.module.css"
import userImage from "../../assets/user.svg"
import UserModal from "../UserModal/UserModal";
import { context } from "../../usercontext/context";

function Header(){
const {isVisible, setVisibility} = useContext(context)

//close modal lógica
useEffect(() => {
    function breakAnimation(event){
        if(event.target.className !== 'Header_teste__CJn+k' && event.target.className !== 'UserModal_ModalContainer__3PIgN') setVisibility(false)  
    }
    document.addEventListener("click", event => breakAnimation(event))
    return () => document.removeEventListener("click", event => breakAnimation(event))
}, [isVisible, setVisibility])

return (
        <header className={Style.Header}>
            <nav className={Style.Container}>
                <ul>
                    <li onClick={() => setVisibility(!isVisible)}>
                        <img src={userImage} alt="imagem usuario" className={Style.teste}/>
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
                        {isVisible ? <UserModal/> : <></>}
                    </li>
                </ul>
            </nav>
            
        </header>
    );
}

export default Header;

