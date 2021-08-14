import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation.jsx'
import Home from './Components/Home.jsx';
import Details from './Components/Details.jsx';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {useState} from 'react';
function App() {

  const [jobs,setJobs] = useState({});
  const [search,setSearch] = useState('');

const handleSearch = (query) =>{
    setSearch(query);
    console.log(query);
}
  const handleJobs = (jobs) =>{
    setJobs(jobs);
  }
  return (
    <>
    <Navigation searchQuery={(query)=>handleSearch(query)}/>
    <Router>
    <Route path="/" exact render={(routerProps)=> <Home searchQuery={search} jobs={(fetch)=>handleJobs(fetch)}/> }/>
    <Route path="/details" render={(routerProps)=> <Details jobs={jobs} {...routerProps}/>} />
    </Router>
    </>
  );
}

export default App;
