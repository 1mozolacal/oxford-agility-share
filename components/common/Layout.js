import { getPageTemplate } from "../agility-pageTemplates";
import { handlePreview } from "@agility/nextjs";
import { useRouter } from "next/router";
import Error from "next/error";

import React, { useEffect } from "react";

// set up handle preview
const isPreview = handlePreview();

function Layout(props) {

  const {
    page,
    sitemapNode,
    dynamicPageItem,
    notFound,
    pageTemplateName,
  } = props;

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  const router = useRouter();
  if (router.isFallback) {
    return <div>loading page...</div>;
  }

  // if page not found, throw 404
  if (notFound === true) {
    console.log("Can't find:" + page)
    return <Error statusCode={404} />;
  }

  const AgilityPageTemplate = getPageTemplate(pageTemplateName); //TODO
  if (dynamicPageItem?.seo?.metaDescription) {
    page.seo.metaDescription = dynamicPageItem.seo.metaDescription;
  }

  return (
    <>
        {isPreview && <div> message=&quot;Preview Mode Render&quot; </div>}
        {!isPreview && (
          <div id="site">
                <AgilityPageTemplate {...props} />
          </div>
        )}
    </>
  );
}

export default Layout;
