"use client";

import { instance } from "@/app/connect";

const getMile = async (x, y) => {
  console.log(x, y);
  const { data } = await instance.get('/api/getMile',
  {
    params: 
    { 
      x: x,
      y: y
    } 
  });

  return data
}

export { getMile }