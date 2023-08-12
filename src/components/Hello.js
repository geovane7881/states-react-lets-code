import React from 'react';

/*
export default function Hello(props) {
    //return (<h1>{props.text}</h1>);
    return (<h1>{props.children}</h1>);
}
*/

//{children}
/*
export default function Hello({text}) {
    return (<h1>{text}</h1>)
}
*/


// com arrow functions

const Hello = ({text}) => <h1>{text}</h1>;
export default Hello; 
