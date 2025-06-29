import React from 'react'

const JsonLdInjector = (
    {tags,content,image,_createdAt,_updatedAt,description,slug,title,type} :
    {tags?:string[],content?:string,image?:string, _createdAt?:string,_updatedAt?:string,description?:string,slug:string,title?:string,type?:string}
) => {

    const genBr = slug.split('/').map((path:string,i:number)=>{
            return(
                {
                    "@type": "ListItem",
                    position: i+2,
                    name: i > 0 ? title : path ,
                    item:`https://www.kymou.lu/${i == 0 ? path : slug }`,
                }
            )
    })
console.log(genBr)
  const rawJsonLd = {
  "@context": "https://schema.org",
  "@type": type || "Article",
  headline: title,
  image: image ? image : undefined,
  datePublished: _createdAt,
  dateModified: _updatedAt || _createdAt,
  author: {
    "@type": "Person",
    name: "Katherine Nicol kombia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kymou asbl",
    logo: {
      "@type": "ImageObject",
      url: "https://www.kymou.lu/kymouLogo.svg",
    },
  },
  description: description,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://www.kymou.lu/${slug}`,
  },
    articleBody: content || undefined, // Full content text (if available)
  keywords: tags?.join(', ') || undefined, // Use relevant keywords or tags
  wordCount: content ? content.split(' ').length : undefined,
  inLanguage: "fr", // or "en", "de" depending on language
};
    
const rawBreadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.kymou.lu",
    },
    ...genBr
  ],
}


const breadcrumbLd = JSON.parse(JSON.stringify(rawBreadcrumbLd))
const jsonLd = JSON.parse(JSON.stringify(rawJsonLd))
// console.log('####### RAW JSON LD #########')
// console.log(rawJsonLd)
console.log('####### CLEAN JSON LD #########')
console.log(jsonLd)
// console.log('####### RAW BREADCRUMB LD #########')
// console.log(rawBreadcrumbLd)
console.log('####### CLEAN BREADCRUMB LD #########')
console.log(breadcrumbLd)

  return ( //Inject stringify data
    <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(breadcrumbLd).replace(/</g, '\\u003c'),
            }}
        />

            <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
            }}
        />
    </>
  )
}

export default JsonLdInjector