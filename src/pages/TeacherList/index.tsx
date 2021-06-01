import React from 'react';
import PageHeader from '../../componentes/PageHeader';


import whatsappIcon from  '../../assets/images/icons/whatsapp.svg'
import  './styles.css';

function TeacherList(){
    return(
        <div id="page-teacher-list"  className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week-day">Dia da semana</label>
                        <input type="text" id="week-day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>

            <main>
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
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button"> </button>
                        <img src={whatsappIcon} alt="whatsapp" />
                        Entrar em contato
                    </footer>
                </article>
            </main>
        </div>
    )
}
 export default TeacherList;