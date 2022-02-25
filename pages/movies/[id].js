//[]안에 변수명을 넣으면 동적으로 생성됨
//movies/:id 
//router의 query에서 찾을 수 있음 {id : 12345}
import { useRouter } from "next/router";

export default function Detail() {
    const router = useRouter();
    console.log(router);
    return "detail";
}