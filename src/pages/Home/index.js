import React, { useState } from 'react';
import './style.css'



import Button from 'react-bootstrap/Button'

const People = () => {

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
                            <Button onClick={handleButton} variant="primary" >Primary</Button>{' '}
                            {click ? (
                                <div className="popuparea">
                                    <div 
                                        className="popup">
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

