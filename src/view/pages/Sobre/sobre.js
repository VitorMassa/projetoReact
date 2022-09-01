import React from "react";
import Header from "../../components/Header/Header";

function About() {
    return(
        
        <div title="Global">
            <div>
                <Header />
            </div>
            <div title="Body" className="col-12 d-flex flex-row justify-content-around">
                <div className="p-2 m-3 col-5 bg-warning">
                    TESTE
                </div>
                <div className="p-2 m-3 col-5 bg-success">
                    TESTE 2
                </div>
            </div>
            
        </div>
    );
}

export default About