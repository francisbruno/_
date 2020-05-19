import React from 'react'
import './Storie.css'
import ReactDOM from 'react-dom'
import App from '../App';

var randomizer = 	parseInt(Math.random()*71+1);

export default props => {

  		const imageUrl = require('./imgs/'+randomizer+'.jpg')

  		setTimeout(function(){randomizer++},200)
		
	return(

		<div className="overlay">
			<div className="first" style={{backgroundImage:`url(${imageUrl})`}}>
				<div className="progress">
					<div className="bar"></div>

					<button className="close" onClick={fecharStorie}>{props.button}</button>
				</div>
				<div className="loader"></div>
			</div>
		</div>
)
}


export function fecharStorie(){ReactDOM.render(<App/>,document.getElementById('root'));}

