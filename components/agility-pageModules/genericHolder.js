import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import GenericItem from '../common/genericItem'
import style from '../../styles/genericHolder.module.sass'

export default function GenericHolder(props) {

    var initState = undefined
    if (props.module.fields.content.referencename === undefined){
        const dictItems = Object.entries(props.module.fields.content)
        const tempArr = Array.apply(null, Array(dictItems.length)).map(function () {})
        dictItems.forEach( ([key,value]) => {
            tempArr[parseInt(key)] = value.fields
        })
        console.log(tempArr)
        initState = tempArr
    }
    const [data, setData] = useState(initState)
    
    useEffect(() => {
        if ( props.module.fields.content.referencename !== undefined){
            fetch('/api/getContent', {
                headers: new Headers({
                    'refName': props.module.fields.content.referencename
                })
            }) //TODO make fetched for published content
                .then(res => res.json())
                .then((returnData) => {
                    setData(returnData.data)
                })
                .catch(err => console.log("Error when fetching: \n" + err))
        }
    }, []);//Hook for Rest API

    const fields = props.module.fields
    console.log(props.module)
    var items = undefined
    if (data !== undefined) {
        items = data.map((element, index) => {
            return <GenericItem key={index} {...element}></GenericItem>
        })
    }

    const hefLink = (props.module.fields.title === undefined ? "Tilte is undefined*" : (props.module.fields.title).replace(/\s/g, ''))
    return (
        <Grid id={hefLink} className={style.group} style={{width:"100%"}} container direction='row' alignItems="flex-start" justify="center" spacing={6}>
            <Grid item xs={12}>
                <h1>{props.module.fields.title}</h1>
            </Grid>
            {items && items}
        </Grid>
    )

}



GenericHolder.getCustomInitialProps = async ({
    agility,
  channelName,
  languageCode,
}) => {


    const api = agility;

    try {
      // get sitemap...
      let sitemap = await api.getSitemapFlat({
        channelName: channelName,
        languageCode,
      });
  
      // get posts...
      let rawPosts = await api.getContentList({
        referenceName: "home_GenericHolder_GenericCo6DFB00",
        languageCode,
        contentLinkDepth: 2,
        depth: 2,
        take: 50
      });
      console.log(rawPosts)
  
      // resolve dynamic urls
      const dynamicUrls = resolvePostUrls(sitemap, rawPosts.items);
  
      const posts = rawPosts.items.map((post) => {
        // //category
        // const category = post.fields.category?.fields.title || "Uncategorized"
  
        // // date
        // const date = new Date(post.fields.date).toLocaleDateString();
  
        // // url
        // const url = dynamicUrls[post.contentID] || "#";
  
        // // post image src
        // let imageSrc = post.fields.image.url;
  
        // // post image alt
        // let imageAlt = post.fields.image?.label || null;
        
        return post

        // return {
        //   contentID: post.contentID,
        //   title: post.fields.title,
        //   date,
        //   url,
        //   category,
        //   imageSrc,
        //   imageAlt,
        // };
      });
  
      return {
        posts,
      };
    } catch (error) {
      if (console) console.error(error);
    }



}