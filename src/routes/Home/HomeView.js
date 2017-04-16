import React from 'react'
import './HomeView.scss'
import SearchBlock from './containers/SearchBlock'
import NewsBlock from './containers/NewsBlock'

export const HomeView = () => (
  <div>
    <SearchBlock/>
    <NewsBlock/>
  </div>
)

export default HomeView
