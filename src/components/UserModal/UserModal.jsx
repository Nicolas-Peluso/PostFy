import React from "react";
import Style from "./UserModal.module.css"

export default function UserModal(){
    return (
        <div className={Style.ModalContainer}>
            <ul>
                <li>
                    <p>username</p>
                </li>
                <li>
                    <p>publicar</p>
                </li>
                <li>
                    <p>meus conteudos</p>
                </li>
                <li>
                    <p>deslogar</p>
                </li>
            </ul>
        </div>
    )
}