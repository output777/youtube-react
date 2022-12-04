import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Item({id, channelTitle, publish, title, thumbnails}) {
  const [lastTime, setLastTime] = useState('')

  useEffect(() => {
    setLastTime(() => elapsedTime(publish));
  }, [])
  
  return (
    <li id={id}>
      <img src={thumbnails} alt='thumbnail' />
      <p className='text-slate-100 h-5 text-ellipsis overflow-hidden whitespace-nowrap'>{title}</p>
      <p className='text-gray-400 text-sm'>{channelTitle}</p>
      <p className='text-gray-400 text-sm'>{lastTime}</p>
    </li>
  )
}

const elapsedTime = (date) => {
  const start = new Date(date);
  const end = new Date();
  const diff = (end - start) / 1000;

  const times = [
    {name: '년', milliSeconds: 60 * 60 * 24 * 365},
    {name: '월', milliSeconds: 60 * 60 * 24 * 30},
    {name: '일', milliSeconds: 60 * 60 * 24},
    {name: '시간', milliSeconds: 60 * 60},
    {name: '분', milliSeconds: 60},
  ];

  for(const value of times) {
    const betweenTime = Math.floor(diff / value.milliSeconds);

    if(betweenTime > 0) {
      return `${betweenTime}${value.name} 전`;
    }
  }
  return '방금 전'
}