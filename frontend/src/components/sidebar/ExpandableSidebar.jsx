// import { useState } from 'react';
// import { Menu,CircleUserRound, X, Users, Settings, HelpCircle } from 'lucide-react'
// import PropTypes from 'prop-types'
// import {Link} from "react-router-dom" ;

// const menuItems = [
//   { title: 'My Account', icon: CircleUserRound},
//   { title: 'Contacts', icon: Users },
//   { title: 'Settings', icon: Settings },
//   { title: 'Help', icon: HelpCircle },
// ]

// export default function ExpandableSidebar() {
//   const [isExpanded, setIsExpanded] = useState(false)

//   return (
//     <div 
//       className={`top-3 left-1 h-full bg- transition-all duration-300 ease-in-out absolute  ${isExpanded ? "w-60 absolute" : "w-16"}`}
//     >
//       <button
//         onClick={() => setIsExpanded(!isExpanded)}
//         className="absolute top-2 p-2"
//       >
//         {isExpanded ? <X /> : <Menu />}
//       </button>
//       <ul className="mt-12">
//         {menuItems.map((item, index) => (
//           <li key={index} className="flex items-center p-2">
//             {item.title === 'My Account' ? (
//               <Link to={"/account"} className="flex items-center">
//                 <item.icon className="mr-2" />
//                 {isExpanded && <span>{item.title}</span>}
//               </Link>
//             ) : (
//               <>
//                 <item.icon className="mr-2" />
//                 {isExpanded && <span>{item.title}</span>}
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// // ExpandableSidebar.propTypes = {
// //   menuItems: PropTypes.arrayOf(
// //     PropTypes.shape({
// //       title: PropTypes.string.isRequired,
// //       icon: PropTypes.elementType.isRequired,
// //     })
// //   ),
// // }
import { useState } from 'react';
import { Menu, X, CircleUserRound, Users, Settings, HelpCircle } from 'lucide-react';
import { Link } from "react-router-dom";

const menuItems = [
  { title: 'My Account', icon: CircleUserRound, path: "/account" },
  { title: 'Contacts', icon: Users, path: "/contacts" },
  { title: 'Settings', icon: Settings, path: "/settings" },
  { title: 'Help', icon: HelpCircle, path: "/help" },
];

export default function ExpandableSidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Top Left Button */}
      <button
        onClick={() => setIsExpanded(true)}
        className="fixed top-4 left-2 p-2 pt-3 text-black z-50"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white text-black transition-all duration-500 ease-in-out z-40 shadow-lg 
          ${isExpanded ? "sm:w-[190px] md:w-[250px]" : "w-0 overflow-hidden"}`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsExpanded(false)}
          className="absolute top-5 right-2 p-2 pt-3" 
        >
          <X size={24} />
        </button>

        {/* Menu Items */}
        <ul className="mt-16 space-y-2 pr-2 pl-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path} className="flex items-center p-3 hover:bg-gray-700 rounded-md">
                <item.icon className="mr-3" />
                <span className="text-lg">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
