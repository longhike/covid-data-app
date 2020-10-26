import React from 'react';
import Header from '../../components/Header'
import SearchCard from '../../components/SearchCard'
import Narrative from '../../components/Narrative'
import Results from '../../components/Results'

function Main(props) {
  return (
    <div>
      <Header username={props.username} />
      <div className="container">
        <div className="row">
        <Narrative />
        </div>
        <div className="row" id="main">
          <div className="col-md-3">
            <SearchCard getPosts={props.getPosts}/>
          </div>
          <div className="col-md-9">
            <Results getPosts={props.getPosts} currentPosts={props.currentPosts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;