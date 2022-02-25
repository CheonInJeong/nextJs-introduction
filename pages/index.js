
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function Home({ results }){

    return (
        <div>
           <Seo title="HOME" />
           {results?.map((movie) => (
                <div key={movie.key}>
                    <h4>{movie.original_title}</h4>
                </div>))}
        </div>
        );
}

//서버에서 진행 됨. only at server side 클라이언트는 볼 수 없음
//화면에 loding하는 것을 보여주기 싫고 데이터가 유효할 때만 보여주고 싶을 때 사용.
export async function getServerSideProps() {
    const {results} = await (await fetch("http://localhost:3000/api/movies")).json();
    return {
        props : {
            results, //props로 전달하게 됨
        }
    }
}