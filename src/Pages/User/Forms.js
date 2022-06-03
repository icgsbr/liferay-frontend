import React from "react";

import "./Forms.css";
import HeaderUser from "../../Components/LayoutUser/HeaderUser";
import Footer from "../../Components/layout/Footer";
import { FormSelect } from "react-bootstrap";

function Forms() {
    return(
        <div className="form-container overflow-scroll">
            <HeaderUser/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-1-form">
                    </div>
                    <div className="col-md-6 center-form">
                        <input type="text" id="nomeid1" placeholder="Nome Primário" required="required" name="nome" />
                        <input type="text" id="nomeid2" placeholder="Nome Secundário" required="required" name="nome1" />
                        <input type="email" id="emailid" placeholder="Email" name="email" />
                        <input type="tel" id="foneid" placeholder="Telefone" name="fone" />
                        <input type="text" id="orgid" placeholder="Organização" name="org" />
                        <input type="text" id="numid" placeholder="Número de Identificação Fiscal" name="numid" />
                        <input type="url" id="urlid" placeholder="Url" name="url" />
                        <input type="text" id="ruaid" placeholder="Rua" name="rua" />
                        <input type="text" id="cidadeid" placeholder="Cidade" name="cidade" />
                        <input type="text" id="regiaoid" placeholder="Região" name="reg" />
                        <input type="text" id="cepid" placeholder="Cep" name="cep" />
                        <select name="select">
                        <option value="valor1" selected>Brasil</option>
                        <option value="valor2">Canadá</option>
                        <option value="valor3">Chile</option>
                        <option value="valor4">Estados Unidos</option>
                        <option value="valor5">Bolívia</option>
                        <option value="valor6">Portugal</option>
                        <option value="valor7">Japão</option>
                        <option value="valor8">Noruega</option>
                        <option value="valor9">Suiça</option>
                        </select>
                        <p><b>Você pode escolher um ou mais objetos:</b></p>
                        <input type="checkbox" name="aux"/><label> Auxílio em Desastres</label> 
                        <input type="checkbox" name="fornecer"/><label> Fornecer comida / água / abrigo</label> 
                        <input type="checkbox" name="Saúde"/><label> Saúde</label>     
                        <input type="checkbox" name="educação"/><label> Educação</label> 
        
                        <input type="checkbox" name="aux"/><label> Liberdade / Justiça</label> 
                        <input type="checkbox" name="fornecer"/><label> Fornecer comida / água / abrigo</label> 
        
                        <input type="checkbox" name="outros"/><label> Outros</label>
                        <input type="text" name="outros"/>
        
                        <p><b>Você pode escolher um ou mais grupo de pessoas:</b></p>
                        <input type="checkbox" name="vulnerabilidade"/><label> Vulnerabilidade socioeconômica local / Global</label> 
                        <input type="checkbox" name="doença"/><label> Doença / Transtorno mental</label> 
        
                        <input type="checkbox" name="Situação"/><label> Situação de rua </label> 
                        <input type="checkbox" name="outros"/><label> Outros</label>
                        <input type="text" name="outros"/>
        
                        <textarea placeholder="Descrição da Organização"></textarea>
    
                        <input type="submit" class="enviar" onclick="Enviar();" value="Confirmar" />
                    </div>
                
                    <div className="col-md-1 center-form">
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Forms;