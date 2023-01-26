import React from 'react';

import Numero1 from '../../images/umbrella/numero1.jpeg'
import Grid from '@mui/material/Grid'

import ExercicioUm from "./exercicios/ExercicioUm"
import ExercicioDois from './exercicios/ExercicioDois';
import ExercicioTres from './exercicios/ExercicioTres';
import ExercicioQuatro from './exercicios/ExercicioQuatro';
import ExercicioCinco from './exercicios/ExercicioCinco';
import ExercicioSeis from './exercicios/ExercicioSeis';
import ExercicioSete from './exercicios/ExercicioSete';
import ExercicioOito from './exercicios/ExercicioOito';
import ExercicioNove from './exercicios/ExercicioNove';
import ExercicioDez from './exercicios/ExercicioDez';

function Listaum(){

    return(
        <div className ="app">
            <Grid container direction="column" alignItems="center" justify="center">
                <img src={Numero1} width="25%" alt='Numero 1' style={{marginTop:30}}></img>
            </Grid>
            <ExercicioUm />
            <ExercicioDois />
            <ExercicioTres />
            <ExercicioQuatro />
            <ExercicioCinco />
            <ExercicioSeis />
            <ExercicioSete />
            <ExercicioOito />
            <ExercicioNove />
            <ExercicioDez />
        </div>
    )
}

export default Listaum
