import { memo, useEffect } from "react"
import "./Model.scss"

const Model = ({ children, closed }) => {
    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [])

    return (
        <div className="model">
            <div
                onClick={() => closed(false)}
                className="model_owerlay"
            >
            </div>
            <div className="model_content">
                {
                    children
                }
            </div>
        </div>
    )
}

export default memo(Model)