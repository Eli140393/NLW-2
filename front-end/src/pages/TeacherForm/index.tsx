import React from 'react';

import PageHeader from '../../componentes/PageHeader';
import Input from '../../componentes/Input';
import Textarea from '../../componentes/Textarea';
import Select from '../../componentes/Select';


import warningIcon from '../../assets/images/icons/warning.svg';


import  './styles.css';



function TeacherForm(){
    return(
        
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrivel que você quer dar aulas."
            description="O primeiro passo é preencher este formulário de inscrição"
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome completo"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="whatsapp" label="WhatsApp"/>
                    <Textarea name="bio" label="Biografia"/>
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select 
                    name="subject" 
                    label="Matéria"
                    options = {[
                        {value: 'Artes', label: 'Artes'},
                        {value: 'Biologia', label: 'Biologia'},
                        {value: 'Ciências', label: 'Ciências'},
                        {value: 'Matematica', label: 'Matematica'},
                        {value: 'Educação física', label: 'Educação física'},
                        {value: 'Física', label: 'Física'},
                        {value: 'Geografia', label: 'Geografia'},
                        {value: 'Hístoria', label: 'Hístoria'},
                        {value: 'Quimica', label: 'Quimica'},
                        {value: 'Português', label: 'Português'},
                        
                    ]}
                    />
                    <Input name="cost" label="Custo da sua hora por aula"/>
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br/>
                        Preencha todos os dados
                    </p>

                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}
 export default TeacherForm;