import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

export default function ExercicioDez(){
    const [prova1, setProva1] = useState(0);
    const [prova2, setProva2] = useState(0);

    const [trabalho1, setTrabalho1] = useState(0);
    const [trabalho2, setTrabalho2] = useState(0);    

    let [resul, setResul] = useState(0);


    const handleClick = () => {
        let media = (Number(prova1) * 0.7 + Number(trabalho1) * 0.3 + Number(prova2) * 0.7 + Number(trabalho2) * 0.3)/2
        media = media.toFixed(2)
        if(media >= 6){
            setResul(`A media do aluno foi ${media}, e portanto esta APROVADO`)
        } else {
            setResul(`A media do aluno foi ${media}, e portanto esta REPROVADO`)
        }
    }

    return(
        <div className ="app">

            <Box id="ex10" mb={3}>
                <h1>Exercicio 10:</h1>
                <span>
                    Faça um programa que deve receber duas notas de provas (P1 e P2), duas notas de trabalho
                    (T1 e T2) e imprimir se o aluno foi aprovado ou reprovado. As notas de provas têm peso 7 e
                    as de trabalho peso 3. Assim, a média deve ser calculada com base na seguinte fórmula: (P1
                    * 0.7 + T1 * 0.3 + P2 * 0.7 + T2 * 0.3) / 2. O aluno estará aprovado se sua média for
                    superior ou igual a 6, caso contrário estará reprovado.
                </span>
            </Box>

            <Box sx={{'& > :not(style)': { m: 1, width: '25ch' }}}>
                <TextField label="Prova 1" size="small" value={prova1} onChange={e => setProva1(e.target.value)}/>
                <TextField label="Prova 2" size="small" value={prova2} onChange={e => setProva2(e.target.value)}/>

                <TextField label="Trabalho 1" size="small" value={trabalho1} onChange={e => setTrabalho1(e.target.value)}/>
                <TextField label="Trabalho 2" size="small" value={trabalho2} onChange={e => setTrabalho2(e.target.value)}/>
            </Box>
            <div>
                <Button variant="text" onClick={handleClick}>Testar</Button>
                <p>{resul}</p>

            </div>

            <Divider textAlign='right'><Chip label="Next" /></Divider>
        </div>
    )
}