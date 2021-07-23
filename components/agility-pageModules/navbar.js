import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import NLink from 'next/link'
import {Link} from 'react-scroll'
import styles from '../../styles/Narbar.module.sass'
import Grid from "@material-ui/core/Grid";
import logo from '../../public/logo-oxford.png'
import hamnurger from '../../public/hamburger.png'

export default function Navbar(props) {

    const [navBack, setNavBack] = useState(false);
    const [width, setWidth] = useState(-1);
    const [showHamburger,setShowHamburger] = useState(false);
    function handleWindowSizeChange() {
            setWidth(window.innerWidth);
        }
    useEffect(() => {
            setWidth(window.innerWidth)
            window.addEventListener('resize', handleWindowSizeChange);
            return () => {
                window.removeEventListener('resize', handleWindowSizeChange);
            }
        }, []);

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

    const hamburger = (<Grid item className={styles.hamburgerholder} style={{paddingRight:50}}><Image onClick={()=>setShowHamburger(!showHamburger)} src={hamnurger} width={30} height={30}></Image></Grid>)

    let isMobile = (width <= 768) || (width == -1);
    const dropDown = isMobile ? getNavButtons(props.page.zones.CalvinZone,true) : undefined
    const content = isMobile ? hamburger : getNavButtons(props.page.zones.CalvinZone)

    return(
        <Grid  className={`${styles.navholder} ${(navBack && styles.navcolback)}`} container spacing={2}>
            <Grid item xs={6} md={3}>
                <div style={{display:"grid",placeItems:"center"}}>
                <NLink href="/">
                    <a><Image height={75} width={165} src={logo}></Image></a>
                </NLink>
                </div>
            </Grid>
            <Grid item alignItems="center" justify="flex-end" direction="row" container xs={6} md={9}>
                    {content}
            </Grid>
            {showHamburger && 
            <Grid item alignItems="flex-end" direction="column" container xs={12}>
                {dropDown}
            </Grid>
            }
        </Grid>
    )
}


const getNavButtons = function(headerListing,fullWidth=false){
    const builder = headerListing.map( (element,item) => {//TODO - change the zone name
        if( !(element.moduleName == "GenericHolder" || element.moduleName == "CalvinGenericHolder") ){//CalvinGenericHold is for legacy
            return undefined
        }
        const title = element.item.fields.title
        return(<Grid item xs={fullWidth ? 12: undefined} key={item} justify="flex-end" >
            <Link key={item} to={title.replace(/\s/g,'')} spy={true} smooth={true}>
                <div  className={styles.buttonhook} >
                {title}
                </div>
            </Link>
        </Grid>)
    })
    return builder
}
