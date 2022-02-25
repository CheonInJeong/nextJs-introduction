import Link from "next/link"
import { useRouter } from "next/router";

export default function NavBar() {
    //Navbar를 생성 할 때 a 태그를 사용 하지 말 것 !
    //why ? a tag를 사용하면 페이지 전체가 reload
    //replacement : Link!
    //but! Link는 클래스나 스타일 적용이 되지 않음 > Link안에 태그 사용으로 대신

    const router = useRouter();
    console.log(router);
    return <nav>
        {/* <a href="/">Home</a>
        <a href="/about">About</a> */}
        <Link href="/">
            <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about">{/* join() 은 한 배열을 다른 한 문자열로 바꾸는 방법*/}
            <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
        <style jsx>{`
            nav {
                background-color : tomato;
            }
            a {
                text-decoration : none;
            }
            .active {
                color : white;
            }
        `}</style>
    </nav>
}