import Link from "next/link"
import graph from "../../assets/svg/graph.svg"
import brush from "../../assets/svg/brush.svg"
import theme from "../../assets/svg/theme.svg"
import settings from "../../assets/svg/settings.svg"
import shield from "../../assets/svg/shield.svg"
import share from "../../assets/svg/share.svg"
import color from "../../assets/svg/color.svg"
import coin from "../../assets/svg/coin.svg"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../context/context"
import Button from "../button"
import { navStyles } from "../styles/navStyles"

const SideNavLinks = () => {
    const { updateAccount, showLoader, shareLink } = useContext(AppContext)
    const [route, setRoute] = useState('')

    useEffect(() => {
        console.log(window.location.pathname)
        setRoute(window.location.pathname)
    }, [route])

    return <div className="border-b pb-5">
        <Link passHref={true} href="/dashboard">
            <p className={route === "/dashboard" ? navStyles.activeNavLink : navStyles.navLink}>
                <img className={navStyles.navLinkIcon} src={graph.src} />
                Dashboard
            </p>
        </Link>
        <Link passHref={true} href="/">
            <p className={route === "/" ? navStyles.activeNavLink : navStyles.navLink}>
                <img className={navStyles.navLinkIcon} src={brush.src} />
                Appearance
            </p>
        </Link>
        <Link passHref={true} href="/themes">
            <p className={route === "/themes" ? navStyles.activeNavLink : navStyles.navLink}>
                <img className={navStyles.navLinkIcon} src={theme.src} />
                Themes
            </p>
        </Link>
        <Link passHref={true} href="/">
            <p className={route === "/settings" ? navStyles.activeNavLink : navStyles.navLink}>
                <img className={navStyles.navLinkIcon} src={settings.src} />
                Settings
            </p>
        </Link>
        <Link passHref={true} href="/">
            <p className={route === "/upgrade" ? navStyles.activeNavLink : navStyles.navLink}>
                <img className={navStyles.navLinkIcon} src={shield.src} />
                Upgrade
            </p>
        </Link>
        <Link passHref={true} href="/">
            <p className={route === "/donate" ? navStyles.activeNavLink : navStyles.navLink}>
                <img className={navStyles.navLinkIcon} src={coin.src} />
                Donate
            </p>
        </Link>
        <p className={navStyles.navLink} onClick={() => shareLink()}>
            <img className={navStyles.navLinkIcon} src={share.src} />
            Share link
        </p>

        <div className="flex items-center mt-3">
            {!showLoader ? <Button label="Save &amp; publish" onPress={() => {
                updateAccount()
            }} /> : <></>}
        </div>
    </div>
}

export default SideNavLinks