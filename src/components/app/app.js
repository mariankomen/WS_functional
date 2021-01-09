import React, {Component} from 'react';
import Header from "../header/header";
import AddPostPanel from "../add-post-panel/add-post-panel";


export default class App extends Component {

    state = {
        postItems: [
            this.ItemCreator('Ivan','Prodam garaj'),
            this.ItemCreator('Stepan','Hello, prodam 3 litry samogonki'),
        ]
    }
    ItemCreator(nameUser,content){
        return {
            nameUser: nameUser,
            content: content,
            date: '21-09-2000'
        }
    }
    AddPost = (nameUser,content) => {
        const NewPost = this.ItemCreator(nameUser,content);
        this.setState(({postItems})=>{
            const NewAddedArray = [...postItems, NewPost]
            return {
                postItems: NewAddedArray
            }
        })
    }

    render() {

        return (
            <div>
                <Header/>
                <AddPostPanel postItems={this.state.postItems}
                              AddPost={this.AddPost}

                />
            </div>
        );
    }
}

