import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


import TheOffice from './posts/TheOffice';
import WillLou from './posts/WillLou';
import AlexRosie from './posts/AlexRosie'

const mainFeaturedPost = {
	title: 'Os 7 tipos de amor!',
	description: 'Você sabia que há diferentes tipos de amor? Quais são os 7 tipos de amor?',
	image: 'https://istoe.com.br/wp-content/uploads/2021/11/jim-pam.jpg',
	imageText: 'Jim and Pam, The Office',
	linkText: 'Continue lendo…',
};

const featuredPosts = [
	{
		title: 'Como seria o Universo se quebrássemos a velocidade da luz?',
		date: '29 Jan',
		description:
			'A luz é o elemento mais rápido que existe, segundo a Teoria Especial da Relatividade de Einstein.',
		image: 'https://img.olhardigital.com.br/wp-content/uploads/2023/01/shutterstock_2146711059.jpg.webp',
		imageLabel: 'Image Text',
	},
	{
		title: 'Que tamanho um meteoro precisa para extinguir espécies? Depende de onde ele cair',
		date: '29 Jan',
		description:
			'O tamanho de um meteoro em um episódio de extinção em massa não é tão importante quanto o lugar onde ele cai.',
		image: 'https://t.ctcdn.com.br/Thwvk3RHiwIybGljy3NLHwLw8Iw=/720x405/smart/filters:format(webp)/i542273.png',
		imageLabel: 'Image Text',
	},
];
const theme = createTheme();

export default function Blog() {
	const [artigo, setArtigo] = useState(<TheOffice />);

	const willlou = () => {
		setArtigo(<WillLou />);
	}
	const alexrosie = () => {
		setArtigo(<AlexRosie />);
	}
	const theoffice = () => {
		setArtigo(<TheOffice />);
	}

	return (
		<ThemeProvider theme={theme}>

			<CssBaseline />

			<Container maxWidth="lg">
				<main>
					<MainFeaturedPost post={mainFeaturedPost} />
					<Grid container spacing={4}>
						{featuredPosts.map((post) => (
							<FeaturedPost key={post.title} post={post} />
						))}
					</Grid>
					<Grid container spacing={5} sx={{ mt: 3 }}>
						<Grid item xs={12} md={8}>
							{artigo}
						</Grid>

						<Grid item xs={12} md={4}>
							<Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
								<Typography variant="h6" gutterBottom>
									Querida...
								</Typography>
								<Typography>
									Meu amor por você é profundo e incondicional, você é a única razão pela qual respiro. Eu não consigo imaginar minha vida sem você, é como se você tivesse me dado a vista de algo que eu nunca soube que existia. Te amo mais do que palavras possam expressar, e farei qualquer coisa para mantê-la ao meu lado para sempre.
								</Typography>
							</Paper>
							<Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
								Arquivos
							</Typography>
							<div>
								<Button onClick={willlou}>Will e Louise</Button>
							</div>
							<div>
								<Button onClick={alexrosie}>Alex e Rosie</Button>
							</div>
							<div>
								<Button onClick={theoffice}>10 motivos para assistir The Office</Button>
							</div>


						</Grid>
					</Grid>
				</main>
			</Container>
		</ThemeProvider>
	);
}
