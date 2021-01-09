import React, {Component} from 'react';
import Header from "../header/header";
import AddPostPanel from "../add-post-panel/add-post-panel";


export default class App extends Component{
    render() {

        return(
            <div>
                <Header/>
                <AddPostPanel/>

            </div>
        );
    }
}

