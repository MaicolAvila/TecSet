import React from "react"
import "./styles/Home.css"



import { Slider } from '../components/carrusel';
import {ListPcs} from "../components/cards";

class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Slider/>
                <ListPcs/>
            </React.Fragment>
        )
    }
}

export default Home;