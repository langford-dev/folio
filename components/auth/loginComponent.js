import { useRouter } from "next/dist/client/router"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../context/context"
import Button from "../button"
import Loader from "../loader"

import { useSession, signIn, signOut } from 'next-auth/react'

const styles = {
    // main: `w-screen h-screen flex flex-col items-center justify-center`,
    // main: `w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-r from-rose-100 to-teal-100`,
    main: `w-screen h-screen flex flex-col items-center justify-center bg-yellow-300`,
    inputContainer: `flex flex-col mb-5`,
    input: `outline-none w-full border p-2 rounded-xl`,
    label: `mb-2 flex items-center justify-between font-medium text-gray-600`,
    title: `text-3xl sm:text-5xl font-extrabold overflow-hidden`,
    mainInputBox: `p-5 rounded-xl w-11/12 sm:max-w-lg px-5 bg-white shadow-xl`,
    subtext: `-mt-3 mb-10`,
    inputBoxLabel: `text-3xl font-extrabold mb-5`
}

const LoginComponent = () => {
    const { login, setShowLogin, showLoader } = useContext(AppContext)
    const { data: session } = useSession();

    useEffect

    // const [username, setUsername] = useState("")
    // const [password, setPassword] = useState("")
    // const [error, setError] = useState("")

    // if (showLoader) return <Loader />

    return <div className={styles.main}>
        <div className={styles.mainInputBox}>
            <p onClick={login}>Continue with Google</p>
        </div>
    </div>
}

export default LoginComponent
// import Link from 'next/link'
// import { useSession, signIn, signOut } from 'next-auth/react'

// export default function Header() {
//     const { data: session } = useSession();

//     console.log(session)

//     const handleSignin = (e) => {
//         e.preventDefault()
//         signIn()
//     }

//     const handleSignout = (e) => {
//         e.preventDefault()
//         signOut()
//     }

//     return (
//         <div className='header'>
//             <Link href='/'>
//                 <a className='logo'>NextAuth.js</a>
//             </Link>
//             {session && <a href="#" onClick={handleSignout} className="btn-signin">Sign out</a>}
//             {!session && <a href="#" onClick={handleSignin} className="btn-signin">Sign in</a>}
//         </div>
//     )
// }