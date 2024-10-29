import React, {useEffect, useState} from 'react';
import "./estilo.css"

const App = () => {
  const [nutri, setNutri] = useState([]);
  const [cotacoes, setCotacoes] = useState({brl: {
    usd: 1,
    eur: 1,
    aoa: 1
  }});

  useEffect(() => {
    const url = "https://sujeitoprogramador.com/rn-api/?api=posts"

    fetch(url)
    .then(resp => resp.json())
    .then(json => setNutri(json));
  }, []);

  useEffect(() => {
    const url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/brl.json"

    fetch(url)
    .then(resp => resp.json())
    .then(json => setCotacoes(json));
  })

  return(
    <div className='container'>
      <header>
        <strong>
          React Nutri
        </strong>
      </header>

      {nutri.map((item) =>
        <article key={item.id} className='post'>
          <strong className='titulo'>{item.titulo}</strong>
          <em>Categoria: {item.categoria}</em>

          <img src={item.capa} alt={item.titulo} className='capa'></img>

          <p className='subtitulo'>{item.subtitulo}</p>
        </article>
      )}

      <div className='container'>
        <h1>Moedas</h1>

        <article className='post'>
          <strong>Dolar</strong>
          <p>Um dólar equivale a {(1/cotacoes.brl.usd).toFixed(5)} reais.</p>
        </article>

        <article className='post'>
          <strong>Euro</strong>
          <p>Um euro equivale a {(1/cotacoes.brl.eur).toFixed(5)} reais.</p>
        </article>

        <article className='post'>
          <strong>Kwanza</strong>
          <p>Um kwanza equivale a {(1/cotacoes.brl.aoa).toFixed(5)} reais</p>
        </article>
      </div>
    </div>
  )
}

export default App;