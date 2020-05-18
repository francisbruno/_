import React from 'react'
import Header from './component/Header'
import Profile from './component/Profile'
import TextComponent from './component/TextComponents'
import Footer from './component/Footer'
import './App.css';
import './component/Storie.css'


 
export default props => {
  return(
    
    <div className="bg">
      <div className="twinkling"></div>
      <img className="Nebula" src={require('./nebula.png')} draggable="false" alt="Bruno Francisco"/>

      <Header/>

      <Profile
        cursor="pointer"
        nome="BRUNO FRANCISCO"
        position="Designer/Developer"
        
        twitter="@brvnv_"
        insta="@brvnofrancicvs"
        deviantart="infj-artist"

        atwitter="https://twitter.com/brvnv_"
        ainsta="https://instagr.am/brvnofranciscvs"
        adeviantart="https://deviantart.com/infj-artist"
      />

      <TextComponent/>
      <br/><br/>
      <Footer nome="BRUNO"/>
    </div>

    )
}



 