import React, { useState, useEffect } from 'react';
import './style.css'

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { MenuItem } from '@mui/material';
import AdapterDateFns from "@material-ui/lab/AdapterDateFns"
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DatePicker from '@material-ui/lab/DatePicker';
import InputMask from 'react-input-mask'

import "react-datepicker/dist/react-datepicker.css";

import Button from 'react-bootstrap/Button'
import User from '../../components/User';



const People = () => {

    const [currency, setCurrency] = useState('');
    
    const [click, setClick] = useState(false);
    const [clickD, setClickD] = useState(false);
    const [clickL, setClickL] = useState(false);
    const [value, setValue] = useState(new Date());
    const [users, setUsers] = useState([]);
    
    const gender = [
        {
            value: 'Male',
            label: 'Male',
        },
        {
            value: 'Female',
            label: 'Female',
        },
        {
            value: 'Neuter',
            label: 'Neuter',
        },
    ];

    const handleChange = (event) => {
        setCurrency(event.target.value);
    }

    function handleButton() {
        setClick(true)
    }

    function handleButtonD() {
        setClickD(true)
    }

    

    function handleButtonL() {
        setClickL(true)
    }

    function metodoPost() {
        createObject()
        post(createObject())
    }

    function metodoDelete() {
        createDelete()
        Delete(createDelete())
    }

    function createDelete() {
        const deleteId = {}
        deleteId["idDelete"] = document.getElementById("idDelete").value
        return deleteId
    }

    function createObject() {
        const data = {}
        data["idname"] = document.getElementById("name").value
        data["idbirthdate"] = value.toJSON()
        data["idgender"] = document.getElementById("gender").innerHTML
        data["idcpf"] = document.getElementById("cpf").value
        data["idemail"] = document.getElementById("email").value
        data["idstartdate"] = document.getElementById("startdate").value
        console.log(data)
        return data
    }

    useEffect(() => {
        fetchDate();
    }, [])

    const fetchDate = async () => {
        await fetch('https://6175effb03178d00173daa19.mockapi.io/peoplelist/people')
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => {
                console.log(err);
            })
    }

    function post(data) {

        const requestPost = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch("https://6175effb03178d00173daa19.mockapi.io/peoplelist/people", requestPost).then(
            response => {
                console.log(response)
            }
        ).catch(erro => {
            console.log(erro)
        })
    }

    function Delete(deleteId) {
        const requestDelete = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },

        };
        fetch("https://6175effb03178d00173daa19.mockapi.io/peoplelist/people/" + document.getElementById("idDelete").value, requestDelete).then(
            response => {
                console.log(response)
            }
        ).catch(erro => {
            console.log(erro)
        })
    }



    return (
        <div className="main-conteiner">

            <div className="container">
                <h2>People List</h2>

                <div className="btn1">
                    <Button className="ui-button" onClick={handleButton}>Register</Button>{' '}
                    {click ? (
                        <div className="popuparea">
                            <div className="popup">
                                <Box
                                    className="box"
                                    component="form"
                                    sx={{
                                        "& > :not(style)": { m: 1, width: "20ch" }
                                    }}
                                    noValidat
                                    autoComplete="off"
                                >

                                    <TextField className="date" id="name" label="Name" variant="outlined" />

                                    <LocalizationProvider dateAdapter={AdapterDateFns}>

                                        <DatePicker className="date"
                                            id="idbirthdate"
                                            OpenPickerIcon={<ArrowDropDownIcon />}
                                            placeholderText="Date"
                                            label="Birth Date"
                                            value={value}
                                            minDate={new Date("2017-01-01")}
                                            onChange={(newValue) => {
                                                setValue(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />

                                    </LocalizationProvider>

                                    <TextField className="date" id="gender" select label="Gender" value={currency} onChange={handleChange}
                                    >
                                        {gender.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField className="date" id="cpf" label="cpf" variant="outlined" />
                                    <TextField className="date" id="email" label="email" variant="outlined" />
                                    <TextField className="date" id="startdate" label="startdate" variant="outlined">
                                        <InputMask mask="(0)9 9 9" />
                                    </TextField>
                                </Box>

                                <button className="btngeral" onClick={() => metodoPost()} type="submit">Create</button> {" "}

                                <button className="btnclose" onClick={() => setClick(false)}>Close</button>

                            </div>
                        </div>
                    ) : null}

                </div>

                <div className="btn1">
                    <Button className="ui-button" onClick={handleButtonD}>Delete</Button>{' '}
                    {clickD ? (
                        <div className="popupareadelete">
                            <div className="popupdelete">
                                <div className="txtdelete">
                                    <TextField id="idDelete" label="ID" variant="outlined" />

                                    <button className="btngeral" onClick={() => metodoDelete()} type="submit">Delete</button> {" "}

                                    <button className="btnclose" onClick={() => setClickD(false)}>Close</button>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>

                <div className="btn1">

                    <Button className="ui-button" onClick={handleButtonL}>List</Button>{' '}
                    {clickL ? (
                        <div className="popuparealist">
                            <div className="popuplist">
                                
                                <div className="txtlist">                                    
                                    {
                                        users.map((user) => (
                                            <User id={user.id}
                                                key={user.id}
                                                idname={user.idname}
                                                idbirthdate={user.idbirthdate}
                                                idgender={user.idgender}
                                                idcpf={user.idcpf}
                                                idemail={user.idemail}
                                                idstartdate={user.idstartdate}
                                            />
                                        ))
                                    }

                                </div>
                                <div className="btncloselist">
                                    <button className="btnclose" onClick={() => setClickL(false)}>Close</button>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default People;

