import icon from '../assets/iconPlaceholder.jpg';
import ProjectItem from '../components/projects/ProjectItem.jsx'
import WindowBar from '../components/general/windowBar.jsx';

function Projects() {
  return ( 
    <>
      <div class = "projectFlexContainer flexColumn">
        <WindowBar color = "#F42C42" title = "Projects"/>
        <ProjectItem icon = {icon} title = "Project Title" languages = "HTML/CSS" link = "https://github.com/kailamanangan16/kailamanangan.github.io" description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
        <ProjectItem icon = {icon} title = "Project Title" languages = "HTML/CSS" link = "https://github.com/kailamanangan16/kailamanangan.github.io" description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
        <ProjectItem icon = {icon} title = "Project Title" languages = "HTML/CSS" link = "https://github.com/kailamanangan16/kailamanangan.github.io" description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
        <ProjectItem icon = {icon} title = "Project Title" languages = "HTML/CSS" link = "https://github.com/kailamanangan16/kailamanangan.github.io" description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
      </div>
    </>
    
  )
}

export default Projects