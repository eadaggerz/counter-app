import React, { Fragment } from 'react';
import logo from '../logo.svg'


function Header () {
  
  return (
    <Fragment>
      <header>
        <nav className="flex items-center justify-between flex-wrap p-6">
          <div className="flex items-center flex-shrink-0 mr-6">
            <img clasName="fill-current h-8 w-8 mr-2" src={logo} alt="Site Logo" height="0" width="100"/>
            <h1 className="font-semibold text-xl tracking-tight">Welcome To Counter App</h1>
          </div>
          
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
              <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 mr-4">
                Docs
              </a>
              <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 mr-4">
                Examples
              </a>
              <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0">
                Blog
              </a>
            </div>
          </div>

        </nav>
      </header>
    </Fragment>
  );
}

export default Header;