import { Component } from "react";
import "./RickMorty.css";
import {Card} from "./Card";
export class RickMortyMain extends Component {
    render() {
        return (
            <div className="http-requests-wrapper">
                <Card />

            </div>
        )
    }
}