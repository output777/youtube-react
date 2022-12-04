import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { hot } from '../api';
import Item from './Item';

export default function Lists() {
  const {isLoading: hotLoading, data: hotData} = useQuery(["hot"],  hot)
  
  const isLoading = hotLoading;
  useEffect(() => {
    hot();
  }, [])


  if(isLoading) {
    return <p>Loading...</p>
  }

  return (
    <ul className='grid gap-1 mt-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
      {hotData?.items.map((video) => (
        <Item 
          key={video.id} 
          id={video.id} 
          channelTitle={video.snippet.channelTitle}
          publish={video.snippet.publishedAt}
          title={video.snippet.localized.title}
          thumbnails={video.snippet.thumbnails.medium.url}
        />
      ))}
    </ul>
  )
}
