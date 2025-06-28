'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Send } from 'lucide-react'
const initialMessages = [
    { id: 1, sender: 'admin', text: 'Hello! How can we help you today?', time: '09:00' },
    { id: 2, sender: 'customer', text: 'I have an issue with my recent order.', time: '09:00' },
    { id: 3, sender: 'admin', text: 'Can you please provide your order ID?', time: '09:02' },
    { id: 4, sender: 'customer', text: 'Order ID : #12345', time: '09:05' },
]

const Ticket = () => {

    const [messages, setMessages] = useState(initialMessages)
    const [input, setInput] = useState('')
    const messagesEndRef = useRef(null)

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    const handleSend = () => {
        if (input.trim() === '') return
        setMessages([
            ...messages,
            {
                id: messages.length + 1,
                sender: 'customer',
                text: input,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            },
        ])
        setInput('');
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleSend()
    }


    return (
        <div className='ticket-page'>
            <h2 className='block-title'>Support Ticket</h2>
            <div className='ticket-messages'>
                {messages.map(msg => (
                    <div key={msg.id} className={`ticket-message ${msg.sender === 'customer' ? 'customer' : 'admin'}`} >
                        <div className='msg-bubble'>
                            <span> {msg.text} </span>
                            <span className='msg-time'> {msg.time} </span>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div className='ticket-input-row'>
                <input   
                type='text'
                className='ticket-input'
                placeholder='Type your message...'
                value={input}
                onChange={(e)=> setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                />
                <button className='ticket-send-btn' onClick={handleSend} title='send'  >  <Send size={20}/>   </button>
            </div>
        </div>
    )
}

export default Ticket