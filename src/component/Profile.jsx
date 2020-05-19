import React from 'react'
import ReactDOM from 'react-dom'
import Stories from './Storie'
import Header from './Header'
import Profile from './Profile'
import TextComponent from './TextComponents'
import Footer from './Footer'
import $ from 'jquery'




export default (props) => {
	const escalaCinza = {filter:props.filter}
	const hand = {cursor:props.cursor || 'pointer'}
	return(
	<div className="Profile">
		
			<div className="Profilefoto" onClick={function(e){loadStorie(); progressBar()}} style={hand}>
				<div className="border" style={escalaCinza}></div>
			</div>

			<div className="ProfileText">
				<h2>{props.nome}</h2>
				<p>{props.position}</p>
				<br/><br/>
				<a href={props.ainsta} target="_blank" rel="noopener noreferrer" title="Instagram">{props.insta} | </a>
				<a href={props.atwitter} target="_blank" rel="noopener noreferrer" title="Twitter">{props.twitter} | </a>
				<a href={props.adeviantart} target="_blank" rel="noopener noreferrer" title="DeviantArt">{props.deviantart}</a>
			</div>
			
	</div>
	)
}

var StoriesRender = (
    <div className="bg">

      <Stories button="X" />
      <Header/>
      <Profile
        cursor="pointer"
        nome="BRUNO"
        bitcoin="1GsaVB7ypw8zkZz5KKL124GcKEi1ZfCZdD"
        text="As the old world fall behind, my spirit reaches wide..."
        filter="grayscale(1)"
      />

      <TextComponent/>
      
      <Footer nome="BRUNO"/>
    </div>
  )

const progress = '100%';


export function loadStorie(){ReactDOM.render(StoriesRender,document.getElementById('root'))}   


export function progressBar(){
		setTimeout(function(){ 
			$('.loader').fadeOut(1000); 
			$('.bar').css('width',progress)},1 )}