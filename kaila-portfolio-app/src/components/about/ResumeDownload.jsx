import Resume from '../../assets/KailaMananganResume.pdf';

function ResumeDownload(){
    return (
        <>
            <div class = "flexRow resumeDownloadContainer">
                <i class="bi bi-download"></i>
                <a style = {{color: "#5B1018",}} href = {Resume} download><u>Download Resume</u></a>
            </div>
        </>
    )
}

export default ResumeDownload