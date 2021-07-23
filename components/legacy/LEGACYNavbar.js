import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Narbar.module.sass'
import Grid from "@material-ui/core/Grid";
import logo from '../../public/logo-oxford.png'

export default function Navbar(props) {

    const [navBack, setNavBack] = useState(false);

    useEffect(function mount(){
        function onScroll(){
            if (window.scrollY === 0){
                setNavBack(false)
            } else {
                setNavBack(true)
            }
        }

        window.addEventListener('scroll',onScroll);
        return function unMount(){
            window.removeEventListener('scroll',onScroll);
        };
    });

    const links = props.items.map( (element,item) => {
        return(<Grid key={item}>
            <Link key={item} href={"#"+element.replace(/\s/g,'')}>
                <a  className={styles.buttonhook} >
                {element}
                </a>
            </Link> 
        </Grid>)
    })
    return(
        <Grid  className={`${styles.navholder} ${(navBack && styles.navcolback)}`} container spacing={2}>
            <Grid item xs={6} md={3}>
                <div style={{display:"grid",placeItems:"center"}}>
                <Link href="/">
                    <a><Image height={"100%"} width={"150%"} src={logo}></Image></a>
                </Link>
                </div>
            </Grid>
            <Grid item alignItems="center" justify="flex-end" container xs={6} md={9}>
                    {links}
            </Grid>
        </Grid>
    )
}