import React, { Component } from "react"
import Axios from "axios"



export default class Personnage extends Component {
    state = {
        personnage: null,
    }

    componentDidMount () {
        if (this.props.match)
            console.log(this.props.match.params)
            Axios.get(`https://swapi.co/api/people/${this.props.match.params.id}`)
            .then(response => {
                console.log("person", response)
                this.setState({ personnage: response.data })
            })
            .catch(error => console.log(error))
    
    
    }

    render() {
        return (
            <div>
                { this.state.personnage && (
                    
                    <div>
                        <img src={`./../img/${this.state.personnage.name}.jpg`}/>
                        {this.state.personnage.name}
                        {this.state.personnage.birth_year}
                        {this.state.personnage.eye_color}
                        {this.state.personnage.gender}
                        {this.state.personnage.hair_color}
                        {this.state.personnage.height}
                        {this.state.personnage.skin_color}
                    </div>
                )}
            </div>
        )
    }
}

