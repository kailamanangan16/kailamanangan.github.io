import WindowBar from "../components/general/windowBar"
import ExperienceContainer from "../components/experience/ExperienceContainer"
import FlowerGroup from '../assets/Flower_Group.png'

function Experience() {
  return (
    <>
      <div class = "flexColumn generalFlexContainer">
        <WindowBar color = "#23B181" title = "About Me"/>
        <div class = "flexColumn" style = {{width: "90%", gap: "30px"}}>
          <ExperienceContainer icon = "bi bi-kanban" title = "Projects & Operations Supervisor" company = "Associated Students Inc. (January 2024-current)" description = "Managed marketing projects with constant communication and collaboration to ensure completion of the project and effective execution of the organization’s marketing within four to six weeks of receiving the project from a client. Supervised and assisted a team of Projects and Operations Assistants through effective collaboration, consistent enforcement of workplace expectations, and improved training materials that would reduce the number of overdue projects." />
          <ExperienceContainer icon = "bi bi-briefcase" title = "Certified Scrum Master" company = "Scrum Alliance (Expires: 12/30/2026)" />
          <ExperienceContainer icon = "bi bi-code-slash" title = "Code Coach" company = "theCoderSchool (October 2021 - January 2025)" description = "Developed custom curriculums for students based on their skills, interests, and programming style that increased understanding of essential computer science skills within the span of a few weeks."/>
          <ExperienceContainer icon = "bi bi-beaker" title = "STEM Summer Camp Assistant" company = "California State University San Marcos (June 2023)" description = "Assisted staff and volunteers through various STEM related activities by guiding students through professional discussions, lab assignments, and presentations."/>
          <ExperienceContainer icon = "bi bi-plus-slash-minus" title = "Tutor" company = "Kumon Math and Reading Center (July 2019 - March 2020)" description = "Efficiently guided elementary school children through math and reading problems. Helped children develop independence and gain the ability to be proactive individuals."/>
        </div>

        <div style = {{height: "5vh"}}/>

      </div>
      
    </>
  )
}

export default Experience