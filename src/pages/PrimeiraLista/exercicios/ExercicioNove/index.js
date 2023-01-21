import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';



export default function ExercicioNove(){
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    let [resul, setResul] = useState(0);


    const handleClick = () => {
        if(Number(num1) > Number(num2)){
            setResul(`${num1} é maior que ${num2}`)
        } else if(Number(num1) > Number(num2)){
            setResul(`${num2} é maior que ${num1}`)
        } else {
            setResul(`Numeros são iguais!`)
        }
    }

    return(
        <div className ="app">

            <Box id="ex09" mb={3}>
                <h1>Exercicio 09:</h1>
                <span>
                    Faça um programa que receba dois números inteiros e mostre o maior deles. Não se esqueça
                    que eles podem ser iguais.
                </span>
            </Box>
            <Box sx={{'& > :not(style)': { m: 1, width: '25ch' }}}>

                <TextField label="Primeiro numero" size="small" value={num1} onChange={e => setNum1(e.target.value)}/>
                <TextField label="Segundo numero" size="small" value={num2} onChange={e => setNum2(e.target.value)}/>

            </Box>
            <div>
                <Button variant="text" onClick={handleClick}>Testar</Button>
                <p>{resul}</p>

            </div>

            <Divider textAlign='right'><Chip label="Next" /></Divider>
        </div>
    )
}