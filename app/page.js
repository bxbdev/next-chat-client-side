'use client'
import io from 'socket.io-client'
import { useEffect, useState } from 'react'
const url = "https://server.seekdecor.online"
export default function Home() {
  const [socket, setSocket] = useState(null)
  const [userId, setUserId] = useState(null)
  const [room, setRoom] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [isJoined, setJoined] = useState(false)

  const _socket = io(url)
  useEffect(() => {

    _socket.on('connect', () => {
      setUserId(_socket.id)
    })

    _socket.on("receive_message", (data) => {
      setMessages((prev) => [
        ...prev,
        {userId: data.userId, message: data.message}
      ])
    })

    _socket.on('connect_error', (error) => {
      console.error('Connected error: ', error)
    })

    _socket.on('disconnect', () => {
      console.log('Disconnected')
    })

    setSocket(_socket)

    return () => {
      if (socket) {
        _socket.disconnect()
      }
    }

  }, [])

  const sendMessage = () => {
    setMessage("")
    setMessages(( prev ) => [
      ...prev,
      {userId, message}
    ] )
    socket.emit('send_message',  {room, userId, message })
  }

  const joinRoom = () => {
    const message = `welcome ${userId} joined`
    socket.emit('join_room', room)
    socket.emit('send_message', {room, userId: "system", message})
    setJoined(true)
    setMessages(( prev ) => [
      ...prev,
      {userId: "system", message,}
    ])
  }

  const leaveRoom = () => {
    setJoined(false)
    setRoom("")
    setMessages("")
    setMessage("")
    socket.emit("leave_room", room)
    socket.emit("send_message", {room, userId: "system", message: `${userId} left`})
  }

  return (
    <main className="grid place-center py-10">
      <h2 className="text-2xl text-center">{isJoined ? `room ${room} `: "Enter a room number"}</h2>
      <div className="grid gap-3 max-w-3xl m-auto py-5">
      {isJoined && (
          <div className="flex">
            <input className="border border-gray-500 p-4" type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button className="bg-blue-600 text-white py-2 px-5" onClick={sendMessage}>Send Message</button>
          </div>
        )}
        <div className="flex">
         {isJoined ?
          (
            <button className="bg-blue-600 text-white py-2 px-5" onClick={leaveRoom}>Leave Room</button>
          )
         : (
            <>
              <input className="border border-gray-500 p-4" type="text" value={room} onChange={(e) => setRoom(e.target.value)} />
              <button className="bg-blue-600 text-white py-2 px-5" onClick={joinRoom}>Join Room</button>
            </>
          )
        }
        </div>
      </div>
      <div className="message p-10">
        {isJoined && messages.map(({userId, message}, i) => (
          <div key={i} className="flex">
            {userId === "system" ? (<div>{message}</div>) : (<div>{userId}: {message}</div>)}
          </div>
        ) )}
      </div>
    </main>
  )
}
