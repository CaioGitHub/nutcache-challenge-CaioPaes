import React, { useState, useRef } from 'react';
import './style.css'
import { Form } from '@unform/web'


import Button from 'react-bootstrap/Button'

import Input from '../../components/Form/input'

const People = () => {

    const formRef = useRef(null);

    function handleSubmit(data){
        if(data.name === "") {
            formRef.current.setFieldError('name', 'O nome é obrigatório')
        }
        console.log(data);
    }

    const [click, setClick] = useState(false)

    function handleButton() {
        setClick(true)
    }

    return (
        <div className="main-conteiner">
            <header class="row">

            </header>
            <body>

                <div className="container">
                    <h2>People List</h2>
                    <form action="">
                        <div className="btn1">
                            <Button onClick={handleButton}>Cadastrar</Button>{' '}
                            {click ? (
                                <div className="popuparea">
                                    <div 
                                        className="popup">
                                            <Form ref={formRef} onSubmit={handleSubmit}>

                                                <Input name="name" />
                                                <Input name="birthDate" />
                                                <Input name="gender" />
                                                <Input type="email" name="email" />
                                                <Input name="cpf" />
                                                <Input name="startDate" />     

                                                <button type="submit">Enviar</button>                                           

                                            </Form>
                                            <button onClick={()=>setClick(false)}>fechar</button>

                                    </div>
                                </div>
                            ) : null}

                        </div>

                        <div className="btn2">
                            <button class="btn btn-lg btn-block btn-danger" onClick={event => window.location.href = '../teste/index'}>Entrar</button>
                        </div>

                        <div className="btn3">
                            <button class="btn btn-lg btn-block btn-danger">Entrar</button>
                        </div>

                    </form>

                </div>
            </body>
        </div>

    );
}

export default People;

