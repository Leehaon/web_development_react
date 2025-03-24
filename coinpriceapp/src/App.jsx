import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [Loading, setLoding] = useState(true);
  const [coins, setCoins] = useState([]);

  // setLoading(false);를 적용하게 되는 시점이 언제인가?
  // 1.

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
    .then(response => response.json()) // 2.

    // .then(json => console.log(json));
    .then(json => { // 3.
      setCoins(json);
      setLoding(false);
    })
  }, []);
  console.log(coins);

  return (
    <div>
      <h1>Coin Price Tracker</h1>
      {Loading === true ? <strong>Loading...🛴</strong> : null}
      <ul>
        <li>
          <h5>코인 이름1</h5>
          <p>현재 가격1</p>
        </li>
      </ul>
    </div>
  );
}

export default App;
