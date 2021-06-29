import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import  '../../css/styles.css'
import axios from 'axios';

const testData = [
    {name: "Steven Chinchin", avatar_url: "https://avatars.githubusercontent.com/u/52291881?v=4", company: "@facebook"},
    {name: "Kevin Guchamira", avatar_url: "https://avatars.githubusercontent.com/u/33032880?v=4", company: "@facebook"},
    {name: "Fernando", avatar_url: "https://avatars.githubusercontent.com/u/47802477?v=4", company: "@facebook"},
    {name: "Mauricio Matango", avatar_url: "https://avatars.githubusercontent.com/u/61792044?v=4", company: "@facebook"},
    {name: "Henry", avatar_url: "https://avatars.githubusercontent.com/u/67518799?v=4", company: "@facebook"},

];

const ListaTarjetas = (props) => (
	<div>

  	{props.profiles.map(profile => <Tarjetas key={profile.name} {...profile}/>)}


    
	</div>
);


const Tarjetas = (props) => {


  return (
    <div className="github-profile">
      <img src={props.avatar_url} />
      <div className="info">
      <div className="name">{props.name}</div>
      <div className="company">{props.company}</div>
      </div>
      
    </div>
  )
}

export const Form = (props) => {

  const [userName, setUserName] = useState("")

  const handleSubmit = async(event) =>{
    event.preventDefault()
    const resp = await axios.get(`https://api.github.com/users/${userName}`)

    this.props.onSubmit(resp.data)
    this.setUserName("")

  }

  return (
    <div>
      	<form onSubmit={handleSubmit}>
    	  <input 
        type="text" 
        placeholder="usuario del github" 
        value={userName} 
        onChange={e => setUserName(e.target.value)}/>
        <button>AGREGAR</button>
    	</form>
    </div>
  )
}

export const App = () => {

  const [profiles] = useState(testData)

  
  const addNewProfile = (profileData) => {
  	this.setState(prevState => ({
    	profiles: [...prevState.profiles, profileData],
    }));
  }

  return (
    <div>

      <div className="header"> 
        <h1>
          Tarjetas de Github
        </h1>
      </div>
      
      
      <Form onSubmit= {addNewProfile}/>

      <ListaTarjetas profiles = {profiles}
      
      ></ListaTarjetas>

    </div>
    
  )
}

if (document.getElementById('example')) {
    ReactDOM.render(<App title="Tarjetas" />, document.getElementById('example'));
}