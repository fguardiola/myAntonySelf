import React from 'react';
import { Placeholder } from 'semantic-ui-react'


function ImagePlaceholder(props) {
  return (
    <Placeholder style={{ height: props.height, width: props.width }}>
      <Placeholder.Image />
    </Placeholder>
  );
}

export default ImagePlaceholder;

