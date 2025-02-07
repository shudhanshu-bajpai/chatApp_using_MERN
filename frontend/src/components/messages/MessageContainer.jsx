import { useEffect } from 'react';
import { ArrowLeft, Phone, Video, EllipsisVertical } from 'lucide-react';
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';
import Messages from './Messages';
import MessageInput from './MessageInput';


const MessageContainer = ({ onBackClick, message }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { authUser } = useAuthContext();
  const fromMe = message?.senderId === authUser._id;
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;

  useEffect(() => {
    // Cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <>
      <div className="md:min-w-[450px] flex flex-col flex-1">
        {!selectedConversation ? (
    <div></div>
        ) : (
          <>
            <div className="bg-blue-300 text-black mb-2 rounded-full mr-3 flex items-center">
              <button onClick={onBackClick} className="md:hidden mt-3 mr-4 ml-3 mb-3">
                <ArrowLeft />
              </button>
              <div className="chat-image avatar size-10 flex justify-center items-center pb-2 md:pb-1 md:ml-2">
                <img src={profilePic} alt="Profile" className="rounded-full w-10 h-10" />
              </div>
              <div className="ml-3">
                <p className="text-lg font-semibold">{selectedConversation?.fullName}</p>
                
              </div>
              <div className="ml-auto flex space-x-3 mr-4">
                <Phone className="w-6 h-6 text-gray-600 mr-3" />
                <Video className="w-6 h-6 text-gray-600 mr-3" />
                <EllipsisVertical className="w-6 h-6 text-gray-600 mr-8" />
              </div>
            </div>
            <Messages />
            <MessageInput />
          </>
        )}
      </div>
    </>
  );
};

export default MessageContainer;
