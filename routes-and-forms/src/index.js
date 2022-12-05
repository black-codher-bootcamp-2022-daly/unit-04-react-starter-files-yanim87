import {React} from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <ul className="breadcrumb">
        <li><Link to="/"> All Pets </Link></li>
        <li><Link to="/kittens"> Kittens </Link></li>
        <li><Link to="/puppies"> Puppies </Link></li>
        <li><Link to="/ducklings"> Ducklings </Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="kittens" element={<Kittens />} />
        <Route path="puppies" element={<Puppies />} />
        <Route path="ducklings" element={<Ducklings />} />
      </Routes>
  </Router>
  );
}

function Home() {
  return <>
          <h1>All Pets</h1>
          <section>This is the page for all your pet needs</section>
          <img src="imgs/kitten.jpg" alt="Kitten"/>
          <img src="imgs/puppy.jpg" alt="Puppy"/>
          <img src="imgs/duckling.jpg" alt="Duckling"/>
        </>
}

function Kittens() {
  return <>
      <h1>Kittens</h1>
      <section>This is the cats page</section>
      <img src="imgs/kitten.jpg" alt="Kitten"/>
    </>
}
function Puppies () {
  return <div>
    <h2>Puppies</h2>
    <section> This is the dogs page</section>
    <img src="imgs/puppy.jpg" alt="Puppies"></img>
  </div>
}
function Ducklings () {
  return <div>
    <h3>Ducklings</h3>
    <section> This is a ducklings page</section>
    <img src="imgs/duckling.jpg" alt="Ducklings"></img>
  </div>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
