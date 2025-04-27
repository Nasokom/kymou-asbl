import { FaLink,FaHeart,FaArrowUpRightFromSquare} from "react-icons/fa6";
import { RiArticleFill } from "react-icons/ri";
import { PortableText } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import TitleEffect from "../ux/TitleEffect";
import { urlFor } from "@/utils/sanity/sanity";
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
              <div className="responsive relative w-full h-[60vh]">
                 <Image
                  src={loader}
                  fill
                  alt={value.alt || "Image"}
                  />
              </div>
              :
            <Image
              src={loader}
              width={500}
              height={500}
              alt={value.alt || "Image"}
              className="float-start"
            />
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


      projectLink: ({ children, value }) => {
        return (
          <Link href={'/project/'+value.href.slug.current} className={'text-[--color2] relative font-rec1 relative mr-2 ml-2 hover:underline'} rel="noreferrer noopener">
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
        return(
            <span className="flex w-full">
              <span className="w-[50%]">{children}</span>
              <div className="relative w-[50%] min-h-[300px] h-full">
              <Image src={value.asset.url} className={'float-right'} style={{objectFit:'cover'}} placeholder="blur"  blurDataURL={value.asset.lqip}
                fill
                />
              </div>
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
    <div className={className}>
      <PortableText components={components} value={value} />
    </div>
  );
}
