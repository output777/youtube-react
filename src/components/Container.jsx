import React from 'react'

export default function Container({children}) {
  return (
    <div className='container mx-auto max-w-screen-lg p-3'>{children}</div>
  )
}
