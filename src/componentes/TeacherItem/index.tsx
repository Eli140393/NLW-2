import React from 'react';
import  './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars.githubusercontent.com/u/47793192?v=4" alt="Eliezer Defilicibus" />
                <div>
                    <strong>Eliezer Defilicibus</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada.

            <br /><br />
            Apaixonado por explodir cois em laboratório e por mudar a vida das pessoas através das minhas experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
        </p>
            <footer>
                <p>
                    Preço/hora
                <strong>  R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp" />
            Entrar em contato
            </button>

            </footer>
        </article>
    )
}
export default TeacherItem;
