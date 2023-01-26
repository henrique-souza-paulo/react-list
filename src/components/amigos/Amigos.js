import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { divStyled } from './styled'


export default function Amigos({ titulo, url }) {

	return (

		<divStyled>
			<Card>
				<CardHeader title={titulo} />
				<CardMedia component="img" height="400" image={url} alt={titulo} />
			</Card>
		</divStyled>
	);
}
