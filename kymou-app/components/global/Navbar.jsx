'use client'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const links = [{name:'home',path:'/'},{name:'projets',path:"/project"},{name:"galerie",path:'/gallery'},{name:'contact',path:'/contact'}]

  // const controlNavbar = () => {
  //   if (typeof window !== "undefined") {
  //     const currentScrollY = window.scrollY;

  //     if (currentScrollY > lastScrollY && currentScrollY > 50) {
  //       setShowNavbar(false); // scrolling down
  //     } else {
  //       setShowNavbar(true); // scrolling up
  //     }

  //     setLastScrollY(currentScrollY);
  //   }
  // };

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.addEventListener("scroll", controlNavbar);

  //     return () => {
  //       window.removeEventListener("scroll", controlNavbar);
  //     };
  //   }
  // }, [lastScrollY]);

  return (
    <motion.div 
    initial={{ y: 0 }}
    animate={{ y: showNavbar ? 0 : -100 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="fixed top-0 left-0 w-full flex p-2 max-[600px]:p-1 items-center justify-between z-50">

      <div className='flex gap-2 max-[600px]:hidden'>
          <Link href={'/h1'} className='font-display justify-center gap-2 items-center flex text-2xl'>
          <Image 
            //blurDataURL={datas.logo.asset.metadata.lqip}
            src={'/kymouLogo.svg'} 
            height={50} width={50} 
            className="bg-[--color1] p-1  border-2 border-[--color2] rounded-full"
            />
            </Link>
      </div>

        <div className='flex gap-4 bg-white font-rec1 uppercase shadow-md p-2 max-w-full max-[600px]:w-full rounded-xl '>
        <div className='flex gap-2'>
          <Link href={'/h1'} className='font-display justify-center gap-2 items-center flex text-2xl'>
          <Image 
            //blurDataURL={datas.logo.asset.metadata.lqip}
            src={'/kymouLogo.svg'} 
            height={25} width={25} 
            className="bg-[--color1] p-1  border-2 border-[--color2] rounded-full"
            />
            </Link>
      </div>
        {links.map((link,i)=>{
            return <Link key={i} href={link.path} 
            className={`
              ${usePathname() == link.path || link.path.length > 2 && usePathname().includes(link.path)? "zigzagsm text-white " : "hover:outline hover:text-[--color2] hover:scale-110 "}
              p-1 rounded
              transition
              text-xl
              max-[600px]:text-base
            `}
            >
              {link.name}
            </Link>
        })}
        </div>


    </motion.div>
  )
};

export default Navbar;
