import React from "react";
import { ModelFord } from "./ModelFord";
import { ModelVw } from "./ModelVw";


export function ListeModele (props) {
    if (props.marque == "Ford") {
        return <div><ModelFord/></div>
    }
    if (props.marque == "Volkswagen") {
        return <ModelVw/>
    }
}
