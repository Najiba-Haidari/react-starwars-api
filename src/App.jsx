import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import StarWarsList from './components/StarWarsList.jsx';
import StarWarItem from './components/StarWarItem.jsx';
import Nav from './components/Nav.jsx';
import { Route, Routes } from 'react-router-dom'

function App() {

  const [starWars, setStarWars] = useState([])

  async function getStars() {
    try {
      let response = await fetch('https://swapi.dev/api/people')
      let data = await response.json()
      setStarWars(data.results)
      // console.log("startwars:", starWars)
      console.log(data.results)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getStars();
    // fetch('https://swapi.dev/api/people')
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     return response.json();
    //   })
    //   .then(data => {
    //     setStarWars(data.results)
    //     console.log(starWars)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   });
  }, []);
  // console.log(starWars)

  return (
    <>
      <Nav />
      {/* <h1>Star Wars Starships</h1> */}
      <Routes>
        <Route path='/' element={<h1 className='p-2 m-5 fs-2'>This is the Main Page. Check the other tab for startwar Starships</h1>} />
        <Route path='/starwars' element={<StarWarsList starWars={starWars} />} />
        <Route path='/starwars/:id' element={<StarWarItem starWars={starWars} />} />
      </Routes>
    </>
  )
}

export default App
