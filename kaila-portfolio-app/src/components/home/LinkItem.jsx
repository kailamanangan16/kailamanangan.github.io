import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom"
function LinkItem(props) {
  return (
    <> 
      <Link to = {props.link}>
        <div class = "linkItem">
          <div class = {props.color}>
            <i class = {props.class}></i>
          </div>
          <h1>{props.name}</h1>
        </div>
      </Link>
    </>
  )
}

export default LinkItem