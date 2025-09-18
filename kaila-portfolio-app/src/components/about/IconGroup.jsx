import icon from '../../assets/iconPlaceholder.jpg';

function IconGroup(){
    return (
        <>
            <div class = "flexRow iconGroupContainer" style={{width: "70%", height: "auto",}}>
                <img src={icon} width = "100%" height = "100%" class = "aboutIcon"/>
                <div class = "flexColumn">
                    <h1 class = "titleText">Kaila Manangan</h1>
                    <p class = "iconDescription">Computer Science B.S.</p>
                    <p class = "iconDescription">Class of Fall 2025</p>
                </div>
            </div>
        </>
    )
}

export default IconGroup