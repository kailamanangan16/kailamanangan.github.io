import icon from '../assets/iconPlaceholder.jpg';
import ProjectItem from '../components/projects/ProjectItem.jsx'
import WindowBar from '../components/general/windowBar.jsx';

function Projects() {
  return ( 
    <>
      <div class = "generalFlexContainer flexColumn">
        <WindowBar color = "#F42C42" title = "Projects"/>
        <ProjectItem icon = {icon} title = "Personal Portfolio (this website!)" languages = "HTML, CSS, JavaScript, & React" link = "https://github.com/kailamanangan16/kailamanangan.github.io" description = "Developed and prototyped a portfolio website to showcase my skills, job experience, education, and personal projects."/>
        <ProjectItem icon = {icon} title = "Neko Notebook (Google Play Store App)" languages = "Dart & AndroidStudio" link = "https://play.google.com/store/apps/details?id=com.kmmanangan.neko_notebook&hl=en_US" description = "Developed a mobile app that utilizes the pomodoro study method to assist users, reward users for completing the tasks on their to-do list, and allow users to adopt fictional cat study companions."/>
        <ProjectItem icon = {icon} title = "Item Search RPG (Short Game)" languages = "Unity & C++" link = "https://github.com/kailamanangan16/CS4700Assignment2RPG" description = "Created a program that prompts the player to collect items, dodge enemies, and deliver the items to the strange creature that has stopped by the town. "/>
        <div style = {{width: "20vh"}}/>
      </div>
    </>
    
  )
}

export default Projects