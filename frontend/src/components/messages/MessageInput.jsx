import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from '../../hooks/useSendMessage'


const MessageInput = () => {
  const [message, setMessage] = useState("");
  const {loading, sendMessage} = useSendMessage()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage(""); 
  }
  return (
    <form className="px-4 pb-2 pt-5" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="placeholder-gray-500 border text-sm rounded-md w-full bg-white p-2.5 border-blue-400 text-black"
          placeholder="Write a message ..."
          value = {message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading? <div className="loading loading-spinnner"></div> : <BsSend className="mr-4 size-5 text-blue-400" />}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
