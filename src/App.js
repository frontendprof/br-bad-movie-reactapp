import React, {useState,useEffect} from 'react';
import Header from "./components/ui/Header"
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import axios from "axios";
import './App.css';

const App=()=> {

  const [items,setItems] = useState([])
  const [isLoading,setLoading] = useState(true)
  const [query, setQuery]=useState('')

  useEffect(()=>{
    const fetchItems = async ()=>{
      const result=await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      setItems(result.data)
      setLoading(false)
    }

    fetchItems();
  },[query])

  
  return (
    <div className="container">

      <h1>Assalaamu aleykom</h1>
      <Header />
      <Search getQuery={q=>setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
