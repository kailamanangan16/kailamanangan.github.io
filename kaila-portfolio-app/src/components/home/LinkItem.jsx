import 'bootstrap-icons/font/bootstrap-icons.css';

function LinkItem(props) {
  return (
    <> 
      <a href="https://www.w3schools.com/">
        <div class = "linkItem">
          <div class = {props.color}>
            <i class = {props.class}></i>
          </div>
          <h1>{props.name}</h1>
        </div>
      </a>
    </>
  )
}

export default LinkItem