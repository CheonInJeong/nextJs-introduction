
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function Home(){
    const [movies, setMovies] = useState();

    useEffect(()=> {
        (async () => {
            const {results} = await (await fetch("/api/movies")).json();
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