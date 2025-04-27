// ExternalLinkRenderer.js
import React from 'react'
import { LaunchIcon , HeartFilledIcon,LinkIcon} from '@sanity/icons'
import { RiArticleLine,RiHeart2Fill} from "react-icons/ri";
import { Text } from '@sanity/ui';



export const LinkExtern = props => (
  <span style={{ color:'blue'}}>
    {props.renderDefault(props)}
    <a contentEditable={false} href={props.value.href}>
    <LaunchIcon style={{translate:'0 -10px'}}/>
    </a>

  </span>
)

export const LinkProject = props => (
  <span style={{marginLeft:'5px', color:'blue',fill:'blue'}}>
    <RiHeart2Fill style={{marginRight:'3px'}}/>
    <span style={{color:'blue'}}>
    {props.renderDefault(props)}
    </span>
    <a contentEditable={false} href={props.value.href}>
    <LinkIcon style={{translate:'0 -10px'}}/>
    </a>
  </span>
)

export const LinkArticle = props => (
  <span style={{marginLeft:'5px', color:'blue'}}>
    <RiArticleLine style={{marginRight:'3px'}}/>
    {props.renderDefault(props)}
    <a contentEditable={false} href={props.value.href}>
      <LinkIcon style={{translate:'0 -10px'}}/>
    </a>
  </span>
)
