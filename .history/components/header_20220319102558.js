import Link from "next/link"
import Logo from "./logo"

const styles = {
    header: ``,
    headerWrapper: ``,
    button: ``,
    nav: ``,
    navLink: `mr-3 text-blue-600 hover:text-blue-500`,
}

const Header = () => {
    return <header className="border-b h-16 bg-white">
        <div className="m-auto max-w-screen-xl h-full flex items-center justify-between">
            <Logo />
            <nav className={styles.}>
                <Link passHref={true} href="/"><p className={styles.navLink}>Dashboard</p></Link>
                <Link passHref={true} href="/"><p className={styles.navLink}>Dashboard</p></Link>
                <Link passHref={true} href="/"><p className={styles.navLink}>Dashboard</p></Link>
                <Link passHref={true} href="/"><p className={styles.navLink}>Dashboard</p></Link>
            </nav>
            <div className="bg bg-blue-600 text-white px-5 py-2 rounded-md cursor-pointer">Publish</div>
        </div>
    </header>
}

export default Header