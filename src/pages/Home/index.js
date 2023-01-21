// componentes
import MyHeader from "../../components/MyHeader"
import Grid from '@mui/material/Grid'
import { Card, CardMedia, CardContent } from '@mui/material';
import ControlledAccordions from "../../components/AcordeonDeuses";

// importação das imagens
import ANoiteEstrelada from '../../../src/images/a-noite-estrelada.jpg'
import CampoDeTrigoComCorvos from '../../../src/images/campo-de-trigo-com-corvos.jpg'
import PanteaoGrego from '../../../src/images/panteao-grego.jpg'


export default function Home(){
    return(
        <div className ="app">
            <MyHeader />

            <Grid container direction="column" alignItems="center" justify="center">
                <h1>Informações</h1>

                <Card raised={true} sx={{maxWidth: 900}}>
                    <CardMedia
                        component="img"
                        height="500"
                        image={ANoiteEstrelada}
                        alt="a noite estrelada"/>
                    <CardContent sx={{ bgcolor: "#E8E8E8" }}>
                        <h3>A Noite Estrelada</h3>
                        <span>
                            O quadro <b>A Noite Estrelada</b>, de <b>Vincent van Gogh</b>, foi pintado em 1889.
                            É um óleo sobre tela, com 74 cm X 92 cm, e se encontra no Museu de Arte 
                            Moderna de Nova York (MoMA).
                            <br/><br/>
                            A pintura retrata a paisagem da janela do quarto do artista
                            enquanto esteve no hospício de Saint-Rémy-de-Provence, sendo 
                            considerada uma das obras mais significativas do artista holandês.<br />
                            Start Today !
                        </span>
                    </CardContent>
                </Card>
                
                <Card style={{marginTop: "5vh", maxWidth: 900 }}>
                    <CardMedia
                        component="img"
                        height="500"
                        image={CampoDeTrigoComCorvos}
                        alt="campo de trigo com corvos"/>
                    <CardContent sx={{ bgcolor: "#E8E8E8" }}>
                        <h3>Campo de Trigo com Corvos</h3>
                        <span>
                        Vincent van Gogh explorou a capacidade da cor e da forma distorcida para exprimir as suas 
                        emoções e a sua visão da Natureza. Para ele, pintar era uma forma de comunicar as suas experiências:

                        «Experimento uma terrível clareza em momentos em que a natureza é tão linda. 
                        Perco a consciência de mim mesmo e os quadros vêm como em sonho.»
                        (Van Gogh)
                        </span>
                    </CardContent>
                </Card>

                <Card style={{marginTop: "5vh", maxWidth: 900 }}>
                    <CardMedia
                        component="img"
                        height="500"
                        image={PanteaoGrego}
                        alt="panteao grego"/>
                    <CardContent sx={{ bgcolor: "#E8E8E8" }}>
                        <h2>Panteão Grego</h2>
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

                        <ControlledAccordions />
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}