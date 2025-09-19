import WindowBar from "../components/general/windowBar"
import IconGroup from "../components/about/iconGroup"
import EducationContainer from "../components/about/EducationContainer"
import SkillsContainer from "../components/about/SkillsContainer"
import ResumeDownload from "../components/about/ResumeDownload"

function About() {
  return (
    <>
      <div class = "generalFlexContainer flexColumn">
        <WindowBar color = "#34A5B8" title = "About Me"/>
        
        <div class = "flexRow" style= {{width: "80%",}}>
          <IconGroup/>
          <ResumeDownload/>
        </div>
        
        <div class = "generalFlexContainer flexRow">
          <EducationContainer/>
          <SkillsContainer />
        </div>

        <div style = {{width: "20vh"}}/>
      </div>
    </>
  )
}

export default About