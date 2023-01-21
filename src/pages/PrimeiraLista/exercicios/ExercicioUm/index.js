import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

export default function ExercicioUm(){
    const [numUm, setNumUm] = useState('');
    const [numDois, setNumDois] = useState('');
    const [numTres, setNumTres] = useState('');
    const [soma, setSoma] = useState(0);

    const handleClick = () => {
        setSoma(Number(numUm) + Number(numDois) + Number(numTres));
    }

    return(
        <div className ="app">
            <Box id="ex01" mb={3}>
                <h1>Exercicio 01:</h1>
                <span >Faça um programa que leia três valores inteiros e imprima a soma deles.</span>
            </Box>
            <Box sx={{'& > :not(style)': { m: 1, width: '25ch' }}}>
                <TextField label="Primeiro Numero" size="small" value={numUm} onChange={e => setNumUm(e.target.value)}/>
                <TextField label="Segundo Numero" size="small" value={numDois} onChange={e => setNumDois(e.target.value)}/>
                <TextField label="Terceiro Numero" size="small" value={numTres} onChange={e => setNumTres(e.target.value)}/>
            </Box>
            <div>
              <Button variant="text" onClick={handleClick}>Testar</Button>
              <p>Resultado: {soma}</p>
            </div>
            <Divider textAlign='right'><Chip label="Next" /></Divider>
        </div>
    )
}