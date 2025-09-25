import icon from '../assets/iconPlaceholder.jpg';
import NekoNotebookIcon from '../assets/NekoNotebook_App_Icon.png'
import PortfolioIcon from '../assets/Portfolio_Icon.png'
import RPGIcon from '../assets/ItemRPG_Icon.png'

import ProjectItem from '../components/projects/ProjectItem.jsx'
import WindowBar from '../components/general/windowBar.jsx';
import FlowerGroup from '../assets/Flower_Group.png'

function Projects() {
  return ( 
    <>
        <div class = "generalFlexContainer flexColumn">
          <WindowBar color = "#F42C42" title = "Projects"/>
          <img src={FlowerGroup} style = {{position: "relative", transform: "translate(500px, 175px)", width: "175px", height: "175px", marginTop: "-220px"}} />
          <ProjectItem icon = {PortfolioIcon} title = "Personal Portfolio (this website!)" languages = "HTML, CSS, JavaScript, & React" link = "https://github.com/kailamanangan16/kailamanangan.github.io" description = "Developed and prototyped a portfolio website to showcase my skills, job experience, education, and personal projects."/>
          <ProjectItem icon = {NekoNotebookIcon} title = "Neko Notebook (Google Play Store App)" languages = "Dart & AndroidStudio" link = "https://play.google.com/store/apps/details?id=com.kmmanangan.neko_notebook&hl=en_US" description = "Developed a mobile app that utilizes the pomodoro study method to assist users, reward users for completing the tasks on their to-do list, and allow users to adopt fictional cat study companions."/>
          <ProjectItem icon = {RPGIcon} title = "Item Search RPG (Short Game)" languages = "Unity & C++" link = "https://github.com/kailamanangan16/CS4700Assignment2RPG" description = "Created a program that prompts the player to collect items, dodge enemies, and deliver the items to the strange creature that has stopped by the town. "/>
          <img src={FlowerGroup} style = {{position: "relative", transform: "translate(-480px, -175px)", width: "175px", height: "175px", marginBottom: "-200px"}} />
          <div style = {{height: "5vh"}}/>
        </div>
      
    </>
    
  )
}

export default Projects