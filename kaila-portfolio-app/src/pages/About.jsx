import WindowBar from "../components/general/windowBar"
import IconGroup from "../components/about/iconGroup"
import EducationContainer from "../components/about/EducationContainer"
import SkillsContainer from "../components/about/SkillsContainer"
import ResumeDownload from "../components/about/ResumeDownload"
import FlowerGroup from '../assets/Flower_Group.png'


function About() {
  return (
    <>
      <div class = "generalFlexContainer flexColumn">
        <WindowBar color = "#34A5B8" title = "About Me"/>
        
        <div class = "flexRow" style= {{width: "80%", gap: "10px", justifyContent: "center", alignItems: "center"}}>
          <IconGroup/>
          <ResumeDownload/>
          <img src={FlowerGroup} style = {{position: "relative", width: "150px", height: "150px",}} />
        </div>
        
        <div class = "generalFlexContainer flexRow">
          <EducationContainer/>
          <SkillsContainer />
        </div>

        <div style = {{height: "5vh"}}/>

      </div>
    </>
  )
}

export default About