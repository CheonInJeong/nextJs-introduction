import NavBar from "../components/NavBar";
import "../styles/globals.css"
export default function App({Component, pageProps}) {
    return <>
        <NavBar/>
        <Component {...pageProps}/>
        <span>hello next.js</span>
        {/* <style jsx global>
            {`
                a {
                    color : blue;
                }
            `}
        </style> */}
        </>;
  
}