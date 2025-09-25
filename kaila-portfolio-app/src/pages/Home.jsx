import ProfileItem from '../components/home/ProfileItem.jsx'
import LinkGroup from '../components/home/LinkGroup.jsx'
import FlowerGroup from '../assets/Flower_Group.png'

function Home() {
  return (
    <>
      <div class = "generalFlexContainer flexRow" style = {{maxHeight: "100%", margin: "50px"}}>
        <img src={FlowerGroup} style = {{position: "relative", transform: "translate(180px, 220px)", width: "175px", height: "175px", marginLeft: "-175px"}} />
        <ProfileItem/>
        <LinkGroup/>
      </div>
    </>
  )
}

export default Home