import React from 'react'
import { useClient } from 'sanity'; // ✨ use the studio client
import imageUrlBuilder from '@sanity/image-url';

const ImageRender = ({props}) => {
    const { value, renderDefault } = props;
    const client = useClient(); // ✨ get the Sanity client for Studio
      const builder = imageUrlBuilder(client);
    
      const imageUrl = value?.asset?._ref
        ? builder.image(value).width(500).height(500).url()
        : null;
  return (

        <img
        src={imageUrl}
        width={50}
        height={50}
        alt="Preview"
        style={{ marginTop: '1rem', borderRadius: '8px' }}
    />
  )
}

export default ImageRender

