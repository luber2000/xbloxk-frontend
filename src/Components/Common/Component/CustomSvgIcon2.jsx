import React from 'react';

const SvgIcon = (props) => {
  const { iconId, ...res } = props;
  return (
    <svg {...res}>
      <use href={`${process.env.REACT_APP_PUBLIC_URL}/svg/${iconId}.svg`}></use>
    </svg>
  );
};

export default SvgIcon;
