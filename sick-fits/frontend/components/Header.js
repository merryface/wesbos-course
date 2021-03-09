import Link from "next/Link";
import Nav from "./Nav";

export default function Header() {
    return (
        <header>
            <div className="nav">
                <Link href="/">Sick Fits</Link>
            </div>
            <div className="sub-bar">
                <p>Search</p>
            </div>
            <Nav />
        </header>
    )
}