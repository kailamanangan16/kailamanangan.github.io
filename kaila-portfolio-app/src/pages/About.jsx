import WindowBar from "../components/general/windowBar"
import IconGroup from "../components/about/iconGroup"
import EducationContainer from "../components/about/EducationContainer"
import SkillsContainer from "../components/about/SkillsContainer"
import ResumeDownload from "../components/about/ResumeDownload"

function About() {
  return (
    <>
      <div class = "aboutFlexContainer flexColumn">
        <WindowBar color = "#34A5B8" title = "About Me"/>
        
        <div class = "flexRow" style= {{width: "80%",}}>
          <IconGroup/>
          <ResumeDownload/>
        </div>
        
        <div class = "aboutFlexContainer flexRow">
          <EducationContainer/>
          <SkillsContainer />
        </div>
      </div>
    </>
  )
}

export default About