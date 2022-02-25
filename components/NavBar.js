import Link from "next/link";
import { useRouter } from "next/router";
//Navbar를 생성 할 때 a 태그를 사용 하지 말 것 !
//why ? a tag를 사용하면 페이지 전체가 reload
//replacement : Link!
//but! Link는 클래스나 스타일 적용이 되지 않음 > Link안에 태그 사용으로 대신

export default function NavBar() {
    
    const router = useRouter();
    return (
        <nav>
            <img src="/vercel.svg" />
            <div>
                <Link href="/">
                    <a className={router.pathname === "/" ? "active" : ""}>Home</a>
                </Link>
                <Link href="/about">
                    <a className={router.pathname === "/about" ? "active" : ""}>About</a>
                </Link>
            </div>
                <style jsx>{`
                        nav {
                            display: flex;
                            gap: 10px;
                            flex-direction: column;
                            align-items: center;
                            padding-top: 20px;
                            padding-bottom: 10px;
                            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                                rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                            }
                        img {
                            max-width: 100px;
                            margin-bottom: 5px;
                        }
                        nav a {
                            font-weight: 600;
                            font-size: 18px;
                        }
                        .active {
                            color: tomato;
                        }
                        nav div {
                            display: flex;
                            gap: 10px;
                        }
                `}</style>
        </nav>
  );
}