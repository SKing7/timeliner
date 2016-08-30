import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import classes from './HomeView.scss'
import { Link } from 'react-router'

export const HomeView = () => (
  <div>
      <Link to="/viewDemo">Demo</Link>
  </div>
)

export default HomeView
