import Image from 'next/image'
import bannerImage from '../../public/union-park-logo.png'

import style from '../../styles/Banner.module.sass'

export default function Banner(props){
    const maxImgWidth = 1200
    return (
        <header className={style.masthead} style={{backgroundImage:"url("+props.module.fields.backDrop.url+")"}} >
            <div style={{display:"grid",placeItems:"center",maxWidth:"800px", margin:"auto"}}>
                {props?.module?.fields?.frontDisplay && <Image width={maxImgWidth} height={
                    maxImgWidth * props.module.fields.frontDisplay.height/props.module.fields.frontDisplay.width
                    } src={props.module.fields.frontDisplay.url} alt="union park logo" className={style.midpic}></Image>}
                {! (props?.module?.fields?.frontDisplay) && <Image width={maxImgWidth} height={700} src={bannerImage} alt="union park logo" className={style.midpic}></Image>}
            </div>
        </header>
    )
}  
