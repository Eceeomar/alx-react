import React, { userContext } from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';
import { AppContext } from '../App/AppContext';

function Footer() {
  const { user } = useContext(AppContext);

    return (
      <>
        <div className="App-footer">
          {user.isLoggedIn && (
            <p>
              <a href='#'>
                Contact us
              </a>
            </p>
          )}
          <p> 
            Copyright {getFullYear()} - {getFooterCopy(1)}
          </p>
        </div>
      </>
    )
}

export default Footer;