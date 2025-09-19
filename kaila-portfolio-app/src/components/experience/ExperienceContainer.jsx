function ExperienceContainer(props){
    return (
        <>
            <div class = "generalContainerBorder flexRow jobContainer" style = {{backgroundColor: "#F8E6CE", gap: "1px", justifyContent: "center", alignItems: "center"}}>
                <i class={props.icon} style = {{ fontSize: "50px", color: "#5B1018", width: "10%", height: "auto", alignSelf: "flex-start", paddingTop: "15px", paddingLeft: "20px"}}></i>
                <div class = "flexColumn" style = {{ width: "85%" }}>
                    <h1 style = {{margin: "0", paddingTop: "10px"}}>{props.title}</h1>
                    <h2 style = {{margin: "0"}}><i>{props.company}</i></h2>
                    <p>{props.description}</p>
                </div>

            </div>
        </>
    )
}
export default ExperienceContainer