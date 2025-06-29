'use client'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Settings from '@/components/Settings'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = ({blog}) => {

  const [showNavbar, setShowNavbar] = useState(true);
 // const [lastScrollY, setLastScrollY] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
   const [menu,setMenu] = useState(false)
  const links = [{name:'home',path:'/'},{name:'projets',path:"/project"},{name:"galerie",path:'/gallery'},{name:'blog',path:'/blog'},{name:'contact',path:'/contact'}]

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
    className="fixed top-0 left-0 w-full flex p-2 max-[600px]:p-1 items-center justify-between z-50 max-[800px]:justify-center">

      <div className='flex gap-2 max-[800px]:hidden'>
          <Link href={'/blog-kymou'} className='font-display justify-center gap-2 items-center flex text-2xl'>
          <Image 
            //blurDataURL={datas.logo.asset.metadata.lqip}
            alt="Logo kymou"
            src={'/kymouLogo.svg'} 
            height={50} width={50} 
            className="bg-[--bgColor1] p-1  border-2 border-[--color2] rounded-full"
            />
            </Link>
      </div>

        <div className='max-[800px]:hidden relative flex gap-4 bg-[--bgColor2] font-rec1 items-center uppercase shadow-md p-2 max-w-full max-[600px]:w-full rounded-xl '>

        {links.map((link,i)=>{
          if(link.name == 'blog' && blog.length == 0 ){
              return
          }
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
          <Settings showSettings={showSettings} setShowSettings={setShowSettings} setMenu={setMenu}/>
        
        </div>

{/* Mobile  */}

 <div className='min-[800px]:hidden w-[90vh] justify-between relative flex gap-2 bg-[--bgColor2] items-center shadow-md p-2 max-w-full rounded-xl '>

          <MobileMenu links={links} blog={blog} menu={menu} setMenu={setMenu} setShowSettings={setShowSettings}/>
         
          <p className="font-rec1 text-2xl">Kymou 
            {/* <span className="text-sm">asbl</span> */}
            </p>

            <Settings showSettings={showSettings} setShowSettings={setShowSettings} setMenu={setMenu}/>

        </div>
        
    </motion.div>
  )
};

export default Navbar;

const MobileMenu = ({links,blog,menu,setMenu,setShowSettings})=>{

 


  return (
    <> 
{
  menu ?
  <IoClose onClick={()=>setMenu(!menu)}className={`flex cursor-pointer flex-basis text-4xl m-2 hover:stroke-[--color2]  hover:scale-125 ${menu ? 'stroke-[--color2] scale-115' :''}`}/>
:  <GiHamburgerMenu onClick={()=>{setMenu(!menu),setShowSettings(false)}}className={`flex cursor-pointer flex-basis text-4xl m-2 hover:stroke-[--color2]  hover:scale-125 ${menu ? 'stroke-[--color2] scale-115' :''}`}/>

} 

    {menu &&  
        <div className='absolute w-full top-[110%] bg-[--bgColor2] max-h-[85vh] overflow-scroll left-0 rounded-xl shadow-md p-4 pl-1 pr-1' >

        <ul className='flex flex-col font-rec normal-case gap-8 w-full'>
          
          {links.map((link,i)=>{
          if(link.name == 'blog' && blog.length == 0 ){
              return
          }
            return <Link key={i} href={link.path}  onClick={()=>setMenu(!menu)}
            className={`
              ${usePathname() == link.path || link.path.length > 2 && usePathname().includes(link.path)? "bg-[--color2] text-white" : "hover:outline hover:text-[--color2]"}
              p-4 rounded
              transition
              text-2xl
              uppercase 
              font-rec1 
            `}
            >
              {link.name}
            </Link>
        })}
        </ul>
        </div>
      }
    </>
  )


}

