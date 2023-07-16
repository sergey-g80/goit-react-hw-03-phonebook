import { Component } from "react";
import "./RickMorty.css";
import {Card} from "./Card";
import api from '../http/index';

export class RickMortyMain extends Component {

    async componentDidMount(){
    const result = await api.get("/character")
    console.log(result)
}

    // render() {
    //     return (
    //         <div className="http-requests-wrapper">
    //             <Card />

    //         </div>
    //     )
    // }
}