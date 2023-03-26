import React from 'react';

const MultiStepForm = ({className, children, ...props}) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export default MultiStepForm;
