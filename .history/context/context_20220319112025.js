import { useState } from "react"
import { createContext, useEffect } from "react"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [viewCount, setViewCount] = useState(0)

    const nextView = () => setViewCount(viewCount + 1)
    const prevView = () => setViewCount(viewCount - 1)

    return <AppContext.Provider>
        {children}
    </AppContext.Provider>
}