import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

export default function ExercicioTres(){
    const [numero, setNumero] = useState('');
    const [resultado, setResultado] = useState('');

    const handleClick = () => {
        if(Number(numero) % 2 === 0){
            setResultado(`O numero é par`)
        } else {
            setResultado(`O numero é impar`)
        }
    }

    return(
        <div className ="app">
            <Box id="ex03" mb={3}>
                <h1>Exercicio 03:</h1>
                <span>
                    Faça um programa que receba um número inteiro e verifique se este número é par ou ímpar.
                    Identificamos se um número é par ou ímpar quando o dividimos por dois. Se o resto da divisão
                    for zero, o número é par, caso contrário, é ímpar.
                </span>
            </Box>
            <Box sx={{'& > :not(style)': { m: 1, width: '25ch' }}}>
                <TextField label="Digite um numero" size="small" value={numero} onChange={e => setNumero(e.target.value)}/>
            </Box>
            <div>
                <Button variant="text" onClick={handleClick}>Testar</Button>
                <p>{resultado}</p>
            </div>
            <Divider textAlign='right'><Chip label="Next" /></Divider>
        </div>
    )
}