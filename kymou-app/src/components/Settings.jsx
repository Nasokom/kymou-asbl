'use client'
import React from 'react'
import { useState,useEffect } from 'react'

const Settings = ({toggle}) => {

  const [fontSize,setFontSize ] = useState(20)
  const [lineHeigth,setLineheigth ] = useState(1)
  const [wordSpacing,setWordSpacing ] = useState(0.1)
  const [letterSpacing,setLetterSpacing ] = useState(0.02)

function a(e){
  JSON.stringify(e)
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

//set val to css variable
const x = localStorage.getItem('--text');
  changeRootCss('--text',x+'px')
  setFontSize(x)
//set them to all the state

const h = localStorage.getItem('--hauteur');
  changeRootCss('--hauteur',h+'em')
  setLineheigth(h)

const w = localStorage.getItem('--wordSpace');
  changeRootCss('--wordSpace',w+'em')
  setLineheigth(w)


  const l = localStorage.getItem('--letterSpace');
  changeRootCss('--letterSpace',l+'em')
  setLineheigth(l)

},[])

//Create function to apply localstorage pref and change value

function resetCssVar(){
  const valeurs = [
    {key:'--letterSpace',value:0,unit:'em'},
    {key:'--text',value:30,unit:'px'},
    {key:'--wordSpace',value:0,unit:'em'},
    {key:'--hauteur',value:1,unit:'em'},
  ]

  valeurs.forEach(val =>{
    changeValue(val.key,val.value,val.unit)
  })
}

  return (

    <div className='absolute w-full top-[110%] bg-white max-h-[85vh] overflow-scroll left-0 rounded-xl shadow-md p-4' >
    <div className='flex '>
      <p className='p-4 text-[--text]'>Preferences</p>

    </div>

    <ul className='flex flex-col font-rec normal-case gap-4 w-full text-[--text]'>
        <li className='flex border-t p-4 justify-between items-center'>
            <p>Taille de Lecture</p>
            <div className='flex flex-col justify-center items-center gap-2'>
              <span>{fontSize}px</span>
              <input type='range' min={16} max={55} step={2} value={fontSize} onChange={(e)=>changeValue('--text',e.target.value,'px')} className='bg-[--color1] h-2 rounded-full thumb'/>
            </div>
        </li>
        
           <li className='flex border-t p-4 justify-between items-center'>
            <p>Hauteur de ligne</p>
           <div className='flex flex-col justify-center items-center gap-2'>
              <span>{lineHeigth}</span>
              <input type='range' min={1} max={4} step={0.1} value={lineHeigth} className='bg-[--color1] h-2 rounded-full thumb'
                onChange={(e)=>changeValue('--hauteur',e.target.value,'em')}  
                />
            </div>
        </li>

        <li className='flex border-t p-4 justify-between items-center'>
            <p>espacement des mots</p>
           <div className='flex flex-col justify-center items-center gap-2'>
              <span>{wordSpacing}</span>
              <input type='range' min={0} max={1} step={0.1} className='bg-[--color1] h-2 rounded-full thumb'
              onChange={(e)=>changeValue('--wordSpace',e.target.value,'em')}  
              />
            </div>
        </li>

           <li className='flex border-t p-4 justify-between items-center'>
            <p>espacement des lettres</p>
           <div className='flex flex-col justify-center items-center gap-2'>
             <span>{letterSpacing}</span>
              <input type='range' min={0} max={0.2} step={0.02} className='bg-[--color1] h-2 rounded-full thumb'
              onChange={(e)=>changeValue('--letterSpace',e.target.value,'em')}  
              />
            </div>
        </li>

        <li className='flex border-t p-4 justify-between items-center'>
            <p>Utiliser une font adapter </p>
            <div className='flex flex-col justify-center items-center gap-2'>
              <button className='border-2 h-8 w-20 rounded-full border-[--color3] relative flex items-center'> 
                <div className='h-8 w-8 bg-[--color3] rounded-full'></div>
              </button>
            </div>
        </li>

         <li className='flex border-t p-4 justify-between items-center'>
            <p>Utiliser les parametre par defaults</p>

            <div className='flex flex-col justify-center items-center gap-2'>
              <button className='zigzagsm p-2 text-white font-rec1 rounded text-xl' onClick={()=>resetCssVar()}> 
                Reinitialiser
              </button>
            </div>
        </li>
    </ul>
    </div>

  )
}

export default Settings