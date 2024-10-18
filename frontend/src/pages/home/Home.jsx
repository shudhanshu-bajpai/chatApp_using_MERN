import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer';
const Home = () => {
  return (
    <div className='flex bg-white w-full pl-1 pt-3 justify-center gap-3'>
      <Sidebar/>
      <MessageContainer />
    </div>
  )
};
export default Home;
