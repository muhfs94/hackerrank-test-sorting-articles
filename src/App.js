import React, { useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = 'Sorting Articles';

const sortByMostUpvotes = (array) => {
  return array.sort((a, b) => b.upvotes - a.upvotes);
};

const sortByLeastUpvotes = (array) => {
  return array.sort((a, b) => a.upvotes - b.upvotes);
};

const sortByMostRecent = (array) => {
  return array.sort((a, b) => new Date(b.date) - new Date(a.date));
};

const App = (props) => {
  const [articles, setArticles] = useState(sortByMostUpvotes(props.articles));
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     articles: sortByMostUpvotes(this.props.articles),
  //   };
  // }

  const handleMostUpvotes = () => {
    const newArticles = [...articles];
    setArticles(sortByMostUpvotes(newArticles));
    // this.setState({ articles: sortByMostUpvotes(this.state.articles) });
  };

  const handleMostRecent = () => {
    const newArticles = [...articles];
    setArticles(sortByMostRecent(newArticles));
    // this.setState({ articles: sortByMostRecent(this.state.articles) });
  };

  // render() {
  return (
    <div className='App'>
      <h8k-navbar header={title}></h8k-navbar>
      <div className='layout-row align-items-center justify-content-center my-20 navigation'>
        <label className='form-hint mb-0 text-uppercase font-weight-light'>
          Sort By
        </label>
        <button
          data-testid='most-upvoted-link'
          className='small'
          onClick={handleMostUpvotes}
        >
          Most Upvoted
        </button>
        <button
          data-testid='most-recent-link'
          className='small'
          onClick={handleMostRecent}
        >
          Most Recent
        </button>
      </div>
      <Articles articles={articles} />
    </div>
  );
  // }
};

export default App;
