import React from 'react';

class App extends React.Component {

    render() {
        return (
            <>
                <p>Meu primeiro paragrafo em React</p>
                <p>Meu segundo paragrafo em React</p>
                <div>
                    <pre> Cansei de paragrafos... </pre>
                </div>
                <p>{new Date().toLocaleDateString("pt-BR")}</p>
            </>
        );
    }

}

export default App;

