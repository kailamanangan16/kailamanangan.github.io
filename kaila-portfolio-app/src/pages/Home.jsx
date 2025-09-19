import ProfileItem from '../components/home/ProfileItem.jsx'
import LinkGroup from '../components/home/LinkGroup.jsx'

function Home() {
  return (
    <>
      <div class = "generalFlexContainer flexRow" style = {{maxHeight: "100%", margin: "50px"}}>
        <ProfileItem/>
        <LinkGroup/>
      </div>
    </>
  )
}

export default Home