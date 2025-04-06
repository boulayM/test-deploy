import { Component } from "react";
import Form from "./Form";
import { ModelFord } from "./ModelFord";

export class BrandModel extends Component {

    onChangeBrandModel = (event) => {
        this.props.changeBrandModel (event.target.value);
        event.target.value="";
      }
    
    constructor (props) {
        super (props);

    this.state = {
        Ford = "",
        Volkswagen = "",
        Renaud = "",
        Peugeot = ""
    }
    }
    render () {
        return (
            <form>
                <select onChange = {this.onChangeBrandModel}>
                    <option value="Focus">Focus</option>
                    <option value="Mustang">Mustang</option>
                    <option value="Explorer">Explorer</option>
                    <option value="Tourneo">Tourneo</option>
                    <option value="Fiesta">Fiesta</option>
                </select>
            </form>
        );
    }
}