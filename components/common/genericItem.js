import Image from 'next/image'
import Grid from "@material-ui/core/Grid";
import style from '../../styles/genericItem.module.sass'

const sizeMapping = {
    "1": 12,
    "2": 6,
    "3": 4,
    "4": 3
}


const TextItem = (props) => {
    return (
        <div>
            {props.text}
        </div>)
}

const PicItem = (props) => {
    return (
        <div style={{ display: "grid", placeItems: "center", margin: "auto" }}>
            <Image width={props.picture.width} height={props.picture.height} src={props.picture.url} alt="Loaded image"></Image>
        </div>)
}

const PicTextItem = (props) => {

    return (<div>
        <picItem {...props}></picItem>
        <textItem {...props}></textItem>
    </div>)
}

const ListItem = (props) => {
    const list = props.list.split("\r\n")
    const listComponents = list.map((element, index) => {
        return (<li key={index}>{element}</li>)
    })
    return <ul> {listComponents}</ul>
}

const SubItem = (props) => {
    return (
        <h2>
            {props.sub}
        </h2>
    )
}


const SubListItem = (props) => {
    return (<div>
        <SubItem {...props}></SubItem>
        <ListItem {...props}></ListItem>
    </div>)
}

const SubPicItem = (props) => {
    return (<div>
        <SubItem {...props}></SubItem>
        <PicItem {...props}></PicItem>
    </div>)
}

const SubTextItem = (props) => {
    return (<div>
        <SubItem {...props}></SubItem>
        <TextItem {...props}></TextItem>
    </div>)
}

export default function GenericItem(props) {

    const types = [{ type: "text", component: TextItem }, { type: "pic", component: PicItem }, { type: "list", component: ListItem }, { type: "sub", component: SubItem }
        , { type: "sub-list", component: SubListItem }, { type: "sub-pic", component: SubPicItem }, { type: "sub-text", component: SubTextItem }, { type: "pic-text", component: PicTextItem }]

    const DisplayItem = types.find(element => element.type == props.type).component
    return (
        <Grid item xs={12} md={sizeMapping[props.widthFormat]}>
            <DisplayItem {...props}></DisplayItem>
        </Grid>)
}

