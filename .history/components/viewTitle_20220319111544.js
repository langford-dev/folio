const ViewTitle = ({ title, subtitle, maxViews, minViews, next, prev }) => {
    return <div>
        <div className={styles.pageTitleView}>
            <p className={styles.title}>{ title}</p>
            <p className={styles.textButton}>Next &rarr;</p>
        </div>
        <p className="mt-3 mb-5">{ }</p>
    </div>
}

export default ViewTitle