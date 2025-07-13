'use client'
import React from 'react'
import { TbSettings } from "react-icons/tb";
import { useState,useEffect } from 'react'
import { IoClose } from 'react-icons/io5';


const Settings = ({showSettings,setShowSettings,setMenu}) => {
  const [fontSize,setFontSize ] = useState(16)
  const [lineHeigth,setLineheigth ] = useState(1)
  const [wordSpacing,setWordSpacing ] = useState(0.1)
  const [letterSpacing,setLetterSpacing ] = useState(0.02)
  const [theme,setTheme] = useState('system')

function a(e){
  JSON.stringify(e)
}

function changeTheme(val){
  setTheme(val)
  localStorage.setItem("theme",val)
  document.documentElement.setAttribute("data-theme", val) 
}


//Function to change css variable
function changeRootCss(key,value){
  const r = document.querySelector(':root');
  //const rs = getComputedStyle(r);
  r.style.setProperty(key,value)
}

function changeValue(key,val,unit){
switch(key){
  case '--text': setFontSize(val)
      break;
  case '--hauteur': setLineheigth(val)
      break;
  case '--wordSpace': setWordSpacing(val)
      break;
  case '--letterSpace': setLetterSpacing(val)
      break;
}
  changeRootCss(key,val+unit)
  localStorage.setItem(key, val);
}

useEffect(()=>{
//Load the localstorage value

//Theme
const t = localStorage.getItem("theme")
changeTheme(t)


//set val to css variable
const x = localStorage.getItem('--text');
changeRootCss('--text',x+'px')
if(x){
  setFontSize(x)
}
//set them to all the state
const h = localStorage.getItem('--hauteur');
if(h){
  changeRootCss('--hauteur',h+'em')
  setLineheigth(h)
}

const w = localStorage.getItem('--wordSpace');
if(w){
  changeRootCss('--wordSpace',w+'em')
  setLineheigth(w)
}


  const l = localStorage.getItem('--letterSpace');
  if(l){
    changeRootCss('--letterSpace',l+'em')
    setLineheigth(l)
  }

},[])

//Create function to apply localstorage pref and change value

function resetCssVar(){
  const valeurs = [
    {key:'--letterSpace',value:0,unit:'em'},
    {key:'--text',value:16,unit:'px'},
    {key:'--wordSpace',value:0,unit:'em'},
    {key:'--hauteur',value:1,unit:'em'},
  ]

  valeurs.forEach(val =>{
    changeValue(val.key,val.value,val.unit)
  })
}

  return (
<>
    { 
      showSettings ? 
      <button aria-label="Fermer les reglages" onClick={()=>setShowSettings(!showSettings)} >
        <IoClose  className={`cursor-pointer text-4xl m-2 hover:scale-125`}/>
      </button>
      :
     <>
      <button aria-label="Ouvrir les reglages" onClick={()=>{setShowSettings(!showSettings),setMenu(false)}} >
        <TbSettings className={`flex cursor-pointer flex-basis text-4xl m-2 hover:stroke-[--color2]  hover:scale-125 ${showSettings ? 'stroke-[--color2] scale-115' :''}`}/>
      </button>
     </>
    }

{showSettings && <>

    <div className='fixed w-[100vw] h-[100vh] top-0 left-0' onClick={()=>setShowSettings(false)}></div>

    <div className='absolute w-full top-[110%] bg-[--bgColor2] max-h-[85vh] overflow-scroll left-0 rounded-xl shadow-md p-4' >
    <div className='flex p-4 text-2xl justify-center items-center w-full '>
      <p className='text-2xl'>Preferences</p>
    
    </div>

    <ul className='flex flex-col font-rec normal-case gap-4 w-full '>

      <li className='flex border-t p-4 justify-between items-center'>
            <p>Theme du siteweb</p>
            <div className='flex flex-col justify-center items-center gap-2'>
              {/* max:22 = optimal */}
              <div className='flex gap-2 bg-[--bgColor1] rounded p-2'>
                <button aria-label="Mettre mode nuit" onClick={()=>changeTheme('light')} value={'light'} className={`p-1 ${theme == 'light' ? 'outline ':''}`}>light</button>
                <button aria-label="Mettre mode system" onClick={()=>changeTheme('system')} value={''} className={`p-1 ${theme == 'system' || theme == undefined ? 'outline ':''}`}>system</button>
                <button aria-label="Mettre mode jour" onClick={()=>changeTheme('dark')}value={'dark'} className={`p-1 ${theme == 'dark' ? 'outline' : ''}`}>dark</button>
              </div> 
            </div>
        </li>




        <li className='flex border-t p-4 justify-between items-center'>
            <p>Taille de Lecture</p>
            <div className='flex flex-col justify-center items-center gap-2'>
              <span>{fontSize}px</span>
              {/* max:22 = optimal */}
              <input type='range' min={12} max={25} step={1} value={fontSize} onChange={(e)=>changeValue('--text',e.target.value,'px')} className='bg-[--bgColor1] h-2 rounded-full thumb'/>
            </div>
        </li>
        
           <li className='flex border-t p-4 justify-between items-center'>
            <p>Hauteur de ligne</p>
           <div className='flex flex-col justify-center items-center gap-2'>
              <span>{lineHeigth}</span>
              <input type='range' min={1} max={2} step={0.1} value={lineHeigth} className='bg-[--bgColor1] h-2 rounded-full thumb'
                onChange={(e)=>changeValue('--hauteur',e.target.value,'em')}  
                />
            </div>
        </li>

        <li className='flex border-t p-4 justify-between items-center'>
            <p>espacement des mots</p>
           <div className='flex flex-col justify-center items-center gap-2'>
              <span>{wordSpacing}</span>
              <input type='range' min={0} max={1} step={0.1} value={wordSpacing} className='bg-[--bgColor1] h-2 rounded-full thumb'
              onChange={(e)=>changeValue('--wordSpace',e.target.value,'em')}  
              />
            </div>
        </li>

           <li className='flex border-t p-4 justify-between items-center'>
            <p>espacement des lettres</p>
           <div className='flex flex-col justify-center items-center gap-2'>
             <span>{letterSpacing}</span>
              <input type='range' min={0} max={0.2} step={0.02} value={letterSpacing} className='bg-[--bgColor1] h-2 rounded-full thumb'
              onChange={(e)=>changeValue('--letterSpace',e.target.value,'em')}  
              />
            </div>
        </li>
  

         <li className='flex border-t p-4 justify-between items-center'>
            <p>Utiliser les parametre par defaults</p>

            <div className='flex flex-col justify-center items-center gap-2'>
              <button aria-label="Reinitialiser reglages" className='zigzagsm p-2 text-white font-rec1 rounded text-xl' onClick={()=>resetCssVar()}> 
                Reinitialiser
              </button>
            </div>
        </li>
    </ul>
    </div>
    </>
  }
</>
  )
}

export default Settings