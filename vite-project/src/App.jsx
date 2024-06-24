
import './App.css'

function App() {

  const handleInputChange = (e) => {
    e.preventDefault();
    console.log('handleInputChange'. e.target.value);
  };
  return (
    <div className="container">
      <form>
        <label htmlFor="search">Pesquisar</label>
        <input name="search" id="search" onChange={handleInputChange} />
      </form>
      <div className='search-results'>
        <ul>
          <li>
            <span>Rick</span>
          </li>
          <li>
            <span>Morty</span>
          </li>
          <li>
            <span>Summer</span>
          </li>
          <li>
            <span>Beth</span>
          </li>
          <li>
            <span>Jerry</span>
          </li>
          <li>
            <span>Abadango Cluster Princess</span>
          </li>
          <li>
            <span>Abradolf</span>
          </li>
          <li>
            <span>Adjudicator Rick</span>
          </li>
          <li>
            <span>Agency Director</span>
          </li>
          <li>
            <span>Alan Rails</span>
          </li>
          <li>
            <span>Albert Einstein</span>
          </li>
          <li>
            <span>Alexander</span>
          </li>
          <li>
            <span>Alien Googah</span>
          </li>
          <li>
            <span>Alien Morty</span>
          </li>
          <li>
            <span>Alien Rick</span>
          </li>
          <li>
            <span>Amish Cyborg</span>
          </li>
          <li>
            <span>Annie</span>
          </li>
          <li>
            <span>Antenna Morty</span>
          </li>
          <li>
            <span>Antenna Rick</span>
          </li>
          <li>
            <span>Ants in my Eyes Johnson</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App
