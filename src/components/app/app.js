import React, {Component} from 'react';
import Header from "../header/header";
import AddPostPanel from "../add-post-panel/add-post-panel";


export default class App extends Component {

    state = {
        postItems: [
            {nameUser: 'Ivan', content: 'hello its post', date: '21-09-2000'},
            {nameUser: 'Ivan', content: 'hello its post', date: '21-09-2000'},
            {nameUser: 'Ivan', content: 'hello its post', date: '21-09-2000'},
        ]
    }

    render() {


        return (
            <div>
                <Header/>
                <AddPostPanel postItems={this.state.postItems}/>

            </div>
        );
    }
}

