import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    alert(`안녕, ${name}!`);
    event.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' onChange={event => setName(event.target.value)} value={name} />
        <br /><br />
        <input type="submit" value={"제출"} />
      </form>
    </>
  )
}

export default App
