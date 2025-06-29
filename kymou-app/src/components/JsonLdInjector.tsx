import React from 'react'

const JsonLdInjector = (
    {tags,content,image,_createdAt,_updatedAt,description,slug,title,type} :
    {tags?:string[],content?:string,image?:string, _createdAt?:string,_updatedAt?:string,description?:string,slug:string,title:string,type?:string}
) => {

    const genBr = slug.split('/').map((path:string,i:number)=>{
            return(
                {
                    "@type": "ListItem",
                    position: i+2,
                    name: path,
                    item:`https://kymou.lu/${i == 0 ? path : slug }`,
                }
            )
    })
console.log(genBr)
  const jsonLd = {
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
      url: "https://kymou.lu/kymouLogo.svg",
    },
  },
  description: description,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://kymou.lu/${slug}`,
  },
};
    
const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://kymou.lu",
    },
    ...genBr
  ],
    articleBody: content || undefined, // Full content text (if available)
  keywords: tags?.join(', ') || undefined, // Use relevant keywords or tags
  wordCount: content ? content.split(' ').length : undefined,
  inLanguage: "fr", // or "en", "de" depending on language
}

console.log(jsonLd)
console.log(JSON.parse(JSON.stringify(breadcrumbLd)))

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