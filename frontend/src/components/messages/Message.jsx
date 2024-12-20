import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt)
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic: selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? 'bg-blue-500': '';


  return (
    <div className={`chat ${chatClassName}`}>
       <div className="chat-image avatar">
        <div className="w-10 rounded-full">
            <img 
            src={profilePic}
            alt="tailwind css chat bubble component" />
        </div>
       </div>
       <div className={`chat-bubble text-white ${bubbleBgColor} text-base`}>{message.message}</div>
       <div className="chat-footer opacity-55 text-xs flex gap-1 items-center text-black">{formattedTime}</div>
    </div>
  )
}

export default Message;
