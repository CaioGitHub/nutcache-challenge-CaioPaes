import React from 'react';
import '../styles/app.css'

import Button from 'react-bootstrap/Button'

import second from '../teste';

import {Link } from "react-router-dom";

const App = () => {
    return (
        <div className="main-conteiner">
            <header class="row">

            </header>
            <body>

                <div className="container">
                    <h2>People List</h2>
                    <form action="">
                        <div className="btn1">
                            <Button variant="primary" >Primary</Button>{' '}
                        </div>

                        <div className="btn2">
                            <button class="btn btn-lg btn-block btn-danger" onClick={event =>  window.location.href='../teste/index'}>Entrar</button>
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

export default App;

