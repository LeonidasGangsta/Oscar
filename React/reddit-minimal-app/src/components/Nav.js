import logo from '../Icons/redditlogo.svg'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
          <nav className="bg-gray-700">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-center sm:justify-start sm:px-4 h-16">
                <Link to='/'>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10" src={logo} alt="Reddit logo"/>
                    </div>
                    <div className="block">
                      <div className="ml-4 flex items-baseline space-x-">
                        <p className="text-white py-2 rounded-md text-xl font-bold capitalize hover:text-gray-200">Oscar's project</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </nav>
        </div>
    )
}

export default Nav;