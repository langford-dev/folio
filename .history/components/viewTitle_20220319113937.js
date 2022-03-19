import { useContext } from "react"
import { AppContext } from "../context/context"

const styles = {
    title: `text-3xl font-bold`,
    textButton: `text-blue-600 cursor-pointer select-none`,
    pageTitleView: `flex items-center justify-between`,
}

const ViewTitle = ({ title, subtitle }) => {
    const { previous, next, viewCount, maxViewCount } = useContext(AppContext)

    return <div>
        <div className={styles.pageTitleView}>
            <p className={styles.title}>{title}</p>
            <div className="flex">
                {
                    viewCount > 0 ? <div className="flex">
                        <p className={styles.textButton} onClick={() => previous()}>&larr; Previous</p>
                        <div className="mx-7" />
                    </div> : <div></div>
                }

                {
                    viewCount < maxViewCount ? <div className="flex" : <div></div>
                }
            </div>
        </div>
        <p className="mt-3 mb-5">{subtitle}</p>
    </div>
}

export default ViewTitle