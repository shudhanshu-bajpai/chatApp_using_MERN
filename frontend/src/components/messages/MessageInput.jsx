import {BsSend} from 'react-icons/bs';
const MessageInput = () => {
  return (
    <form action="" className="px-4 my-3">
        <div className="w-full relative">
            <input type="text" className="border text-sm rounded-full w-full bg-white p-2.5 border-blue-400 text-black" placeholder="Send a message"/>
            <button type='submit' className="absolute inset-y-0 end-0 flex items-center pe-3">
                <BsSend className='mr-4 size-5 text-blue-400'/>
            </button>

            
        </div>
    </form>
  )
}

export default MessageInput
