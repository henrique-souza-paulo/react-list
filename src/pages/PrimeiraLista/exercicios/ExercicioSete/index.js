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

export default function ExercicioSete(){
    const [senha, setSenha] = useState('');

    const handleClick = () => {
        if(Number(senha) === 904087){
            alert('Senha correta!')
        } else {
            alert('Não, não, não')
        }
    }

    return(
        <div className ="app">

            <Box id="ex07" mb={3}>
                <h1>Exercicio 07:</h1>
                <span>
                Faça um programa que receba uma senha e teste se ela é igual à 904087. Se a senha estiver
                correta escreva “Acesso permitido”, do contrário, escreva a mensagem “Você não tem
                acesso ao sistema”
                </span>
            </Box>

            <Sheet
                sx={{ width: 300, mx: 'auto', my: 4, py: 3, px: 2, display: 'flex', flexDirection: 'column', gap: 2, borderRadius: 'sm', boxShadow: 'md',}}
                variant="outlined">
                <div>
                    <Typography level="h4" component="h1">
                        <b>Bem-vindo!</b>
                    </Typography>

                    <Typography level="body2">Faça login.</Typography>
                </div>
                <FormControl>

                    <FormLabel>Email</FormLabel>
                    <Input name="email" type="email" placeholder="paulo@email.com"/>
                
                </FormControl>
                <FormControl>

                    <FormLabel>Password</FormLabel>
                    <Input name="password" type="password" placeholder="password" value={senha} onChange={e => setSenha(e.target.value)}/>
                
                </FormControl>

                <Button sx={{ mt: 1}} onClick={handleClick}>Log in</Button>
            </Sheet>

            <Divider textAlign='right'><Chip label="Next" /></Divider>
        </div>
    )
}