import { FaLink } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import classNames from 'classnames';
import { PortableText } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import { resolveInnerImgREF } from "../app/utils/actions";
import { urlFor } from "../app/utils/sanity/sanity";
import TitleEffect from "./ux/TitleEffect";

export default function CustomPortableText({
  className,
  value,
}) {

  const components = {
    // types: {
    //   inPhoto: async ({ children, value }) => {
    //     const img = await resolveInnerImgREF(value._ref);
    //     const loader = urlFor(img.image).height(200).width(300).url();

    //     // Envelopper chaque image avec un conteneur ayant la classe `textImg`
    //     return (
    //       <div >
    //         <Image
    //           src={loader}
    //           width={300}
    //           height={200}
    //           className="p-2"
    //           alt={value.alt || "Image"}
    //         />
    //       </div>
    //     );
    //   }
    // },

    block: {
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
      link: ({ children, value }) => {
        return (
          <Link href={value?.href} className={'text-[#2164e9] relative'} rel="noreferrer noopener">
            {children}
            <FaLink className="absolute top-[-10px] right-[-10px]" />
          </Link>
        );
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
