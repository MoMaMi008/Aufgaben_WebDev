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

interface NewsProps{
    fetchData: Articles[]
}

const News:React.FC<NewsProps> = (props) => {
    return ( 
        <section>
            {
                props.fetchData.map((art)=>{
                    return <h1>{art.title}</h1>
                })
            }
        </section>
     );
}
 
export default News;