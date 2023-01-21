import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

export default function ExercicioCinco(){
    const [peso, setPeso] = useState('');
    const [resultado, setResultado] = useState('');

    const handleClick = () => {
        let quantidade = Number(peso)
        let resul
        if(quantidade > 50){
            quantidade = quantidade - 50
            resul = quantidade * 4
            resul = resul.toFixed(0)

            setResultado(`Houve excesso! Deve pagar R$${resul},00`)
        } else {
            setResultado(`Parabens! Não houve excesso!`)
        }
    }

    return(
        <div className ="app">
            <Box id="ex05" mb={3}>
                <h1>Exercicio 04:</h1>
                <span>
                    Um pescador comprou um microcomputador para controlar o rendimento diário de seu
                    trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento
                    de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo
                    excedente. Assim, faça um programa que leia o peso de peixes e verifique se há excesso. Se
                    houver, o programa também deve calcular o valor da multa que o pescador deverá pagar. No
                    final, o programa deve imprimir o excesso e a multa paga pelo pescador.
                </span>
            </Box>
            <Box sx={{'& > :not(style)': { m: 1, width: '25ch' }}}>
                <TextField label="Digite o peso de peixes" size="small" value={peso} onChange={e => setPeso(e.target.value)}/>
            </Box>
            <div>
                <Button variant="text" onClick={handleClick}>Testar</Button>
                <p>{resultado}</p>
            </div>
            <Divider textAlign='right'><Chip label="Next" /></Divider>
        </div>
    )
}