import React from 'react';

import { imageLocations } from '/lib/image-locations';

export const Dots = ({ setIndex }) => {
  const dots = imageLocations.map((_, i) => (
    <Dot index={i} setIndex={setIndex} key={`dot-${i}`} />
  ));

  return <div className="dots">{dots}</div>;
};

export const Dot = ({ index, setIndex }) => (
  <button onClick={() => setIndex(index)}>
    <span>&#183;</span>
  </button>
);
