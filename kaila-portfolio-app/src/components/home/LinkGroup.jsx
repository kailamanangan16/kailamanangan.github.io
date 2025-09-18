import 'bootstrap-icons/font/bootstrap-icons.css';
import LinkItem from './LinkItem.jsx';

function LinkGroup() {
  return (
    <> 
    <div class = "linksGroup flexColumn">
        <h1>Developer,</h1>
        <h1>Programmer,</h1>
        <h1>Designer,</h1>
        <LinkItem name = "Projects" color = "iconRed" class = "iconImg bi bi-paperclip" link = "/projects"/>
        <LinkItem name = "About" color = "iconBlue" class = "iconImg bi bi-info-circle" link = "/about"/>
        <LinkItem name = "Experience" color = "iconGreen" class = "iconImg bi bi-pencil" link = "/experience"/>
        <div class = "socialsContainer flexRow">
          <LinkItem color = "iconYellow" class = "iconImg bi bi-linkedin" link = "https://linkedin.com/in/kaila-manangan-81898628b"/>
          <LinkItem color = "iconPink" class = "iconImg bi bi-github" link = "https://github.com/kailamanangan16"/>
          <LinkItem color = "iconYellow" class = "iconImg bi bi-envelope" link = "mailto:kailamanangan2021@gmail.com"/>
          <LinkItem color = "iconPink" class = "iconImg bi bi-link-45deg" link = "https://cpp.joinhandshake.com/profiles/c239fe"/>
        </div>
    </div>
    </>
  )
}

export default LinkGroup