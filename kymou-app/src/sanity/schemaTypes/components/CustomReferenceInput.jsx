import React from 'react';
import { ReferenceInput } from 'part:@sanity/form-builder/input/reference';

// Custom input to render reference field in a "read-only" way
const CustomReferenceInput = React.forwardRef((props, ref) => {
  return (
    <div>
      {/* Render the reference field as read-only */}
      <ReferenceInput
        {...props}
        readOnly
        ref={ref}
      />
    </div>
  );
});

export default CustomReferenceInput;
