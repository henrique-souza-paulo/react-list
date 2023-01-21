import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';


export default function ExercicioSeis(){
    let [amigo1, setAmigo1] = useState(0);


    let [amigo2, setAmigo2] = useState(0);

    let [amigo3, setAmigo3] = useState(0);

    let [premio, setPremio] = useState('');

    let [newAmigo1, setNewAmigo1] = useState(0);
    let [newAmigo2, setNewAmigo2] = useState(0);
    let [newAmigo3, setNewAmigo3] = useState(0);



    const handleClick = () => {
        let valoresInvestidos = Number(amigo1) + Number(amigo2) + Number(amigo3)
        let premioN = Number(premio)

        let novoValor = premioN / valoresInvestidos

        //calculando o novo valor pelo valor investido e mandando para a variavel newAmigo1
        newAmigo1 = (novoValor * amigo1).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        })
        //calculando o novo valor pelo valor investido e mandando para a variavel newAmigo2
        newAmigo2 = (novoValor * amigo2).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        })
        //calculando o novo valor pelo valor investido e mandando para a variavel newAmigo3
        newAmigo3 = (novoValor * amigo3).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        })

        setNewAmigo1(newAmigo1);
        setNewAmigo2(newAmigo2);
        setNewAmigo3(newAmigo3);
    }

    return(
        <div className ="app">

            <Box id="ex06" mb={3}>
                <h1>Exercicio 06:</h1>
                <span>
                    Três amigos jogaram na loteria. Caso eles ganhem, o prêmio deve ser repartido
                    proporcionalmente ao valor que cada um deu para a realização da aposta. Faça um programa
                    que leia quanto cada apostador investiu, o valor do prêmio, e imprima quanto cada um
                    ganharia do prêmio com base no valor investido.
                </span>
            </Box>
            
            <Box sx={{'& > :not(style)': { m: 1, width: '25ch' }}}>
                <TextField label="Valor do premio" size="small" value={premio} onChange={e => setPremio(e.target.value)}/>
            </Box>

            <Box sx={{'& > :not(style)': { m: 1, width: '25ch' }}}>
                <TextField label="Valor investido pelo amigo 1" size="small" value={amigo1} onChange={e => setAmigo1(e.target.value)}/>
                <TextField label="Valor investido pelo amigo 2" size="small" value={amigo2} onChange={e => setAmigo2(e.target.value)}/>
                <TextField label="Valor investido pelo amigo 3" size="small" value={amigo3} onChange={e => setAmigo3(e.target.value)}/>

            </Box>
            
            <div>
                <Button variant="text" onClick={handleClick}>Testar</Button>
                <p>Amigo 1 recebe = {newAmigo1}</p>
                <p>Amigo 2 recebe = {newAmigo2}</p>
                <p>Amigo 3 recebe = {newAmigo3}</p>

            </div>

            <Divider textAlign='right'><Chip label="Next" /></Divider>
        </div>
    )
}