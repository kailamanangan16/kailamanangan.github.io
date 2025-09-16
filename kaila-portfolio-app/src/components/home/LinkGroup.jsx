import 'bootstrap-icons/font/bootstrap-icons.css';
import LinkItem from './LinkItem.jsx';

function LinkGroup() {
  return (
    <> 
    <div class = "linksGroup">
        <h1>Developer,</h1>
        <h1>Programmer,</h1>
        <h1>Designer,</h1>
        <LinkItem name = "Projects" color = "iconRed" class = "iconImg bi bi-paperclip"/>
        <LinkItem name = "About" color = "iconBlue" class = "iconImg bi bi-info-circle"/>
        <LinkItem name = "Experience" color = "iconGreen" class = "iconImg bi bi-pencil"/>
        <div class = "socialsContainer">
          <LinkItem color = "iconYellow" class = "iconImg bi bi-linkedin"/>
          <LinkItem color = "iconPink" class = "iconImg bi bi-github"/>
          <LinkItem color = "iconYellow" class = "iconImg bi bi-envelope"/>
          <LinkItem color = "iconPink" class = "iconImg bi bi-link-45deg"/>
        </div>
    </div>
    </>
  )
}

export default LinkGroup