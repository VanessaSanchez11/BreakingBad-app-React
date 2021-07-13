import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Header from './components/ui/Header';
import Search from './components/ui/Search'
import CharacterGrid from './components/characters/CharacterGrid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Index from './components/ui/Index';
import Quotes from './components/ui/Quotes';
import Episodes from './components/ui/Episodes';






const App = ()=> {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() =>{
    const fetchItems = async () =>{
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      // console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
    
  }, [query])


  return (
    // <div className="container">
    // <Header/>
    // <Search getQuery={(q)=> setQuery(q)}/>
    // <CharacterGrid isLoading={isLoading} items={items} />
    // </div>


     <Router>
          <Header />
          <div className="btn-group">
            <Link to="/">
              Home
            </Link>
            <Link to="/episodes" >
              Episodes
            </Link>
            <Link to="/characters">
              Characters
            </Link>
            <Link to="/quates">
              Quotes
            </Link>
          </div>
          
          <Switch>
            <Route path="/" exact>
              <Index />
            </Route>
            <Route path="/episodes" exact>
              <Episodes />
            </Route>
            <Route path="/characters" >
              
              <Search getQuery={(q)=> setQuery(q)}/>
              <CharacterGrid isLoading={isLoading} items={items} />
            </Route>
            <Route path="/quates">
              <Quotes />
            </Route>
         


        </Switch>

      


    </Router>




  );
}

export default App;
