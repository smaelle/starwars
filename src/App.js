import React, { Component } from "react"
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./Home"
import Personnages from "./Personnages"
import Personnage from "./Personnage"

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Route exact path="/" component={Home} />
                    <Route path="/personnages" component={Personnages} />
                    <Route path="/personnage/:id" component={Personnage} />

                </Router>
            </div>
        )
    }
}

export default App
