import { Link } from "react-router-dom"

function ResumeDownload(){
    return (
        <>
            <div class = "flexRow resumeDownloadContainer">
                <i class="bi bi-download"></i>
                <Link style = {{color: "#5B1018",}}><u>Download Resume</u></Link>
            </div>
        </>
    )
}

export default ResumeDownload