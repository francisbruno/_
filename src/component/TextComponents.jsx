import React from 'react'
import textEn from './text_En'
import textPt from './text_Pt'

export default _ => {

	function engText(){
		return textEn.map((text,i) =>{
			return(
				<div key={text.id}>
					<h2>{text.id}</h2>
					<p>{text.text}</p>
				</div>)})}

	function ptTexto(){
		return textPt.map((texto, i) =>{
			return (
				<div key={texto.id}>
					<h2>{texto.id}</h2>
					<p>{texto.texto}</p>
				</div>)})}

	return (
		
		<div className="Text">
			{engText()}
			{ptTexto()}
		</div>

		)
}