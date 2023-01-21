import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import FormLabel from '@mui/joy/FormLabel';

export default function ExercicioSete(){
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [num3, setNum3] = useState('');

    const [resultado, setResultado] = useState('');

    const handleClick = () => {
        let numbers = [Number(num1), Number(num2), Number(num3)]

        numbers.sort(function(a,b){
            if(a > b) return 1;
            if(a < b) return -1;
            if(a === b) return window.alert("Existe numeros iguais")
            return 0;})
        setResultado(`${numbers[0]}, ${numbers[1]}, ${numbers[2]}`)
    }

    return(
        <div className ="app">
            <Box id="ex07" mb={3}>
                <h1>Exercicio 07:</h1>
                <span>
                    Faça um programa que leia 3 números a, b e c, e os escreva em ordem crescente.
                </span>
            </Box>
            <Box sx={{'& > :not(style)': { m: 1, width: '25ch' }}}>
                <FormLabel>Digite 3 numeros</FormLabel>


                <TextField label="Numero 1" size="small" value={num1} onChange={e => setNum1(e.target.value)}/>
                <TextField label="Numero 2" size="small" value={num2} onChange={e => setNum2(e.target.value)}/>
                <TextField label="Numero 3" size="small" value={num3} onChange={e => setNum3(e.target.value)}/>

            </Box>
            <div>
                <Button variant="text" onClick={handleClick}>Testar</Button>
                <p>{resultado}</p>
            </div>
            <Divider textAlign='right'><Chip label="Next" /></Divider>
        </div>
    )
}