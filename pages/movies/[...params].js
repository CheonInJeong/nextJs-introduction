//[]안에 변수명을 넣으면 동적으로 생성됨
//movies/:id 
//router의 query에서 찾을 수 있음 {id : 12345}
import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ params }) {

    const router = useRouter();
    //const [title, id] = router.query.params || [];
    const [title, id] = params || [];
    return (
        <div>
            <Seo title={title}/>
            <h4>{title || "Loading..."}</h4>
        </div>
    );
}

export function getServerSideProps({params:{params}}) { //context를 받음
    return {
        props : {
            params
        },
    }
}