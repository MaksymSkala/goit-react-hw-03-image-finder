import React from 'react';
import { Audio } from 'react-loader-spinner'
;<Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>

const Spinner = () => (
  <div className="loader">
    <Loader type="Puff" color="#00BFFF" height={80} width={80} />
  </div>
);

export default Spinner;