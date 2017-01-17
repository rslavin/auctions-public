require('./bootstrap');
require('./search');

import React, {Component} from 'react';
import {render} from 'react-dom';
// Import routing components
import {Router, Route, browserHistory} from 'react-router';

// Import custom components
import AuctionFeed from './components/auctionFeed.jsx'
import SearchResults from './components/searchResults.jsx'
import Item from './components/item.jsx'

if (document.getElementById('content-container'))
    render(
        <Router history={browserHistory}>
            <Route path="/feed" component={AuctionFeed}/>
            <Route path="/search/:terms" component={SearchResults}/>
            <Route path="/item/:item" component={Item}/>
        </Router>,
        document.getElementById('content-container')
    );
