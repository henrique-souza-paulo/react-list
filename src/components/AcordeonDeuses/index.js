import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header">
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Zeus
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>deus do céu e soberano do Olimpo</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Além de ser o Deus do raio, Zeus também é o pai supremo de todas as divindades e mortais que habitam 
                        a terra. Ele é originário da ilha de Creta , onde, ao nascer, foi resgatado das mandíbulas de seu pai, Cronos.
                        Se não fosse a intervenção oportuna de Rea (sua mãe), Zeus teria sido devorado por seu pai, como o resto de seus irmãos.
                        Rhea escondeu e levantou Zeus até que ele se tornou a maior referência dos deuses gregos.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header">
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Poseidon</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        deus dos mares e oceanos
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Esta divindade <b>tem o poder de controlar a fúria das águas, além de causar terremotos 
                        em prazer</b>. Ele é natural da cidade de Rodes, onde foi criado pelos Telquines 
                        (criaturas terrestres híbridas do mar).
                        A lenda do deus Poseidon é muito semelhante à de seu irmão Zeus, ele foi escondido por 
                        sua mãe em um rebanho de cordeiros para impedir que seu pai, Cronos, o devorasse.
                        Poseidon une forças com Zeus para derrotar Cronos, e <b>é assim que ele recebe seu famoso 
                        tridente</b>, além da custódia dos mares e oceanos.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Hades
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        deus do submundo
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    <b>Hades era o filho mais velho de Titã Cronos</b>. Ele foi devorado por seu pai, embora mais tarde fosse resgatado 
                    da morte por Zeus. Juntando forças com seus irmãos, Zeus e Poseidon, eles conseguiram derrotar Cronos.
                    Juntos, eles dominam o universo e o distribuem, <b>Hades recebeu o submundo</b>, sendo relegado a uma terrível 
                    solidão, o que o levou a capturar a donzela Perséfone (filha de Zeus), para forçá-la a se casar. ele
                    Geralmente está associado ao mal, mas Hades pode ser visto como um deus nobre que sempre, por mais confuso 
                    que parecesse, procurava manter no mundo <b>um equilíbrio adequado entre o bem e o mal</b>.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Hermes
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        o mensageiro dos deuses
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Hermes é filho de Deus Zeus, por sua eloquência e carisma, ele ganhou o título de protetor de ladrões e Deus das fronteiras. 
                        Nascido no Olimpo, assim como seu pai teve relações informais com um grande número de mulheres, deixando uma vasta prole.
                        Seu maior feito é ter ido ao submundo, encomendado por Zeus, para negociar com seu tio (o próprio Hades), <b>para que ele libertasse 
                        sua irmã Perséfone</b>, o que alcançou graças à sua retórica divina.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Hera
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Rainha dos Deuses
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Essa divindade era a irmã mais velha do todo-poderoso Zeus e, ao mesmo tempo, sua esposa. 
                        <b>Ele é responsável por garantir a responsabilidade pelas uniões e nascimentos do casamento</b>, 
                        além de fornecer proteção especial a todas as mulheres.
                        Ele sempre foi de personalidade nobre e muito humano, apesar de sua divindade. Em homenagem 
                        à Deusa Hera, são realizadas festas chamadas “Matronalia”, que são realizadas no dia primeiro de março.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6bh-content"
                    id="panel6bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Hefesto
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Herói dos Deuses
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <b>Os artesãos tiveram seu protetor, Hefesto</b>. O Deus do fogo e das obras forjadas. Ele é o filho da deusa 
                        Hera e do todo-poderoso Zeus, embora isso não esteja muito claro. Existem versões que indicam que ele é apenas filho de Hera.
                        Hefesto, exceto pelo resto das divindades, nasceu sem beleza física, sua aparência era tão desagradável 
                        ao nascer que sua mãe o jogou do Olimpo e ficou coxo após a queda.
                        Ele foi resgatado do mar pela deusa Thetis (mãe de Aquiles) e criado por ela na ilha de Limões.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel7bh-content"
                    id="panel7bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Dionísio
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        deus do vinho e da vida
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        No sentido estrito da palavra, Dionísio acaba sendo um semideus. Nascido em Zeus com um mortal 
                        chamado Sémele, esse deus grego também <b>é conhecido como o governante da agricultura</b>.
                        A lenda de Dionísio conta que ele nasceu duas vezes, o primeiro mortal e o segundo graças à divindade de seu pai.
                        Em uma ocasião, Zeus assumiu sua verdadeira forma, e os raios que caíram mataram Sémele e 
                        Dioniso. O deus todo-poderoso pegou a criança e, colocando-o em uma de suas coxas, deu-lhe vida de volta.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel8bh-content"
                    id="panel8bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Atena
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        deusa da sabedoria
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        É uma das deusas principais e mais influentes do Olimpo. As histórias contam que, nascido 
                        diretamente da cabeça de Zeus, quando ele engoliu sua mãe, Athena emergiu com a ajuda de 
                        Hefesto, que abriu a cabeça de Zeus; <b>daí suas grandes habilidades em ciência e estratégia</b>, 
                        habilidades que também o serviram no campo de batalha, onde ele era um guerreiro implacável.
                        A Deusa Atena, em contrapartida ao seu irmão Ares, representa as causas justas.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel9bh-content"
                    id="panel9bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Apolo
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Deus do Sol
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nas histórias da mitologia grega, <b>o deus Apolo representa perfeição e beleza</b>. 
                        Dos filhos de Zeus, Apolo foi o mais influente de todos.
                        Ele não era apenas o Deus do Sol, mas também de doenças e curas, pragas e 
                        antídotos contra eles. Esta Deidade é o equilíbrio perfeito entre saudável e insano.
                        Apolo <b>desempenhou um papel transcendental durante a Guerra de Troia</b>, quando o 
                        rei desta cidade negou as ofertas prometidas aos deuses, foi ele quem lançou uma praga mortal sobre Tróia.
                        Mas seu maior feito, sem dúvida, é ter direcionado a flecha do príncipe Paris em direção ao calcanhar de Aquiles, matando-o.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel10bh-content"
                    id="panel10bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Ártemis
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        deusa da caça
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Artemis é a irmã gêmea de Apolo. Esta deusa representa alívio para as mulheres durante o parto. 
                        Como seu irmão Apolo, eles são repudiados pela deusa Hera, pois <b>ambos vêm da infidelidade de Zeus</b>.
                        Quando criança, entre outros desejos, pediu ao pai que lhe desse o dom da virgindade eterna, que foi 
                        cumprida. Por esse motivo, Artemis é uma deusa sem nenhum desejo sexual.
                        Muitos companheiros de caça, incluindo o mortal Órion, tentaram roubar sua virgindade. Todos eles, 
                        incluindo Orion, acabaram mortos nas mãos da deusa.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel11bh-content"
                    id="panel11bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Ares
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Deus da guerra
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Ares é a contraparte de sua irmã, a deusa Atena. Esta divindade <b>representa o instinto mais puro e visceral da 
                        guerra</b>, é a violência no seu melhor. Ele é fundador da cidade de Tebas, onde os espartanos vivem.
                        Apesar de ser o deus da guerra, Ares foi derrotado várias vezes por sua irmã Athena. A história de quando ele foi 
                        ferido pelo herói Diomedes também é conhecida e teve que retornar ao Olimpo para curar, deixando os Trojans sem 
                        sua ajuda durante a guerra.


                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel12bh-content"
                    id="panel12bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Afrodite
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        deusa da beleza e do amor
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Luxuriosa e cheia de paixão, essa é a Deusa Afrodite. Essa divindade governa tudo relacionado ao 
                        sexo e à reprodução. Nasce produto do esperma do titã grego Urano, a quem Cronos cortou os testículos.
                        <b>Ele emerge do mar diretamente quando adulto</b>, sendo desejado por muitos homens desde o primeiro momento.
                        Por medo de um conflito no Olimpo, Zeus decide que é Hefesto que fica com Afrodite, mas a Deusa nunca 
                        quis estar com ele, e seria Ares que acalmou os intensos desejos sexuais de Afrodite.
                        Hefesto, depois da raiva e desonra representadas pelo adultério cometido por Afrodite, queixou-se aos 
                        deuses do Olimpo, mas eles ignoraram suas reivindicações e sentiram inveja de Ares.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}