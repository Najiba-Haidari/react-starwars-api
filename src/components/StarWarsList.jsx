import {Link} from 'react-router-dom';

export default function StarWarsList(props) {
  return (
    <div className="p-5 container">
    <h1>Star Wars Stars</h1> 
    <div className='d-flex flex-row flex-wrap justify-content-center' style={{ width: "1300px" }}>
    
      {props.starWars.map((sw, i) => {
        const parts = sw.url
        const id = parts.split("/").filter(part => part !== "").pop();

        return <Link key={sw.name} to={`/starwars/${id}`}>
        <div className='bg-success bg-opacity-25 m-2 p-4 shadow rounded border border-4' style={{ height: "100px", width: "250px" }}>
          <h5>{sw.name}</h5>
        </div>
        </Link>
      })}
    </div>
    </div>
  );
}