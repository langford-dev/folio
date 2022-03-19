import { useState, useContext } from "react"
import { AppContext } from "../context/context"
import ViewTitle from "./viewTitle"

const styles = {
    pageView: `m-auto max-w-screen-xl h-screen pt-20`,
    flexView: `flex h-screen`,
    editingView: `w-1/2 p-10 border-l`,
    preview: `border-l w-1/2 p-10 border-r`,
    inputContainer: `flex flex-col mt-10`,
    input: `border p-2 outline-none mt-2 w-9/12 rounded-md`,
    textArea: `border p-2 outline-none mt-2 w-9/12 rounded-md resize-none h-56`,
    label: ``,
}

const IntroView = () => {
    return <div className={styles.editingView}>
        <ViewTitle title="Intro" subtitle="Tell visitors about you, what you do, and who you are." />

        <div className={styles.inputContainer}>
            <label className={styles.label}>👋 Your name</label>
            <input type="text" className={styles.input} />
        </div>
        <div className={styles.inputContainer}>
            <label className={styles.label}>💡 Title</label>
            <input type="text" className={styles.input} />
        </div>
        <div className={styles.inputContainer}>
            <label className={styles.label}>✏️ About you</label>
            <textarea type="text" className={styles.textArea} />
        </div>
    </div>
}

const SkillsView = () => {
    return <div className={styles.editingView}>
        <ViewTitle title="Your skills" subtitle="Tools, languages, software, and tech you use" />
    </div>
}

const SocialsView = () => {
    return <div className={styles.editingView}>
        <ViewTitle title="Your socials" subtitle="Let visitors connect with you through your socials" />
    </div>
}

const EditView = () => {
    const { previous, next, viewCount } = useContext(AppContext)

    const dynamicViews = () => {
        switch (viewCount) {
            case 0:
                return <IntroView />
                break;

            case 1:
                return <SkillsView />
                break;

            case 2:
                return <SocialsView />
                break;

            default:
                break;
        }
    }

    return <div className={styles.pageView}>
        <div className={styles.flexView}>
            {dynamicViews()}
            <div className={styles.preview}>fsdf</div>
        </div>
    </div>
}

export default EditView