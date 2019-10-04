import React, { Component } from "react"
import Axios from "axios"
import "./Home.css"
import Personnage from "./Personnage";
import { Link } from "react-router-dom"
import { getIdOfUrl } from "./utils";

class PersonnagesListe extends Component {
    state = {
        characters: []
    };

async componentDidMount() {
try {
    const charactersRes = await Axios("https://swapi.co/api/people/");
    console.log(charactersRes)
    this.setState({
    characters: charactersRes.data.results
    }, () => console.log(this.state.characters));
} catch (error) {
    console.log(error);
    }
}

    render() {
        return (
            <div className='personnage'>
                {this.state.characters.map((personnage, index) => (
                    <Link className="link-parent" key={index} to={'/personnage/' + getIdOfUrl(personnage.url)}>
                        <div  className="parent">
                            <h2>
                                {personnage.name}
                            </h2>
                            <div className="bg"></div>
                    
                            <img src={`./img/${personnage.name}.jpg`}/>
                        </div>
                    </Link>    
                    
                ))}
            </div>
        );
    }
}

export default PersonnagesListe;