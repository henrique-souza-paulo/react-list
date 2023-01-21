import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';



export default function ExercicioCinco(){
    const [numero, setNumero] = useState(0);
    const [resul, setResul] = useState(0);


    const handleClick = () => {
        const resultado = Number(numero) * Number(numero)
        setResul(resultado);
    }

    return(
        <div className ="app">

            <Box id="ex05" mb={3}>
                <h1>Exercicio 05:</h1>
                <span>
                    Faça um programa que leia um número e imprima o resultado do quadrado desse número.
                </span>
            </Box>
            <Box sx={{'& > :not(style)': { m: 1, width: '25ch' }}}>

                <TextField label="Numero" size="small" value={numero} onChange={e => setNumero(e.target.value)}/>

            </Box>
            <div>
                <Button variant="text" onClick={handleClick}>Testar</Button>
                <p>{numero}² = {resul}</p>

            </div>

            <Divider textAlign='right'><Chip label="Next" /></Divider>
        </div>
    )
}