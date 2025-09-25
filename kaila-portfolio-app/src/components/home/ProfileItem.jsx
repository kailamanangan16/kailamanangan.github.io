import icon from '../../assets/FlowerProfilePicture.jpg';
import ProgressBar from '../../assets/Progress_Bar.png'

function ProfileItem() {
  return (
    <> 
      <div class = "musicCard flexColumn generalContainerBorder"> 
          <img src={icon} width = "100%" height = "100%" class = "profilePicture"/>
          <h1 align="center">Kaila Manangan</h1>
          <div class = "musicRow flexRow">
            <i class="bi bi-skip-start-fill skipMusicIcon"></i>
            <i class="bi bi-play-circle-fill playMusicIcon"></i>
            <i class="bi bi-skip-end-fill skipMusicIcon"></i>
          </div>
          <img src={ProgressBar} width = "60%" height = "auto"/>
      </div>
    </>
  )
}

export default ProfileItem