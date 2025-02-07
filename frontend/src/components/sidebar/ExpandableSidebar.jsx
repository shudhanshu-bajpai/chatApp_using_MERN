import * as React from 'react'
import { Menu,CircleUserRound, X, Users, Settings, HelpCircle } from 'lucide-react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom" ;

const menuItems = [
  { title: 'My Account', icon: CircleUserRound},
  { title: 'Contacts', icon: Users },
  { title: 'Settings', icon: Settings },
  { title: 'Help', icon: HelpCircle },
]

export default function ExpandableSidebar() {
  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <div 
      className={` left-0 top-0 h-full bg-background transition-all duration-300 ease-in-out ${isExpanded ? "w-60" : "w-16"}`}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute top-2 p-2"
      >
        {isExpanded ? <X /> : <Menu />}
      </button>
      <ul className="mt-12">
        {menuItems.map((item, index) => (
          <li key={index} className="flex items-center p-2">
            {item.title === 'My Account' ? (
              <Link to={"/account"} className="flex items-center">
                <item.icon className="mr-2" />
                {isExpanded && <span>{item.title}</span>}
              </Link>
            ) : (
              <>
                <item.icon className="mr-2" />
                {isExpanded && <span>{item.title}</span>}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

ExpandableSidebar.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
    })
  ),
}
