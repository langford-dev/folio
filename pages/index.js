import { useContext } from "react";
import LoginComponent from "../components/auth/loginComponent";
import SignupComponent from "../components/auth/signupComponent";
import Header from "../components/header";
import { AppContext } from "../context/context";

const styles = {
  title: `text-3xl font-bold mb-3`,
}

export default function Home() {
  const { isAuthenticated, showLogin } = useContext(AppContext)

  if (!isAuthenticated && showLogin) return <LoginComponent />
  if (!isAuthenticated && !showLogin) return <SignupComponent />

  else return <div>
    <Header />
    <div className='mt-20 p-10 max-w-screen-xl m-auto border border-t-0 bg-white'>
      <p className={styles.title}>Dashboard</p>
      <p>View your statistics, clicks and engagement</p>
    </div>
  </div>
}