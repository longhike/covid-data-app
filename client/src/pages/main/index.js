import React, { useState } from 'react';
import Header from '../../components/Header'
import LoginForm from '../../components/Login'
import SearchCard from '../../components/SearchCard'
import Results from '../../components/Results'
import Loading from '../../components/Loading'

function CovidPage() {
//   const [results, setResults] = useState();

  return (
    <div>
      <Header />
      <div className="container">
        {/* this is the main body row that holds both the search form and results */}
        <div className="row" id="main">
          <div className="col-md-5">
            <SearchCard />
          </div>
          <div className="col-md-5">
            <Loading />
            <Results />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CovidPage;