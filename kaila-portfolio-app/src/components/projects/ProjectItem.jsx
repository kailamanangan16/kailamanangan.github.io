import { Link } from "react-router-dom"

function ProjectItem (props){
    return (
        <>
            <div class = "projectContainer flexRow generalContainerBorder">
                <img src={ props.icon } class = "projectPicture generalContainerBorder"/>
                <div class = "projectDescription">
                    <h1 class = "titleText">{ props.title }</h1>
                    <p class = "languagesText"><i>{ props.languages }</i></p>
                    <p class = "descriptionText"> { props.description } </p>
                    <Link class = "bi bi-link-45deg projectLinkIcon" to = { props.link }/>
                </div>
            </div>
        </>
    )
}

export default ProjectItem