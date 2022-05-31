import "./registerform.css"
import React from "react";

function SolicitationRegistry(props){
    //select the kind of solicitation
    var type = props.optionConcession;
    const TypeSolicitation = () =>{
        if (type == "Propostas")
            return "Doação"
        else
            return "Atividade"
    }
    return(
        <div key={props.id} className = "solicitation-register">
            <div id="title-typeSolicitation" className="row"><h5>{TypeSolicitation() + " para a instituição " + props.nameinst}</h5></div>
            <div className="row">
                <div className="col-sm-5">
                <h5 id='titleRegistry'>Dados do Colaborador</h5>
                <h6 className="registryData-text">Name:{props.username} {props.usernameSec}</h6>
                </div>
                <div className="col-sm-5">
                </div>

            </div>

        </div>

    )
}

export default SolicitationRegistry;
  