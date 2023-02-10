import React from 'react';
import { Circles } from 'react-loader-spinner';

export default function Loader() {
  return (
    <Circles
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="circles-loading"
      wrapperStyle={{ margin: '30px auto' }}
      wrapperClass=""
      visible={true}
    />
  );
}
