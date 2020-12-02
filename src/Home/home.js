import React from "react";
import { Switch, Route } from "react-router-dom";
import Blog from "../Blog/Blog";
import Post from "../Blog/Post";
import Gallery from "../Gallery/Images";



const Home = () => (  
<main>
    <Switch>
        <Route exact path='/' component={Blog} />
        <Route path="/post/:slug" component={Post} />
        <Route path='/gallery' component={Gallery} />
    </Switch>
</main>
);
export default Home