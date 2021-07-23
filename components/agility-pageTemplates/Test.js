import { ContentZone } from "@agility/nextjs"
import { getModule } from "../agility-pageModules"

export default function TestTemplate(props) {
    return(
        <ContentZone name="CalvinZone" {...props} getModule={getModule}/>
    )
}