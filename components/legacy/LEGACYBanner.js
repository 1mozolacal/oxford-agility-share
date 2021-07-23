import Image from 'next/image'
import bannerImage from '../../public/union-park-logo.png'

import style from '../../styles/Banner.module.sass'

export default function Banner(){

    return (
    <header className={style.masthead}>
        
        <div style={{display:"grid",placeItems:"center",maxWidth:"800px", margin:"auto"}}>
        <Image width={1200} height={700} src={bannerImage} alt="union park logo" className={style.midpic}></Image>
        </div>
    </header>
    )
}  