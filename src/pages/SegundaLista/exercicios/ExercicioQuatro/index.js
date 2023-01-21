import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

export default function ExercicioQuatro(){
    const [idade, setIdade] = useState('');
    const [resultado, setResultado] = useState('');

    const handleClick = () => {
        let num = Number(idade)

        if(num < 5){
            setResultado(`Voce tem ${num} anos. E não pode competir`)
        } else if(num > 4 && num < 8){
            setResultado(`Voce tem ${num} anos. E se classifica na categoria Infantil A`)
        } else if(num > 7 && num < 12){
            setResultado(`Voce tem ${num} anos. E se classifica na categoria Infantil B`)
        } else if(num > 11 && num < 14){
            setResultado(`Voce tem ${num} anos. E se classifica na categoria Juvenil A`)
        } else if(num > 13 && num < 18){
            setResultado(`Voce tem ${num} anos. E se classifica na categoria Juvenil B`)
        } else if(num > 18){
            setResultado(`Voce tem ${num} anos. E se classifica na categoria Adulto`)
        }
    }

    return(
        <div className ="app">
            <Box id="ex04" mb={3}>
                <h1>Exercicio 04:</h1>
                <span>
                    Faça um programa que leia a idade de um nadador e classifique-o em uma das seguintes
                    categorias:
                    • Não pode competir → 0 a 4 anos.   • Juvenil A → 12 a 13 anos.
                    • Infantil A → 5 a 7 anos.          • Juvenil B → 14 a 17 anos.
                    • Infantil B → 8 a 11 anos.         • Adulto → 18 anos ou mais.
                </span>
            </Box>
            <Box sx={{'& > :not(style)': { m: 1, width: '25ch' }}}>
                <TextField label="Digite sua idade" size="small" value={idade} onChange={e => setIdade(e.target.value)}/>
            </Box>
            <div>
                <Button variant="text" onClick={handleClick}>Testar</Button>
                <p>{resultado}</p>
            </div>
            <Divider textAlign='right'><Chip label="Next" /></Divider>
        </div>
    )
}