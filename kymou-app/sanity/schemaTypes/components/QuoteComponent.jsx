import React from 'react'
import { Card, Text } from '@sanity/ui';

const QuoteComponent = (props) => {
    const { value, renderDefault } = props;
  return (
    <span padding={4} shadow={0} radius={0} style={{ alignItems:'center',borderLeft:'2px solid black',margin:'15px 0'}}>
       <span style={{ color: 'blue',fontStyle:'italic'}} contentEditable={true}>
         "{renderDefault(props)}"
       </span>
       <Text style={{ width:'100%',margin:'20px'}}>
         {value.credit}
       </Text>
    </span>
  )
}

export default QuoteComponent