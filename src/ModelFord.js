import { Component } from "react";

export class ModelFord extends Component {

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