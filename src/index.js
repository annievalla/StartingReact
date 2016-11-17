import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyACUyFcmJtVx0J7-Au0APsBsMd2lvi5f5c';

const App = () => <SearchBar />;

ReactDOM.render(<App />, document.querySelector('.container'));
