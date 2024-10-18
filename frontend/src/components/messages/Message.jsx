const Message = () => {
  return (
    <div className="chat chat-end">
       <div className="chat-image avatar">
        <div className="w-10 rounded-full">
            <img src={
                "https://avatar.iran.liara.run/public/boy?username=%27sbb%27"
            } alt="tailwind css chat bubble component" />
        </div>
       </div>
       <div className={'chat-bubble text-white bg-blue-500 text-base'}>Hi! What is upp?</div>
       <div className="chat-footer opacity-55 text-xs flex gap-1 items-center text-black">12:42</div>
    </div>
  )
}

export default Message;
