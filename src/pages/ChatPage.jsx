import React from 'react'

const ChatPage = () => {
  const user = JSON.parse(localStorage.getItem("user")) || "";

  return (
	<div>Hi, {user.username}</div>
  )
}

export default ChatPage