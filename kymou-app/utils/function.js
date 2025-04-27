export  const dateFormat = (data) => {
    const date = new Date(data)
    const day = date.getDay()
    const month = date.getMonth()
    const year = date.getFullYear()

    return day + '-'+month+'-'+year
  }

  export const  readingTime = (data) =>{
    if(!data){
        return 0
    }
    const text =  data.filter((block) => block._type === "block" && Array.isArray(block.children))
      .flatMap((block) => block.children.map((child) => child.text))
      .join(" ") || "";
        const wordsPerMinute = 150 // Average reading speed of an adult
        const words = text.split(/\s+/).length // Split by whitespace and count words
        const minutes = Math.ceil(words / wordsPerMinute)
        return minutes
     }