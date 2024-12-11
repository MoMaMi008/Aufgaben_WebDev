
import { useState } from 'react';
import './App.css'
import Search from './components/search/Search'
import News from './components/news/News';

interface Articles{
  source: {
    id: string,
    name: string
  },
  author: string,
  title: string,
  description:string,
  url: string,
  urlToImg: string,
  publishedAt: string,
  content:string
}
      


function App() {

  const [fetchData, setFetchData] = useState<Articles[]>([]);

  return (
    <>
      <Search setFetchData={setFetchData} />
      <News fetchData={fetchData}/>
    </>
  )
}

export default App
