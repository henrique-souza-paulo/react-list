import * as React from 'react';
import { Breadcrumbs, Typography, Link } from '@mui/material/';

function handleClick(event) {
	event.preventDefault();
	console.info('You clicked a breadcrumb.');
}

const Migalhas = () => {
	return (
		<div role="presentation" onClick={handleClick}>
			<Breadcrumbs aria-label="breadcrumb">
				<Link color="inherit">MUI</Link>
				<Link color="inherit">Core</Link>
				<Typography color="text.primary">Breadcrumbs</Typography>
			</Breadcrumbs>
		</div>
	);
}
export default Migalhas
