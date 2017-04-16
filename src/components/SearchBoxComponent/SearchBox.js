import React, { Component } from 'react'
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import Search from 'material-ui/svg-icons/action/search';

class SearchBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: ''
    }
  }
  onUpdateInput = (input) => {
    this.setState({
      searchText: input,
    })
  }
  getSearchInput = () => {
    let input = this.state.searchText
    if (input != '') {
      this.props.getSearch(this.state.searchText)
    }
  }
  render() {
    return (
      <div>
        <AutoComplete
          floatingLabelText={this.props.label}
          filter={AutoComplete.fuzzyFilter}
          dataSource={this.props.dataSource}
          maxSearchResults={5}
          onUpdateInput={this.onUpdateInput}
        />
        <FloatingActionButton mini={true} onClick={this.getSearchInput}>
          <Search />
        </FloatingActionButton>
      </div>
    )
  }
}

export default SearchBox
