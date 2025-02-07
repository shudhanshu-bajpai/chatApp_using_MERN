import { useEffect, useRef } from 'react';
import useGetMessage from '../../hooks/useGetMessage';
import MessageSkeleton from '../skeletons/messageSkeleton';
import Message from './Message'
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
  const {messages, loading} = useGetMessage();
  useListenMessages();
  const lastMessageRef = useRef();


  useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

  return (
    <div className='px-4 flex-1 pb-0 overflow-auto'>
      {!loading && messages.length > 0 && messages.map((message) => (
        <div key={message.id} ref={lastMessageRef}>
        <Message key={message.id} message={message} />
    </div>
      ))}

      {loading && [...Array(3)].map((_,idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className='text-center'>Send a message to start the conversation ...</p>
      )}
    </div>
  );
};

export default Messages
