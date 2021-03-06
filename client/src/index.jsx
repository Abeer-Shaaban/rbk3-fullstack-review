import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
// import github from './helpers/github'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  search (term) {
    console.log(`${term} was searched`);
     // this.props.onSearch(this.state.term);
    var temp = this.state.term;
    $(document).ready(function(){
       $.ajax({
      type: "POST",
      url: 'http://127.0.0.1:1128/repos',
      data: temp,
      success: function () { console.log('Success'); },
      dataType: 'application/json'
    });
    })
   
    // TODO
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));