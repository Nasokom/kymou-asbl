import React from 'react';
import { Card, Text } from '@sanity/ui';
import { useClient } from 'sanity'; // ✨ use the studio client
import imageUrlBuilder from '@sanity/image-url';

export const ImageText = (props) => {
  const { value, renderDefault } = props;
  const client = useClient(); // ✨ get the Sanity client for Studio
  const builder = imageUrlBuilder(client);

  const imageUrl = value?.image?.asset?._ref
    ? builder.image(value.image).width(500).height(500).url()
    : null;

    const float = value.float || 'left'

  return (
    <Card padding={0} shadow={0} radius={2} style={{display:'flex', alignItems:'center',margin:'15px 0'}}>
      <Text style={{ color: 'blue',  }}>
        <img src={imageUrl} width={200} height={200} style={{float:float,margin:'5px', borderRadius:'5px'}}></img>
        {renderDefault(props)}
      </Text>
      {/* <div style={{width:'50%',height:'fit', minHeight:'200px', 
        backgroundImage:`url(${imageUrl})`,objectFit:'scale-down',
        backgroundPosition:'center', 
        backgroundRepeat:'no-repeat', 
        backgroundSize:'cover' }}>
        
      </div> */}
      {/* {imageUrl ? (
        
        <img
          src={imageUrl}
        //   width={500}
        //   height={500}
          fill
          alt="Preview"
          style={{ marginTop: '1rem', borderRadius: '8px' }}
        />
      ) : (
        <Text>No image available</Text>
      )} */}
    </Card>
  );
};

export default ImageText;
