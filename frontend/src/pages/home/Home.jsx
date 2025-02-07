import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'
import ExpandableSidebar from '../../components/sidebar/ExpandableSidebar'

const Home = () => {
  const [showMessages, setShowMessages] = useState(false)

  const handleUserClick = () => {
    setShowMessages(true)
  }

  const handleBackClick = () => {
    setShowMessages(false)
  }

  return (
    <div className='flex text-black bg-gray-300 overflow-hidden w-full p-4 gap-3'>
      <ExpandableSidebar />
      <div className={`flex ${showMessages ? 'hidden' : 'flex'} md:flex`}>
        <Sidebar onUserClick={handleUserClick} />
      </div>
      <div className={`flex ${showMessages ? 'flex' : 'hidden'} md:flex w-screen`}>
        <MessageContainer onBackClick={handleBackClick} className="h-screen"/>
      </div>
    </div>
  )
}

export default Home
