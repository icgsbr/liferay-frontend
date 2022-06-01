import "./registryFormCard.css";
import React from "react";
import {ModelContext} from "../../Components/ModelContext"

function RegistryFormCard(props){
    //select the kind of solicitation
    var type = props.optionConcession;
    const TypeSolicitation = () =>{
        if (type === "Propostas")
            return "Doação"
        else
            return "Atividade"
    }
    return(
        
        <div className = "solicitation-register" >
            <div id="title-typeSolicitation" className="row"><h5>{TypeSolicitation() + " para a instituição " + props.nameinst}</h5></div>
            <div className="row">
                <div className="col-sm-5">
                <h5 id='titleRegistry'>Dados do Colaborador</h5>
                <span className="registryData-text">Name:{props.username} + {props.usernameSec}</span>
                </div>
                <div className="col-sm-5">
                </div>

            </div>

        </div>

    )
}

export default RegistryFormCard;
  