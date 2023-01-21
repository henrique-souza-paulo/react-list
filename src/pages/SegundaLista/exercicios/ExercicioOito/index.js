import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import FormLabel from '@mui/joy/FormLabel';

export default function ExercicioOito(){
    const [letra, setLetra] = useState('');

    const [resultado, setResultado] = useState('');

    const handleClick = () => {
        let letranova = letra.toLowerCase()

        if (letranova === 'a' || letranova === 'e' || letranova === 'i' || letranova === 'o' || letranova === 'u'){
            setResultado(`A letra que voce digitou é uma vogal`)
        } else {
            setResultado(`A letra que voce digitou não é uma vogal`)
        }
    }

    return(
        <div className ="app">
            <Box id="ex08" mb={3}>
                <h1>Exercicio 08:</h1>
                <span>
                    Faça um programa que leia uma letra e informe se ela é uma vogal.
                </span>
            </Box>
            <Box sx={{'& > :not(style)': { m: 1, width: '25ch' }}}>
                <FormLabel>Digite uma letra</FormLabel>

                <TextField label="Digite sua letra" size="small" value={letra} onChange={e => setLetra(e.target.value)}/>
            </Box>
            <div>
                <Button variant="text" onClick={handleClick}>Testar</Button>
                <p>{resultado}</p>
            </div>
            <Divider textAlign='right'><Chip label="Next" /></Divider>
        </div>
    )
}