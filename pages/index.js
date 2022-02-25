
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "62336aa1be29732cf214aac930c041d1";
export default function Home(){
    const [movies, setMovies] = useState();

    useEffect(()=> {
        (async () => {
            const {results} = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)).json();
            console.log(results);
            setMovies(results);
        })();
       
    },[])
    return (
        <div>
           <Seo title="HOME" />
           {!movies && <h4>Loading...</h4>}
           {movies?.map((movie) => (
                <div key={movie.key}>
                    <h4>{movie.original_title}</h4>
                </div>))}
        </div>
        );
}