import Header from "../../components/header/Header"

export default function TestePage() {

	const sections = [
		{ title: 'Home', url: '#' },
		{ title: 'Museu de Artes', url: '#' },
		{ title: 'Recital de Poesias', url: '#' },
		{ title: 'Listas', url: '#' },
	];

	return (
		<div>
			<Header title="Blog" />

			<h1> Hola ! </h1>
		</div>
	)
}
