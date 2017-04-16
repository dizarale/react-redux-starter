import React from 'react'
import './NewsBlock.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export const NewsBlock = (props) => (
  
  <div className=''>
    <h1>{ props.searchText }</h1>  
  </div>
)
const mapDispatchToProps = (dispatch) => ({
})

const mapStateToProps = (state) => ({
  searchText: state.HomeReducer.SearchBlock.searchText
})
export default connect(mapStateToProps, mapDispatchToProps)(NewsBlock) 
