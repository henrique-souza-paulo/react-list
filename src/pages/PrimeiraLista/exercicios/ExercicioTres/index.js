import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';



export default function ExercicioTres(){
    const [kelvin, setKelvin] = useState('');
    const [celsius, setCelsius] = useState(0);


    const handleClick = () => {
        setCelsius(Number(kelvin) - 273.15);
    }

    return(
        <div className ="app">

            <Box id="ex03" mb={3}>
                <h1>Exercicio 03:</h1>
                <span>
                Faça um programa para ler uma temperatura em graus Kelvin e apresentar a temperatura
                convertida em graus Celsius. A fórmula de conversão é: C = K – 273.15, sendo K a
                temperatura em Kelvin e C a temperatura em Celsius.
                </span>
            </Box>
            <Box sx={{'& > :not(style)': { m: 1, width: '25ch' }}}>

                <TextField label="Temperatura em Kelvin" size="small" value={kelvin} onChange={e => setKelvin(e.target.value)}/>

            </Box>
            <div>
                <Button variant="text" onClick={handleClick}>Testar</Button>
                <p>Temperatura em ºC: {celsius.toFixed(2)}</p>

            </div>

            <Divider textAlign='right'><Chip label="Next" /></Divider>
        </div>
    )
}