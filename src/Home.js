import React, { Component } from "react"
import { Link } from "react-router-dom"
import PersonnagesListe from "./Personnagesliste"
import "./Home.css"




export default class Home extends Component {
    state = {}
    render() {
        return (
            <div className='container'>
                <div className="text-container">
                    <h1>STAR WARS</h1>
                </div>
                <p className='text'>
                Clique sur un personnage, arrive sur sa page et découvre son nom, sa couleur de yeux, son année de naissance, son genre, le nom des vaisseaux spatiaux piloté (starships), la date de création et d’édition de la ressource.
                </p>

                <Link to="/personnages" className='textpersonnage'>DECOUVRE LES PERSONNAGES</Link>
                <PersonnagesListe />

            </div>

            
        )
    }
}