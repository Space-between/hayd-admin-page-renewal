import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch  } from 'react-router-dom';
import Containers from './Containers/Containers';
import AdminNewsList from './pages/AdminNews/AdminNewsList/AdminNewsList';
import Typing from './pages/AdminNews/AdminNewsWrite/Typing/Typing';
import ScrapVideo from './pages/AdminNews/AdminNewsWrite/ScrapVideo/ScrapVideo';
import NoticeWrite from "./pages/NoticeBoard/write/NoticeWrite";


export default () => (
    <Router>
        <>
            <Containers />
            <Switch>
                <Route path="/news" exact component={AdminNewsList} />
                <Route path="/news/newswrite/typing" component={Typing} />
                <Route path="/news/newswrite/scrapvideo" component={ScrapVideo} />
                <Route path="/notice-board" component={NoticeWrite} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
);