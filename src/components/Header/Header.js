import React from 'react'
import { IndexLink, Link} from 'react-router'
import classes from './Header.scss'

export const Header = () => (

  <div className={classes.headerWrapper}>
    <nav className={classes.navbarInverse} role="navigation">
        <Link to='/' className={classes.navbarBrand}>Timeliner</Link>
        <IndexLink to='/' activeClassName={classes.activeRoute}></IndexLink>
    </nav>
  </div>
)

export default Header
