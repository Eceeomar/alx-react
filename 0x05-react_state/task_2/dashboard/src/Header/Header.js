import React, { useContext } from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css} from 'aphrodite';
import { AppContext } from "../App/AppContext";

function Header() {
  const { user, logOut } = useContext(AppContext);
  
  return (
    <React.Fragment>
      <div className={css(styles.AppHeader)}>
        <img src={logo} className={css(styles.AppLogo)} alt="logo" />
      </div>

      {user.isLoggedIn && (
        <section className={css(styles.greeting)} id="logoutSection">
          Welcome<strong> {user.email} </strong>
          <em>
            <a href="#" onClick={logOut}>
              (logout)
            </a>
          </em>
        </section>
      )}
    </React.Fragment>
  )
};

const styles = StyleSheet.create({
  AppHeader: {
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    fontSize: '20px',
    color: '#e0354b',
    borderBottom: '3px solid #e0354b',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
},
AppLogo: {
  width: '200px',
}
});

export default Header;