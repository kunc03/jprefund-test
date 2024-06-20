import React from 'react';

const Heading = ({ level = 1, children, className }) => {
  const HeadingTag = `h${level}`;

  return <HeadingTag className={className}>{children}</HeadingTag>;
};

export { Heading };
