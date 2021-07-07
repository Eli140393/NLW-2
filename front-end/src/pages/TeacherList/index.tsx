import React from 'react';
import PageHeader from '../../componentes/PageHeader';
import TeacherItem from '../../componentes/TeacherItem';
import Input from '../../componentes/Input';

import  './styles.css';
import Select from '../../componentes/Select';

function TeacherList(){
    return(
        <div id="page-teacher-list"  className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
  
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
                 <Select 
                    name="week-day" 
                    label="Dia da semana"
                    options = {[
                        {value: '0', label: 'Domingo'},
                        {value: '1', label: 'Segunda-feira'},
                        {value: '2', label: 'Terça-feria'},
                        {value: '3', label: 'Quarta-feira'},
                        {value: '4', label: 'Quinta-feira'},
                        {value: '5', label: 'Sexta-feira'},
                        {value: '6', label: 'Sabado'},
                                             
                    ]}
                    />
            <Input  type="time" name="time" label="horas"/>
                   
                </form>
            </PageHeader>

            <main>
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/>

            </main>
        </div>
    )
}
 export default TeacherList;