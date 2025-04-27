import React from 'react';
import { Card, Text } from '@sanity/ui';
import { useClient } from 'sanity'; // ✨ use the studio client
import imageUrlBuilder from '@sanity/image-url';

export const ImageText = (props) => {
  const { value, renderDefault } = props;
  const client = useClient(); // ✨ get the Sanity client for Studio
  const builder = imageUrlBuilder(client);

  const imageUrl = value?.asset?._ref
    ? builder.image(value).width(500).height(500).url()
    : null;

  return (
    <Card padding={4} shadow={1} radius={2} style={{display:'flex', alignItems:'center'}}>
      <Text style={{ color: 'blue', width: '50%' }}>
        {renderDefault(props)}
      </Text>
      <div style={{width:'50%',height:'fit', minHeight:'200px', 
        backgroundImage:`url(${imageUrl})`,objectFit:'scale-down',
        backgroundPosition:'center', /* Center the image */
        backgroundRepeat:'no-repeat', /* Do not repeat the image */
        backgroundSize:'cover' }}>
        
      </div>
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
