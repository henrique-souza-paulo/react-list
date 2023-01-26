import React from 'react';

import Numero2 from '../../images/umbrella/numero2.jpeg'
import Grid from '@mui/material/Grid'

import ExercicioUm from './exercicios/ExercicioUm';
import ExercicioDois from './exercicios/ExercicioDois';
import ExercicioTres from './exercicios/ExercicioTres';
import ExercicioQuatro from './exercicios/ExercicioQuatro';
import ExercicioCinco from './exercicios/ExercicioCinco';
import ExercicioSeis from './exercicios/ExercicioSeis';
import ExercicioSete from './exercicios/ExercicioSete';
import ExercicioOito from './exercicios/ExercicioOito';
import ExercicioNove from './exercicios/ExercicioNove';

function Listadois() {
	return (
		<div className="app">
			<Grid container direction="column" alignItems="center" justify="center">
				<img src={Numero2} alt='Numero 2' width="25%" style={{ marginTop: 30 }}></img>
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
		</div>
	)
}

export default Listadois
