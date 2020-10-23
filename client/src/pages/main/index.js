import React, { useState } from 'react';
import Header from '../../components/Header'
import SearchCard from '../../components/SearchCard'
import Narrative from '../../components/Narrative'
import Results from '../../components/Results'

// this will take user props from App in the form of the id.

// props.results should be the json from db

function Main(props) {
//   const [results, setResults] = useState(props.results);
  console.log(props.lougoutUser + ' in the main');
  const poop = 'poop'

  return (
    <div>
      <Header lougoutUser={props.lougoutUser}username={props.username} />
      <div className="container">
        <div className="row">
        <Narrative />
        </div>
        {/* this is the main body row that holds both the search form and results */}
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