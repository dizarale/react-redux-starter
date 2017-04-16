import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './SearchBlock.scss'
import AutoComplete from 'material-ui/AutoComplete';
import SearchBox from './SearchBox'
import * as Action from '../../modules/actions/SearchBlock'


class SearchBlock extends Component {
  constructor(props){
    super(props)
  }
  componentWillMount() {
    this.props.setSearchBlockInit()
  }
  
  getSearchInput = () => {

  }
  render() {
    return (
      <div className='searchBlock'>
        <div className='container-fluid searchBox'>
          <SearchBox />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  setSearchBlockInit: bindActionCreators(Action.default.setSearchBlockInit,dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBlock)