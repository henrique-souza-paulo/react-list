import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';



export default function ExercicioDois(){
    const [numUm, setNumUm] = useState('');
    const [ante, setAnte] = useState(0);
    const [suce, setSuce] = useState(0);


    const handleClick = () => {
        setAnte(Number(numUm) - 1);
        setSuce(Number(numUm) + 1);
    }

    return(
        <div className ="app">

            <Box id="ex02" mb={3}>
                <h1>Exercicio 02:</h1>
                <span>Faça um programa que leia um número inteiro e imprima o seu antecessor e o seu sucessor.</span>
            </Box>
            <Box sx={{'& > :not(style)': { m: 1, width: '25ch' }}}>

                <TextField label="Primeiro Numero" size="small" value={numUm} onChange={e => setNumUm(e.target.value)}/>

            </Box>
            <div>
                <Button variant="text" onClick={handleClick}>Testar</Button>
                <p>Antecessor: {ante}</p>
                <p>Sucessor: {suce}</p>

            </div>

            <Divider textAlign='right'><Chip label="Next" /></Divider>
        </div>
    )
}