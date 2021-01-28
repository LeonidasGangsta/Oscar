import logo from '../Icons/redditlogo.svg'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
          <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-10 w-10" src={logo} alt="Reddit logo"/>
                  </div>
                  <div className="block">
                    <div className="ml-10 flex items-baseline space-x-">
                        <Link to='/'>
                        <p className="text-white py-2 rounded-md text-md font-medium font-bold">Oscar's project</p>
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
    )
}

export default Nav;