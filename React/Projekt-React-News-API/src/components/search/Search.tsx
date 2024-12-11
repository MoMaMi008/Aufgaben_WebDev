import { useEffect, useState } from "react";

interface FetchData{
    status: string,
    totalResults: number,
    articles: {
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
        }[];
}

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

interface FetchProps{
    setFetchData: React.Dispatch<React.SetStateAction<Articles[]>>
}

const Search:React.FC<FetchProps> = (props) => {
    
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchLanguage, setSearchLanguage] = useState<string>("")

    useEffect(()=>{
        function startFetch(q:string, language:string){
            const BASE_URL:string = "https://newsapi.org/v2/everything?";
            const API_KEY:string = "apiKey=086eca9848b84f83b17643c580c50b64";
            const fetchUrl:string = `${BASE_URL}q=${q}&language=${language}&pageSize=5&${API_KEY}`; //Artikel pro Seite auf 5 begrenzt
            console.log(fetchUrl);
            
    
            fetch(fetchUrl)
                .then(async (resp)=> await resp.json())
                .then(async (data:FetchData)=> {
                    await props.setFetchData(data.articles);
                })
                .catch((err)=> console.error("Fehler beim Fetchen", err))
        }

        startFetch(searchQuery, searchLanguage);

        console.log(searchLanguage, searchQuery);
        
        
    }, [searchQuery, searchLanguage])

function handleSearch(){
    const inputSearch = document.querySelector('#searchInput') as HTMLInputElement;
    const inputLanguage = document.querySelector('#languageInput') as HTMLSelectElement;

    if(inputSearch.value !== "" && inputLanguage.value !==""){
        setSearchQuery(inputSearch.value);
        setSearchLanguage(inputLanguage.value);
    }else{
        console.log("Bitte gib einen Wert in das Suchfeld ein!");
    }
}



    return (
        <section>
            <input type="text" placeholder="search query..." id="searchInput" />
            <select name="" id="languageInput">
                <option selected value="de">german</option>
                <option value="en">english</option>
            </select>
            <button onClick={handleSearch}>Search</button>
            <hr />
        </section>
     );
}
 
export default Search;