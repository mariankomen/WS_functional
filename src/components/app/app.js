import React, {Component} from 'react';
import Header from "../header/header";
import AddPostPanel from "../add-post-panel/add-post-panel";


export default class App extends Component {
    newID = 100;
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
            date: '21-09-2000',
            id: this.newID++
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
    deletePost = (id) => {
        this.setState(({postItems}) => {
            const idx = postItems.findIndex((el) => el.id === id);
            const newArr = [
                ...postItems.slice(0, idx),
                ...postItems.slice(idx + 1)
            ]
            return {
                postItems: newArr
            };
        });
    };


    render() {

        return (
            <div>
                <Header/>
                <AddPostPanel postItems={this.state.postItems}
                              AddPost={this.AddPost}
                              deletePost={this.deletePost}
                />
            </div>
        );
    }
}

