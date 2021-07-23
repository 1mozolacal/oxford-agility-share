import Image from 'next/image'

export default function Blurp(props) {
    const texts = props.display.items.map( (element,index) =>{
        if (element.type === "text") {
            return  <p key={index}>{element.data}</p>
        } else if (element.type === "picture") {
            return <div style={{display:"grid",placeItems:"center"}}><Image  key={index} src={element.data}></Image></div>
        } else {
            return  <p key={index}>{element.data}</p>
        }
    })
  return (
    <div>
        {props.display.header && <h2>{props.display.header}</h2>}
        {texts}
    </div>
  )
}