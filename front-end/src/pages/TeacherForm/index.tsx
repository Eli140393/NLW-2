import React , {useState} from 'react';

import PageHeader from '../../componentes/PageHeader';
import Input from '../../componentes/Input';
import Textarea from '../../componentes/Textarea';
import Select from '../../componentes/Select';


import warningIcon from '../../assets/images/icons/warning.svg';


import './styles.css';



function TeacherForm() {
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [WhatsApp, setWhatsApp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');


 const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' } 
 ])
   

    function addNewScheduleItem(){
        setScheduleItems([
           ...scheduleItems,
           { week_day: 0, from: '', to: '' } 
        ]);
    }

    function handleCreateClass()
    return (

        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrivel que você quer dar aulas."
                description="O primeiro passo é preencher este formulário de inscrição"
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input
                     name="name"
                      label="Nome completo"
                      value={name}
                      onChange={(e) => {setName(e.target.value)}} />

                    <Input 
                    name="avatar"
                    label="Avatar"
                    value={avatar}
                    onChange={(e) => {setAvatar(e.target.value)}} />

                    <Input
                     name="whatsapp"
                     label="WhatsApp"
                     value={WhatsApp}
                     onChange={(e) => {setWhatsApp(e.target.value)}} />

                    <Textarea
                     name="bio"
                     label="Biografia"
                     value={bio}
                     onChange={(e) => {setBio(e.target.value)}} />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={(e) =>{setSubject(e.target.value)}}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Matematica', label: 'Matematica' },
                            { value: 'Educação física', label: 'Educação física' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Hístoria', label: 'Hístoria' },
                            { value: 'Quimica', label: 'Quimica' },
                            { value: 'Português', label: 'Português' },

                        ]}
                    />
                    <Input
                     name="cost"
                     label="Custo da sua hora por aula"
                     value={cost}
                     onChange={(e) =>{setCost(e.target.value)}} />
                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="button" onClick={addNewScheduleItem}>
                            + Novo horário
                        </button>
                    </legend>
                   {scheduleItems.map(scheduleItem =>{
                       return(
                        <div key={scheduleItem.week_day} className="schedule-item">
                        <Select
                            name="week-day"
                            label="Dia da semana"
                            options={[
                                { value: '0', label: 'Domingo' },
                                { value: '1', label: 'Segunda-feira' },
                                { value: '2', label: 'Terça-feria' },
                                { value: '3', label: 'Quarta-feira' },
                                { value: '4', label: 'Quinta-feira' },
                                { value: '5', label: 'Sexta-feira' },
                                { value: '6', label: 'Sabado' },

                            ]}
                        />
                        <Input name="from" label="Das" type="time"/>
                        <Input name="to" label="Até" type="time"/>

                    </div>
                       );
                   })}
                </fieldset>
                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br />
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