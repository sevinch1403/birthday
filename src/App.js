import { useState } from 'react';
import List from './components/List';
import data from "./data"
import './App.css';


function App() {
  const [people, setPeople] = useState(data)
  // console.log("data", people)
  const deletePeople = () =>{
    if(people.length == 0){
      setPeople(data)
    }else{
      setPeople([])
  }
}
   return (
  <main>
    <section className='container'>
      <h3>{people.length}birthdays today</h3>
     <List people = {people}/>
     <button onClick={deletePeople}>{people.length == 0 ? "Show All" : "Clear All"}</button>
    </section>
  </main>
  );
}

export default App;
