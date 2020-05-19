import React from 'react'

export default (props) => {
	function anoFooter(){
		var data = new Date();
		var ano = data.getFullYear()
		return(
			<strong>{ano}</strong>
		)

	}
	return(
		<footer>
			<span>&lt;/&gt; {props.nome} | {anoFooter()}</span>
		</footer>
	)
}