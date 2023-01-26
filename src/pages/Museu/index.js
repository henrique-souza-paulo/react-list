import React from 'react'
// componentes
import Gods from "../../components/deuses/Deuses";
import ResDialog from "../../components/dialogo/Dialogo";
import PanteaoGrego from '../../../src/images/obras/panteao-grego.jpg'

import Grid from '@mui/material/Grid'
import { Card, CardMedia, CardContent } from '@mui/material';
import { areatextoStyled, margintextoStyled, cardStyled } from './styled'

// importação das imagens
// import MonaLisa from '../../../src/images/obras/mona-lisa.jpg'
// import Pieta from '../../../src/images/obras/pieta.jpg'
// import OGrito from '../../../src/images/obras/o-grito.jpg'
// import OsGirassois from '../../../src/images/obras/os-girassois.jpg'
// import Autorretrato from '../../../src/images/obras/autorretrato-com-a-orelha-cortada.jpg'
// import ANoiteEstrelada from '../../../src/images/obras/a-noite-estrelada.jpg'
// import ONascimentoDeVenus from '../../../src/images/obras/o-nascimento-de-venus.jpg'
// import CampoDeTrigoComCorvos from '../../../src/images/obras/campo-de-trigo-com-corvos.jpg'

import images from '../../images/images'



export default function Museu() {
	return (
		<div className="app">

			<Grid container direction="column" alignItems="center" justify="center" mb={5}>
				<h1>Museu de artes</h1>

				<cardStyled>

					<Card sx={{ maxWidth: 900 }}>
						<h2>Mona Lisa</h2>
						<CardMedia
							component="img"
							// height="1"
							image={images.MonaLisa}
							alt="mona lisa" />
						<CardContent sx={{ bgcolor: "#E8E8E8" }}>
							<areatextoStyled>
								<margintextoStyled>
									Mona Lisa (La Gioconda, em italiano) é um pequeno quadro de 77 x 53 cm
									que está localizado no Museu do Louvre, em Paris.
								</margintextoStyled>
								<span>
									Pintado por Leonardo Da Vinci entre 1503 e 1506, esse óleo sobre madeira
									exibe o retrato de uma mulher jovem com olhar e sorriso enigmáticos.
								</span>
							</areatextoStyled>
						</CardContent>
					</Card>
				</cardStyled>

				<cardStyled >
					<Card sx={{ maxWidth: 900 }}>
						<h2>A Noite Estrelada</h2>
						<CardMedia
							component="img"
							image={images.ANoiteEstrelada}
							alt="a noite estrelada" />
						<CardContent sx={{ bgcolor: "#E8E8E8" }}>
							<areatextoStyled>
								<margintextoStyled>
									O quadro A Noite Estrelada, de Vincent van Gogh, foi pintado em 1889. É um óleo sobre tela, com
									74 cm X 92 cm, e se encontra no Museu de Arte Moderna de Nova York (MoMA).
								</margintextoStyled>
								<span>
									Vincent van Gogh pintou esta tela quando estava no hospício de Saint-Rémy-de-Provence, onde se internou
									voluntariamente em 1889. Van Gogh teve uma vida emocional conturbada, sofrendo de depressão e surtos psicóticos.
								</span>
							</areatextoStyled>
						</CardContent>
					</Card>
				</cardStyled>

				<cardStyled>
					<Card sx={{ maxWidth: 900 }}>
						<h2>O Nascimento de Vênus</h2>
						<CardMedia
							component="img"
							image={images.ONascimentoDeVenus}
							alt="o nascimento de venus" />
						<CardContent sx={{ bgcolor: "#E8E8E8" }}>
							<areatextoStyled>
								<margintextoStyled>
									O quadro O Nascimento de Vênus, criado entre 1482 e 1485, é de autoria do pintor italiano
									Sandro Botticelli (1445-1510). A tela é um ícone incontornável do Renascimento.
								</margintextoStyled>
								<span>
									Antes de criar essa tela, Sandro Botticelli costumava pintar cenas bíblicas. Foi depois de uma viagem à Roma,
									onde esteve exposto à muitas obras da cultura greco-romana que, no regresso à casa, inspirado pelo que viu,
									começou a pintar cenas baseadas na mitologia.
								</span>
							</areatextoStyled>
						</CardContent>
					</Card>
				</cardStyled>

				<cardStyled>
					<Card sx={{ maxWidth: 900 }}>
						<h2>Pietá</h2>
						<CardMedia
							component="img"
							image={images.Pieta}
							alt="pieta" />
						<CardContent sx={{ bgcolor: "#E8E8E8" }}>
							<areatextoStyled>
								<margintextoStyled>
									Uma das esculturas mais famosas da história da arte é Pietá, que representa Virgem Maria com Jesus sem vida em seus braços.
									A escultura pode ser vista na Basílica de São Pedro, no Vaticano, e foi produzida entre 1498 e 1499 pelo renascentista Michelangelo.
								</margintextoStyled>
								<span>
									Uma curiosidade que poucos sabem sobre a obra é que ela é a única que foi assinada pelo artista. Seu nome pode ser lido em uma faixa que
									cruza o peito de Virgem Maria, onde se lê: MICHEA[N]GELVS BONAROTVS FLORENT[INVS] FACIEBAT. A tradução da frase diz: Michelangelo Buonarroti, o florentino, fez.
								</span>
							</areatextoStyled>
						</CardContent>
					</Card>
				</cardStyled>

				<cardStyled>
					<Card sx={{ maxWidth: 900 }}>
						<h2>O Grito</h2>
						<CardMedia
							component="img"
							image={images.OGrito}
							alt="o grito" />
						<CardContent sx={{ bgcolor: "#E8E8E8" }}>
							<areatextoStyled>
								<margintextoStyled>
									O Grito é uma daquelas obras de arte que se tornam ícone de um momento histórico e, mais do que isso, traduzem
									um tipo muito específico de sentimento: a angústia. Pintada pelo norueguês Edward Munch em 1893, a obra possui
									4 versões.
								</margintextoStyled>
								<span>
									Especialistas afirmam que a figura aterrorizada que vemos no centro da imagem teve como inspiração uma múmia
									peruana presente em uma exposição de 1850 em Paris.
									A tela também foi furtada da Galeria Nacional de Oslo, na Noruega. O roubo ocorreu em 1994 e os ladrões tiveram
									a ousadia de deixar um bilhete no local agradecendo pela falta de segurança. No ano seguinte a obra foi recuperada
									e a segurança da galeria reforçada.
								</span>
							</areatextoStyled>
						</CardContent>
					</Card>
				</cardStyled>

				<cardStyled>
					<Card sx={{ maxWidth: 900 }}>
						<h2>Campo de Trigo com Corvos</h2>
						<CardMedia
							component="img"
							image={images.CampoDeTrigoComCorvos}
							alt="campo de trigo com corvos" />
						<CardContent sx={{ bgcolor: "#E8E8E8" }}>
							<areatextoStyled>
								<margintextoStyled>
									Pintada pouco antes de Van Gogh falecer (no dia 29 de julho de 1890), a tela Campo de trigo
									com corvos foi criada no dia 10 julho de 1890.
								</margintextoStyled>
								<span>
									Até pouco tempo se achava que esse era o quadro final do artista, entretanto pesquisadores do
									museu do pintor em Amsterdam descobriram um quadro posterior, Raízes de árvores, mas que jamais
									chegou a ser completado.
								</span>
							</areatextoStyled>
						</CardContent>
					</Card>
				</cardStyled>

				<cardStyled>
					<Card sx={{ maxWidth: 900 }}>
						<h2>Os Girassois</h2>
						<CardMedia
							component="img"
							image={images.OsGirassois}
							alt="os girassois" />
						<CardContent sx={{ bgcolor: "#E8E8E8" }}>
							<areatextoStyled>
								<margintextoStyled>
									Uma das obras-primas do pintor holandês, a tela que tem como protagonista um vaso de girassóis
									tem dez versões.
									Na imagem vemos a preponderância do amarelo e uma organização das flores nada convencional.
									A pintura do holandês apresenta confusão, caos e uma beleza perturbadora obtida com os girassóis retorcidos.
								</margintextoStyled>
								<span>
									A tela foi uma saudação feita ao amigo Paul Gauguin (1848-1903), que o visitou em Arles, onde Vincent estava vivendo.
									Ao ver as imagens, Gauguin elogiou o colega holandês ao afirmar que os seus girassóis eram mais bonitos do que as vitórias-régias
									de Monet.
								</span>
							</areatextoStyled>
						</CardContent>
					</Card>
				</cardStyled>

				<cardStyled>
					<Card sx={{ maxWidth: 900 }}>
						<h2>Autorretrato com a orelha cortada</h2>
						<CardMedia
							component="img"
							image={images.Autorretrato}
							alt="Autorretrato com a orelha cortada" />
						<CardContent sx={{ bgcolor: "#E8E8E8" }}>
							<areatextoStyled>
								<margintextoStyled>
									A amputação da orelha direita foi um episódio nebuloso na vida do pintor que ainda hoje permanece misterioso.
									Sabemos apenas que a perda da orelha foi resultado direto de uma violenta discussão que teve com o amigo também
									pintor Paul Gauguin em 1888. Gauguin havia se mudado para a residência artística de Van Gogh no mesmo ano, a
									convite do amigo.
								</margintextoStyled>
								<span>
									Não sabemos se Van Gogh teria cortado parte da orelha direita num episódio de automultilação após ter se descontrolado
									com o amigo ou se havia sido atingido com a navalha por Paul durante a discussão calorosa que teve.
								</span>
							</areatextoStyled>
						</CardContent>
					</Card>
				</cardStyled>

				{/* <Card style={{marginTop: "5vh", maxWidth: 900 }}>
                    <CardMedia
                        component="img"
                        height="500"
                        image={images.PanteaoGrego}
                        alt="panteao grego"/>
                    <CardContent sx={{ bgcolor: "#E8E8E8" }}>
                        <ResDialog />
                        <span>
                            Embora a mitologia grega não represente adequadamente uma religião, ela se baseia
                            em uma coleção de mitos e contos dos antigos gregos, que conta como teria sido a
                            origem do universo, seguindo o poder dos deuses do Olimpo.
                            <br/>
                            Os deuses gregos e sua mitologia foram disseminados especialmente pela via oral,
                            embora também através da prosa os contos épicos de seus heróis tenham sido conhecidos.<br/>
                            <b>Os deuses gregos mais importantes:</b>
                        </span>
                        <br/><br/>

                        <Gods />
                    </CardContent>
                </Card> */}

			</Grid>
		</div>
	)
}
