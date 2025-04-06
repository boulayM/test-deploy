import { Component } from "react";


export default class Form extends Component {

  onChangeColor = (event) => {
    this.props.changeColor (event.target.value);
    event.target.value="";
  }
  onChangeBrand = (event) => {
    this.props.changeBrand (event.target.value);
    event.target.value="";
  }

  onChangeModel = (event) => {
    this.props.changeModel (event.target.value);
    event.target.value="";
  }

  render () {
    return (
      <form>
        <div>
          <label htmlFor ="selectBrand" id="label">Choisissez une marque</label>
        </div>
        <select id="selectBrand" onChange={this.onChangeBrand}>
          <option value="">Veuillez faire un choix !</option>
          <option value= "Ford">Ford</option>
          <option value= "Volkswagen">Volkswagen</option>
          <option value= "Renaud">Renaud</option>
          <option value= "Peugeot">Peugeot</option>
        </select>

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

        
        <div>
          <label htmlFor ="selectColor" id="label">Choisissez une couleur</label>
        </div>
        <select id="selectColor" onChange={this.onChangeColor}>
          <option value="">Veuillez faire un choix !</option>
          <option value= "Bleu">Bleu</option>
          <option value= "Blanc">Blanc</option>
          <option value= "Rouge">Rouge</option>
          <option value= "Noir">Noir</option>
        </select>
      </form>
    );
  } 
}
