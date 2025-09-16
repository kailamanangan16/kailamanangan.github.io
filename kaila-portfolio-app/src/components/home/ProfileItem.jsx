import icon from '../../assets/iconPlaceholder.jpg';

function ProfileItem() {
  return (
    <> 
      <div class = "musicCard"> 
          <img src={icon} width = "100%" height = "100%" class = "profilePicture"/>
          <h1 align="center">Kaila Manangan</h1>
          <div class = "musicRow">
            <i class="bi bi-skip-start-fill skipMusicIcon"></i>
            <i class="bi bi-play-circle-fill playMusicIcon"></i>
            <i class="bi bi-skip-end-fill skipMusicIcon"></i>
          </div>
      </div>
    </>
  )
}

export default ProfileItem