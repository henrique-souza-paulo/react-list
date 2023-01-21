import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Grid from '@mui/material/Grid'


export default function ExercicioSeis(){
    const [senha, setSenha] = useState('');
    const [saque, setSaque] = useState('');


    const handleClick = () => {

        const valorSacado = Number(saque)
        const senhaNova = Number(senha)
        
        if (senhaNova === 123456) {
            alert(`Acesso permitido!`);
            if (valorSacado <= 1000) {
                let resultado = 1000 - valorSacado
                alert(`Voce tinha ${1000},00 na conta, sacou ${valorSacado},00 e agora tem ${resultado},00`)
            } else if (valorSacado > 1000) {
                alert(`Voce tem apenas ${1000},00 em sua conta... Tente de novo`)
            }
    
        } else {
            alert(`Voce nao tem acesso ao sistema!`);
        }

    }

    return(
        <div className ="app">

            <Box id="ex06" mb={3}>
                <h1>Exercicio 06:</h1>
                <span>
                    Para sacar dinheiro em um banco precisamos informar a senha correta e ter saldo suficiente.
                    Vamos supor que temos R$ 1000.00 na conta e a senha é 123456. Faça um programa que receba
                    o valor que será sacado pelo usuário e a senha da conta (senha numérica). Com esses dados, o
                    programa deve informar ao usuário se o saque pode ou não ser realizado. Caso o saque possa
                    ser realizado, o programa também deve exibir o saldo remanescente após o saque.
                </span>
            </Box>

            <Sheet
                sx={{ width: 300, mx: 'auto', my: 4, py: 3, px: 2, display: 'flex', flexDirection: 'column', gap: 2, borderRadius: 'sm', boxShadow: 'md',}}
                variant="outlined">
                <div>
                    <Typography level="h4" component="h1">
                        <b>Bem-vindo!</b>
                    </Typography>

                    <Typography level="body2">Caixa eletronico</Typography>
                </div>

                <Grid container direction="column" alignItems="center" justify="center">
                    <FormLabel>Você tem R$ 1000,00 na conta</FormLabel>
                </Grid>

                <FormControl>

                    <FormLabel>Valor que deseja sacar:</FormLabel>
                    <Input name="number" type="number" placeholder="R$ 1000,00" value={saque} onChange={e => setSaque(e.target.value)}/>

                </FormControl>
                <FormControl>

                    <FormLabel>Password</FormLabel>
                    <Input name="password" type="password" placeholder="password" value={senha} onChange={e => setSenha(e.target.value)}/>
                
                </FormControl>

                <Button sx={{ mt: 1}} onClick={handleClick}>Sacar</Button>
            </Sheet>

            <Divider textAlign='right'><Chip label="Next" /></Divider>
        </div>
    )
}