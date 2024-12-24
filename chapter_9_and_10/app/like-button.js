// This is called use client declerative: it makes this component render in the client side
'use client';

import { useState } from 'react'; 

export default function LikeButton() {
  
  const [likes, setLikes] = useState(0)

  function handleClick() {
    setLikes(likes + 1)
  }
  return <button onClick={handleClick}>Like ({likes})</button>;

}
