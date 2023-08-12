import React, {useState, useEffect} from 'react';

export default function App(){

  const [nome, setNome] = useState('');

  useEffect(() => {
    console.log('Effect: ', nome);
  }, [nome]);

  return (
    <>
      <input type='text' onChange={(evt) => setNome(evt.target.value)} value={nome} />
      <h1>{nome}</h1>
    </>
  );
}
