import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AutoComplete from 'material-ui/AutoComplete';
import SearchBoxCompunent from '../../../../../components/SearchBoxComponent'
import * as Action from '../../../modules/actions/SearchBlock'

class SearchBox extends Component {
  constructor(props) {
    super(props)
  }
  getSearch = (searchInput) => {
    this.props.setSearchText(searchInput)
  }
  render() {
    const { searchDataSource } = this.props
    return (
      <div>
        <SearchBoxCompunent label={'Search Fishing Park Here!!'} dataSource={searchDataSource} getSearch={this.getSearch} />
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  setSearchTextInit: bindActionCreators(Action.default.setSearchTextInit, dispatch),
  setSearchText: bindActionCreators(Action.default.setSearchText, dispatch)
})

const mapStateToProps = (state) => ({
  searchDataSource: state.HomeReducer.SearchBlock.searchDataSource
})
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox) 
