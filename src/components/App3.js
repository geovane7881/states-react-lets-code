import React from 'react';

class App3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {nome : undefined, idade : 20}
        //solucao 1
        //this.changeNome = this.changeNome.bind(this);
    }

    /*
    //solucao1
    changeNome = function(evt) {
        this.setState({nome: evt.target.value});
    }
    */

    //solucao2
    changeNome = (evt) => {
        this.setState({nome : evt.target.value});
    }

    render() {
        return(
            <>
            nome: <input type='text' value={this.state.nome} onChange={this.changeNome}/>
            <p>Ola {this.state.nome}</p>
            </>
        )
    }
}

export default App3;
