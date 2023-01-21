import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

export default function ExercicioUm(){
    const [numUm, setNumUm] = useState('');
    const [resultado, setResultado] = useState('');

    const handleClick = () => {
        if(Number(numUm) >= 100){
            setResultado(`Número maior ou igual a 100`);
        } else {
            setResultado(`Número menor que 100`);
        }
    }

    return(
        <div className ="app">
            <Box id="ex01" mb={3}>
                <h1>Exercicio 01:</h1>
                <span>
                    Faça um programa que leia um número inteiro X. Se o número for maior ou igual a 100 emitir
                    uma mensagem dizendo “Número maior ou igual a 100”, senão, emitir uma mensagem dizendo
                    “Número menor que 100”.
                </span>
            </Box>
            <Box sx={{'& > :not(style)': { m: 1, width: '25ch' }}}>
                <TextField label="Primeiro Numero" size="small" value={numUm} onChange={e => setNumUm(e.target.value)}/>
            </Box>
            <div>
                <Button variant="text" onClick={handleClick}>Testar</Button>
                <p>{resultado}</p>
            </div>
            <Divider textAlign='right'><Chip label="Next" /></Divider>
        </div>
    )
}