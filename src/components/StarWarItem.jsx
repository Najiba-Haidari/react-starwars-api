import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';

export default function StarWarsList(props) {
const [star, setStar] = useState(null)
const params = useParams()
const id = params.id


async function getTheStar() {
  var  url = props.starWars.find((star)=> {
    if (star.url === `https://swapi.dev/api/people/${id}/`){
      return star.url
    }
  })
  // var url = url.url;
  console.log(url)
  const fetchUrl = url.url
  console.log(fetchUrl)
  try {
    if (url){let response = await fetch(fetchUrl)
      let data = await response.json()
      setStar(data)}
    

  } catch (error) {
    console.log(error)
  }
}
// console.log("Props:", props.starWars);
// console.log("ID:", id);
// console.log("Filtered URL:", url);
console.log(star)
useEffect(() => {
  getTheStar();
}, [id, props.starWars]);

  return (
    // <Link to='/starwars/:id'>
    <div className="p-5 d-flex flex-row flex-wrap justify-content-center">
    
    <div>
    <h2>StarWars Star </h2>
    {star ? 
    (      <div key={star.name} className='bg-success bg-opacity-25 m-2 p-4 shadow rounded border border-4' style={{  width: "350px" }}>
          <h5>Star: {star.name}</h5>
          <p>Number of Starships: {star.starships.length}</p>
          <p>Number of Films: {star.films.length}</p>
          <p>Number of Starships: {new Date(star.created).toLocaleDateString()}</p>
        </div>) : "Loading ..."}</div> 
    
    </div>
    // </Link>
  );
}