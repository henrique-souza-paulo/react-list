import React from "react"
import { GlobalStyle } from './styled'
import Blog from '../../components/blog/Blog'

export default function Home() {
	return (
		<div>
			<GlobalStyle />
			<Blog />
		</div>
	)
}
