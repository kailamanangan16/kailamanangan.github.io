import { Link } from "react-router-dom"

function WindowBar(props){
    return (
        <>
            <div class = "windowBar" style = {{ backgroundColor: props.color, }}>
                <p class = "windowBarText">{props.title}</p>
                <div class = "windowBarExitButton" >
                    <Link class = "bi bi-x" to = "/" style = {{color: "#5B1018",}}></Link>
                </div>
            </div>
        </>
    )
    
}

export default WindowBar