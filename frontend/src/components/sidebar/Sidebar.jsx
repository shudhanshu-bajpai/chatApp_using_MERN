import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='flex flex-col'>
      <SearchInput/>
      <div className="divider px-3 bg-gray-400 rounded h-1"></div>
      <Conversations/>

      <LogoutButton/>
    </div>
  )
}
export default Sidebar
