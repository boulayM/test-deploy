import { Component } from "react";

export class ModelVw extends Component {

    onChangeModel = (event) => {
        this.props.changeModel (event.target.value);
        event.target.value="";
    }

    render () {
        return (
        <form>
            <div>
            <label htmlFor ="selectModel" id="label">Choisissez un modèle</label>
            </div>
            <select id="selectModel" onChange={this.onChangeModel}>
            <option value="">Veuillez faire un choix !</option>
                <option value="Kombi">Focus</option>
                <option value="Fusca">Mustang</option>
                <option value="Gol">Explorer</option>
                <option value="Fox">Tourneo</option>
                <option value="Santana">Fiesta</option>
            </select>
        </form>
    );
}
}