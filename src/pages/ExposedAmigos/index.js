import CardAmigos from "../../components/amigos/Amigos"
import { divStyled } from './style'



import eujessicacarlos from '../../images/amigos/eujessicacarlos.jpeg'
import isaquenoia from '../../images/amigos/isaquenoia.jpeg'
import caretas from '../../images/amigos/caretas.gif'
import brendamedo from '../../images/amigos/brendamedo.jpg'
import carolseachandokkk from '../../images/amigos/carolseachandokkk.jpg'
import diosmio from '../../images/amigos/diosmio.jpg'
import essedia from '../../images/amigos/essedia.png'
import isaquesedescobrindo from '../../images/amigos/isaquesedescobrindo.jpg'
import jessicacarloscabecaenorme from '../../images/amigos/jessicacarloscabecaenorme.jpg'
import montegente from '../../images/amigos/montegente.jpg'
import paulobrenda from '../../images/amigos/paulobrenda.jpg'
import paulocarol from '../../images/amigos/paulocarol.jpg'
import paulocarolmds from '../../images/amigos/paulocarolmds.jpg'
import pauloeliandra from '../../images/amigos/pauloeliandra.jpg'
import pauloelisa from '../../images/amigos/pauloelisa.jpg'
import paulokarla from '../../images/amigos/paulokarla.jpg'
import pauloleandro from '../../images/amigos/pauloleandro.jpg'
import pauloleandro2 from '../../images/amigos/pauloleandro2.jpg'
import euejana from '../../images/amigos/euejana.jpg'
import galeraeedurdo from '../../images/amigos/galeraeedurdo.jpg'

export default function Pessoal() {
	return (
		<div>
			<div className="margincenter">
				<CardAmigos
					titulo="Eu, Jessica e Carlos na festa da tia do Leandro"
					url={eujessicacarlos} />

				<CardAmigos
					titulo="Isaque bem noia"
					url={isaquenoia} />

				<CardAmigos
					titulo="Esse video é o melhor"
					url={caretas} />

				<CardAmigos
					titulo="Brenda assustadora kkk"
					url={brendamedo} />

				<CardAmigos
					titulo="Eu e a Carol"
					url={carolseachandokkk} />

				<CardAmigos
					titulo="Eu, Leandro e Eliandra"
					url={diosmio} />

				<CardAmigos
					titulo="Isaque saindo do armario"
					url={isaquesedescobrindo} />

				<CardAmigos
					titulo="A Galera toda"
					url={essedia} />

				<CardAmigos
					titulo="Jessica e Carlos cabega gigante"
					url={jessicacarloscabecaenorme} />

				<CardAmigos
					titulo="Mais da gente"
					url={montegente} />

				<CardAmigos
					titulo="Eu e a Brenda"
					url={paulobrenda} />

				<CardAmigos
					titulo="Eu e a Carol"
					url={paulocarol} />

				<CardAmigos
					titulo="Meu Deus Carol kkk"
					url={paulocarolmds} />

				<CardAmigos
					titulo="Eu e Eliandra"
					url={pauloeliandra} />

				<CardAmigos
					titulo="Eu e Elisa"
					url={pauloelisa} />

				<CardAmigos
					titulo="Eu e a Karlinha"
					url={paulokarla} />

				<CardAmigos
					titulo="Eu e o Leandro"
					url={pauloleandro} />

				<CardAmigos
					titulo="Eu e o Leandro de novo"
					url={pauloleandro2} />

				<CardAmigos
					titulo="Edurdo no grupo"
					url={galeraeedurdo} />

				<CardAmigos
					titulo="Eu e Jana"
					url={euejana} />
			</div>
		</div>
	)
}
