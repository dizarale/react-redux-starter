import React from 'react'
import { IndexLink, Link } from 'react-router'
import { connect } from 'react-redux'

import './Header.scss'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MenuItem from 'material-ui/MenuItem';


export const Header = () => (
  <div>
    <AppBar 
    title="Header"
    style={{alignItems: 'center'}}
    showMenuIconButton={false}
    >
    <FlatButton label="Sign in" className='signInButton'/>
    {'|'}
    <FlatButton label="Register" className='registerButton'/>
    </AppBar>

  </div>
)

export default Header
