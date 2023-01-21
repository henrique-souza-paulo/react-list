import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';



export default function ExercicioQuatro(){
    const [anos, setAnos] = useState('');
    const [meses, setMeses] = useState('');
    const [dias, setDias] = useState('');

    const [resul, setResul] = useState(0);


    const handleClick = () => {
        let resultado = (Number(anos)*365) + (Number(meses)*30) + Number(dias)
        setResul(resultado);
    }

    return(
        <div className ="app">

            <Box id="ex04" mb={3}>
                <h1>Exercicio 04:</h1>
                <span>
                Faça um programa que leia a idade de uma pessoa em anos, meses e dias (devem ser
                realizadas três perguntas para o usuário). Exemplo: 12 anos, 5 meses e 3 dias. Depois, o
                programa deve escrever a idade dessa pessoa só em dias. Considerar ano igual a 365 dias e
                mês igual a 30 dias.
                </span>
            </Box>
            <Box sx={{'& > :not(style)': { m: 1, width: '25ch' }}}>

                <TextField label="Anos" size="small" value={anos} onChange={e => setAnos(e.target.value)}/>
                <TextField label="Meses" size="small" value={meses} onChange={e => setMeses(e.target.value)}/>
                <TextField label="Dias" size="small" value={dias} onChange={e => setDias(e.target.value)}/>

            </Box>
            <div>
                <Button variant="text" onClick={handleClick}>Testar</Button>
                <p>Idade em dias: {resul}</p>

            </div>

            <Divider textAlign='right'><Chip label="Next" /></Divider>
        </div>
    )
}