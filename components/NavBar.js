import Link from "next/link"
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

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
            <a className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}`}>Home</a>
        </Link>
        <Link href="/about">
            <a className={[
                styles.link, 
                router.pathname === "/about" ? styles.active : "",  
                ].join(" ")}>About</a>
        </Link>
    </nav>
}