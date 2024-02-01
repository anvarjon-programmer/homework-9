import { useState } from 'react';
import './App.css';
import Header from './componets/Header';
import Trending from './componets/Trending';
import Users from './componets/Users';
import Category from './componets/Category';
import Discover from './componets/Discover';

function App() {
  // const [showContent,setSjowContent] = useState(true)
  // const [events,setEvents] = useState([
  //   {title: "Anvars's birthday part",id:1},
  //   {title: "Doniyors's birthday part",id:2},
  //   {title: "Ahror's birthday part",id:3}
  // ])
  // const handleDelete = (id)=>{
  //   const filteredEvents = events.filter((event) =>{
  //     return event.id !== id
  //   })
  //   setEvents(filteredEvents)
  // }
  return (
    // <div className="App">
    //   {showContent && <button  onClick={()=> setSjowContent(false)}>hide</button>}
    //   {!showContent && <button  onClick={()=> setSjowContent(true)}>show</button>}
    //   {
    //     showContent && events.map((event) =>{
    //       return(
    //         <div key={event.key}>
    //            <h1>{event.title}</h1>
    //            <button onClick={()=>handleDelete(event.id)}>delet</button>
    //         </div>
    //       )
    //     })
    //   }
    // </div>
    <div className='bg-gray-900'>
      <Header/>
      <Trending/>
      <Users/>
      <Category/>
      <Discover/>
    </div>
  );
}

export default App;


