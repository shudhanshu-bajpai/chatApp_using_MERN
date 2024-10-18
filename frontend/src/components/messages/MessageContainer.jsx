import Messages from './Messages'
import MessageInput from './MessageInput';
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
    const noChatSelected  = 0 ;
  return (
    <div className="md:min-w-[450px] flex flex-col mt-1">
        {noChatSelected ? (
            <NoChatSelected/> 
        ) : (
        <>
        <div className="bg-blue-300 text-black px-4 py-2 mb-2 rounded-full mr-3 pl-8">
            <span className="font-xl">To:</span>{"  "}
            <span className="text-gray-00 font-xl">Ayush Mishra</span>
        </div>

        <Messages/>
        <MessageInput/>
        </>
        )}
    </div>
  )
}
// const MessageContainer = () => {
//     return (
//       <div className="md:min-w-[450px] flex flex-col ml-5 mt-1 w-dvw">
//           <>
//           <div className="bg-black px-4 py-2 mb-2 rounded-full mr-3 pl-8">
//               <span className="font-xl">To:</span>{"  "}
//               <span className="text-gray-00 font-xl">Ayush Mishra</span>
//           </div>
  
//           <Messages/>
//           <MessageInput/>
//           </>
//       </div>
//     )
//   }

export default MessageContainer;

const NoChatSelected = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-500 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome 👋 Shudhanshu Bajpai</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center'/>
            </div>
        </div>
    )
}