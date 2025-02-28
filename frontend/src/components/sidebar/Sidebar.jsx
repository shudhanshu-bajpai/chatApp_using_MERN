import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = ({ onUserClick }) => {
  return (
    <div className='flex flex-col min-w-20 ml-8 '>
      <SearchInput/>
      <div className="divider px-3 bg-gray-400 rounded h-1"></div>
      <Conversations onUserClick={onUserClick} />
    </div>
  )
}
export default Sidebar

// import React from 'react'
// import Conversations from './Conversations'

// const Sidebar = ({ onUserClick }) => {
//   return (
//     <div className="sidebar">
//       <Conversations onUserClick={onUserClick} />
//     </div>
//   )
// }

// export default Sidebar
