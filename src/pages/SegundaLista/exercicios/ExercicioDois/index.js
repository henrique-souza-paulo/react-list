import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

export default function ExercicioDois(){
    const [latao, setLatao] = useState('');
    const [resultado, setResultado] = useState('');

    const handleClick = () => {
        const cobre = latao * 7
        const zinco = latao * 3

        setResultado(`Sera necessario ${cobre} de cobre e ${zinco} de zinco`)
    }

    return(
        <div className ="app">
            <Box id="ex02" mb={3}>
                <h1>Exercicio 02:</h1>
                <span>
                    Sabendo que o latão é obtido fundindo-se sete partes de cobre com três partes de zinco, escreva
                    um programa que solicite ao usuário quantos quilos de latão ele quer produzir e imprima na
                    tela quantos quilos de cobre e zinco serão necessários.
                </span>
            </Box>
            <Box sx={{'& > :not(style)': { m: 1, width: '25ch' }}}>
                <TextField label="Quantos kg de latao deseja?" size="small" value={latao} onChange={e => setLatao(e.target.value)}/>
            </Box>
            <div>
                <Button variant="text" onClick={handleClick}>Testar</Button>
                <p>{resultado}</p>
            </div>
            <Divider textAlign='right'><Chip label="Next" /></Divider>
        </div>
    )
}