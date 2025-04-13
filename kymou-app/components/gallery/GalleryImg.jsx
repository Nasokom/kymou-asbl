'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import {motion} from 'framer-motion'
import ModalImg from './ModalImg';

const Gallery = ({ images,marge=true}) => {
  const containerRef = useRef(null);
  const [positions, setPositions] = useState([]);

    const [selectedImg,setSelectedImg] = useState(null);
    const [toggle,setToggle] = useState(false)
  const [containerh,setContainerH] = useState(0);

  function callModal(i){
    setToggle(!toggle)
    setSelectedImg(i)
  }

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const margin = 20;  // Gap between images
    //const baseWidth = 300;  // Fixed base width for all images
    const imagesPerColumn = document.documentElement.clientWidth < 800 ? 2  : 4;  // Number of images per column (adjust as necessary)

    const placedImages = [];
    const columnOffsets = [0, 0, 0, 0];  // Track the current 'top' value for each column

    const baseWidth = (container.clientWidth -margin * (imagesPerColumn-1) )/imagesPerColumn

    for(let i = 0 ; i < images.length ; i += imagesPerColumn){
      if(images[i].dimensions){
        const imgHeigth = Math.round(baseWidth / Math.round(images[i].dimensions.aspectRatio))
        setContainerH( (prev) => prev+= imgHeigth)
      }
    }


    images.forEach((img, index) => {
      let placed = false;

      // Get the aspect ratio from img.dimensions
      const aspectRatio = img.dimensions?.aspectRatio;
      if (!aspectRatio) return;  // Skip if no aspect ratio is provided

      // Calculate the height based on the aspect ratio and the base width
      const width = baseWidth;
      const height = Math.round(baseWidth / aspectRatio);  // Calculate height from aspect ratio

      // Determine which column this image will be placed in
      const col = index % imagesPerColumn;

      // Calculate the 'top' position of the image based on the column's previous height
      const top = columnOffsets[col];

      // Update the 'top' value for this column (so the next image in the same column is placed below)
      columnOffsets[col] = top + height + margin;

      const left = col * (width + margin);  // Position images horizontally based on column

      placedImages.push({ ...img, top, left, width, height });
    });

    setPositions(placedImages);
  }, [images]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full
      ${marge ? 'mt-[100vh]' : ''} cursor-pointer`}
      style={{height: `${containerh}px`}} // Container allows scrolling
    >
      {positions.map((img, index) => (
          <motion.div 
            key={index}
            className='rounded-xl absolute'
            style={{top: img.top,
                left: img.left}}
            initial={{ opacity:0,scale:1,y: "40%"}}
            whileInView={{ opacity:1, scale: 1 ,y:"0%"}}
             //animate={{ opacity: 1, scale: 1 ,y:"0%"}}
             viewport={{ once: true, amount:0.1}}
             transition={{ duration: 0.5, ease: "easeOut",delay:index > 5 ? 0 : '0.'+index*2}}
             onClick={()=>callModal(index)}
            > 
             <Image
               src={img.url}
               className="rounded"
               placeholder="blur"
               blurDataURL={img.lqip}  // Assuming `lqip` (Low-Quality Image Placeholder) is provided in data
               style={{
                 top: img.top,
                 left: img.left,
                 objectFit: 'cover',
               }}
               height={img.height || 'auto'}
               width={img.width}
               alt={`image-${index}`}
             />
            </motion.div>
      ))}


    {toggle && <ModalImg datas={images} setToggle={setToggle} selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
    </div>
  );
};

export default Gallery;
