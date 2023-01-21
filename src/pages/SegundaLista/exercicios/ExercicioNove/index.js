import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import FormLabel from '@mui/joy/FormLabel';
import InputLabel from '@mui/material/InputLabel';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ExercicioNove(){
    let [litros, setLitros] = useState(0);
    const [tipoCombustivel, setTipoCombustivel] = useState(1);
    const precoAlcool = 2.770;
    const precoGasolina =4.10;
    let [resultado, setResultado] = useState('');

    const handleChange = (event) => {
        setTipoCombustivel(event.target.value);
      };

    const handleClick = () => {
        if (tipoCombustivel === 1) {
    
            if (litros <= 20) {
                litros = litros * precoAlcool
                resultado = litros - (litros * 2 / 100)
                setResultado(`Valor a ser pago: R$ ${resultado.toFixed(2)}`)
            } else {
                litros = litros * precoAlcool
                resultado = litros - (litros * 5 / 100)
                setResultado(`Valor a ser pago: R$ ${resultado.toFixed(2)}`)
            }

        } else {
    
            if (litros <= 20) {
                litros = litros * precoGasolina
                resultado = litros - (litros * 3 / 100)
                setResultado(`Valor a ser pago: R$ ${resultado.toFixed(2)}`)
            } else {
                litros = litros * precoGasolina
                resultado = litros - (litros * 6 / 100)
                setResultado(`Valor a ser pago: R$ ${resultado.toFixed(2)}`)
            } 
        }
    }

    return(
        <div className ="app">
            <Box id="ex09" mb={3}>
                <h1>Exercicio 09:</h1>
                <span>
                    Analise a seguinte informação:
                    Um posto está vendendo combustíveis com a seguinte tabela de descontos:
                    até 20 litros (inclusive 20 litros), desconto de 2% por litro
                    Álcool
                    acima de 20 litros, desconto de 5% por litro
                    até 20 litros (inclusive 20 litros), desconto de 3% por litro
                    Gasolina
                    acima de 20 litros, desconto de 6% por litro
                    Após à análise, faça um programa que leia o número de litros vendidos e o tipo de combustível
                    (codificado da seguinte forma: 1-álcool, 2-gasolina), calcule e imprima o valor a ser pago pelo
                    cliente sabendo-se que o preço do litro da gasolina é R$ 4.10 e o preço do litro do álcool é R$
                    2.70.
                </span>
            </Box>
            <Box sx={{'& > :not(style)': { m: 1, width: '25ch' }}}> 

                <FormLabel>Escolha um tipo de combustivel</FormLabel>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={tipoCombustivel}
                        label="Age"
                        onChange={handleChange}>

                        <MenuItem value={1}>Alcool</MenuItem>
                        <MenuItem value={2}>Gasolina</MenuItem>
                    </Select>
                </FormControl>


                <FormLabel>Digite o numero de litros vendidos</FormLabel>
                <TextField label="Litros" size="small" value={litros} onChange={e => setLitros(e.target.value)}/>
            </Box>
            <div>
                <Button variant="text" onClick={handleClick}>Testar</Button>
                <p>{resultado}</p>
            </div>
            <Divider textAlign='right'><Chip label="Next" /></Divider>
        </div>
    )
}
