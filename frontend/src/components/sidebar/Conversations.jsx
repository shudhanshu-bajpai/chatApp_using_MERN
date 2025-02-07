import React from 'react'
import useGetConversations from "../../hooks/useGetConversations"
import Conversation from "./Conversation"

const Conversations = ({ onUserClick }) => {
  const { loading, conversations } = useGetConversations()

  return (
    <div className=" flex-col flex-1 overflow-auto">
      {conversations.map((conversation, idx) => (
        <div key={conversation._id} onClick={onUserClick}>
          <Conversation
            conversation={conversation}
            lastIdx={idx === conversations.length - 1}
          />
        </div>
      ))}
      {loading ? <span className="loading loading-spinner mx-auto"></span> : null}
    </div>
  )
}

export default Conversations
