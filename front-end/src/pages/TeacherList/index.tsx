import React, { FormEvent } from 'react';
import { useState } from 'react';
import api from '../../services/api';

import PageHeader from '../../componentes/PageHeader';
import TeacherItem, {Teacher} from '../../componentes/TeacherItem';
import Input from '../../componentes/Input';
import Select from '../../componentes/Select';


import './styles.css';



function TeacherList() {

    const [teachers, setTeachers] = useState([]);
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchTeacher(e: FormEvent) {
        e.preventDefault(); 

     const response =  await api.get('classes',{
            params: {
            subject,
            week_day,
            time
            }
        });

        setTeachers(response.data);
    }
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers" onSubmit={searchTeacher}>

                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value) }}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Matematica', label: 'Matematica' },
                            { value: 'Educação física', label: 'Educação física' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Hístoria', label: 'Hístoria' },
                            { value: 'Química', label: 'Química' },
                            { value: 'Português', label: 'Português' },

                        ]}
                    />
                    <Select
                        name="week-day"
                        label="Dia da semana"
                        value={week_day}
                        onChange={(e) => { setWeekDay(e.target.value) }}
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
                    <Input
                        type="time"
                        name="time"
                        label="horas"
                        value={time}
                        onChange={(e) => { setTime(e.target.value) }}
                    />
                    <button type="submit">
                        Buscar
                    </button>



                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) =>{
                  return <TeacherItem key={teacher.id} teacher={teacher}/> ;
                })}

            </main>
        </div>
    )
}
export default TeacherList;