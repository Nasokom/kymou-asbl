import { FaLink,FaHeart,FaArrowUpRightFromSquare} from "react-icons/fa6";
import { RiArticleFill } from "react-icons/ri";
import { PortableText} from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import TitleEffect from "./TitleEffect";
import { urlFor } from "@/sanity/lib/image";

export default function CustomPortableText({
  className,
  value,
}) {

  const components = {
    types: {
      image: async ({ children, value }) => {
        //const img = await resolveInnerImgREF(value._ref);
        const loader = urlFor(value.asset).url();

        // Envelopper chaque image avec un conteneur ayant la classe `textImg`
        return (
          <>
            {value.isFullScreen ?  
              <div className="responsive relative w-full h-[70vh] min-h-[500px] rounded overflow-hidden">
                 <Image
                  src={loader}
                  fill
                  style={{objectFit:'cover'}}
                  alt={value.alt || "Image"}
                  />
              </div>
              :
              <span>
            <Image
              src={loader}
              width={500}
              height={500}
              alt={value.alt || "Image"}
              //className="float-start"
              style={{float:'right'}}
              className="textimg"
              />
              </span>
          }
          </>
        );
      }
    },
    images:{

    },

  list:{
    bullet:({children})=>{
      return(
        <ul style={{listStyle:'inside'}}>
          {children}
        </ul>
      )
    },
    number:({children})=>{
      return(
        <ul style={{listStyle:'number'}}>
          {children}
        </ul>
      )
    }
  },
    block: {
      h2: ({ children }) => {
        return (
          <TitleEffect>{children}</TitleEffect>
        );
      },

      h3: ({ children }) => {
        return (
          <h3 className="font-rec1 text-4xl">{children}</h3> 
        );
      },

      h5: ({ children }) => {
        return (
          <h5 className="mb-2 text-sm font-rec1">{children}</h5>
        );
      },
      h1: ({ children }) => {
        return (
          <h5 className="mb-2 text-7xl font-rec1 w-full mb-12">{children}</h5>
        );
      },
      h4: ({ children }) => {
        return (
          <h5 className="mb-8 mt-8 text-4xl font-rec1 ">{children}</h5>
        );
      },
      p:({children})=>{
        return (<p className="text-7xl">{children}</p>)
      }
    },
    decorators: {
      highlight: ({ children, value }) => {
        return (
          <p className="font-display text-5xl">{children}</p>
        );
      }
    },
    marks: {
      externalLink: ({ children, value }) => {
        return (
          <Link href={value?.href} target="_blank" className={'text-[--color3] font-rec1 relative mr-2 ml-2 hover:underline'} rel="noreferrer noopener">
            {children}
            <span className="relative"> <span className="opacity-0">--</span>
            <FaArrowUpRightFromSquare className="absolute top-[0px] right-[0px]" />
            </span>
          </Link>
        );
      },
      quote:({children,value})=>{
        return(
          <span className="bg-white p-8 bg-[white] flex rounded-xl w-full m-2">
            <span className="border-l-4 border-[--color3] p-4 flex flex-col gap-4 text-[--color3]">
                  <span className="italic">"{children}"</span>
                  <cite className={'w-full text-right'}style={{fontStyle:'normal'}}>{value.credit}</cite>
            </span>
          </span>
        )
      },


      projectLink: ({ children, value }) => {
        return (
          <Link href={'/project/' + value.href?.slug?.current} className={'text-[--color2] relative font-rec1 relative mr-2 ml-2 hover:underline'} rel="noreferrer noopener">
            {children}
            <span className="relative"> <span className="opacity-0">--</span>
            <FaHeart className="absolute top-[0px] right-[0px]" />
            </span>
          </Link>
        );
      },
      articleLink: ({ children, value }) => {
        return (
          <Link href={'/blog/'+value.href.slug.current} className={'text-[--color2] relative  font-rec1 mr-2 ml-2 hover:underline'} rel="noreferrer noopener">
          {children}
          {/* <FaLink className="absolute top-[-7px] right-[-10px]" /> */}
          <span className="relative"> <span className="opacity-0">--</span>
            <RiArticleFill className="absolute top-[0px] right-[0px]" />
            </span>
        </Link>
        );
      },

      inlineicon:({children,value})=>{

        console.log(value)
        return(
            <span className={`flex w-full mt-2 mb-2 gap-2 toggle-float flex items-center ${value.float == 'left' ?' flex-row-reverse ':''}`}>
              <span className="w-full">{children}</span>
              {/* <span className="relative w-[50%] min-w-[200px] min-h-[300px] h-full">
                </span> */}
                <span className="flex flex-col rounded overflow-hidden">
                  <Image src={value.image.url || '/file.svg'} 
                  style={{objectFit:'cover'}}// placeholder="blur"  blurDataURL={value.image.lqip}
                  objectFit="scale-down"
                  width={500}
                  alt="sdfsf"
                  height={500}
                  />
                  <span className="bg-white w-full p-4 text-[--color3] text-[15px]">{value.image.description || value.image.originalFilename }</span>
              </span>
            </span>
        )
      },

      highlight: ({ children, value }) => {
        return (
          <span className="font-display">{children}</span>
        );
      },
      color: ({ children, value }) => {
        return (
          <span style={{ color: value.hex }}>{children}</span>
        );
      }
    }
  };

  return (
    <section className={className}>
      <PortableText components={components} value={value} />
    </section>
  );
}
