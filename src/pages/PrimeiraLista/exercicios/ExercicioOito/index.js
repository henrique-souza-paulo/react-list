import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';



export default function ExercicioOito(){
    const [numero, setNumero] = useState(0);
    let [resul, setResul] = useState(0);


    const handleClick = () => {
        let segundos = Number(numero)

        const hora = parseInt(segundos / 3600)
        segundos = segundos % 3600

        const minuto = parseInt(segundos / 60)
        segundos = segundos % 60

        resul = `${hora}:${minuto}:${segundos}`

        setResul(resul);
    }

    return(
        <div className ="app">

            <Box id="ex08" mb={3}>
                <h1>Exercicio 08:</h1>
                <span>
                    Faça um programa que leia um valor inteiro em segundos, e imprima-o em horas, minutos e segundos.
                </span>
            </Box>
            <Box sx={{'& > :not(style)': { m: 1, width: '25ch' }}}>

                <TextField label="Digite um valor em segundos" size="small" value={numero} onChange={e => setNumero(e.target.value)}/>

            </Box>
            <div>
                <Button variant="text" onClick={handleClick}>Testar</Button>
                <p>Convertido fica: {resul}</p>

            </div>

            <Divider textAlign='right'><Chip label="Next" /></Divider>
        </div>
    )
}