import React, {Component} from 'react';
import Header from "../header/header";
import AddPostPanel from "../add-post-panel/add-post-panel";


export default class App extends Component {
    newID = 100;
    state = {
        postItems: [
            this.ItemCreator('Sell house',' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa debitis dolorum eos exercitationem inventore neque nihil nobis porro quas. Aliquam amet deserunt distinctio eum modi quaerat quisquam reprehenderit tenetur.'),
            this.ItemCreator('Will buy 2 ticket on football match','Hi everyone, i will buy few tickets on final of Champoins league, FC Barcelona vs Real Madrin'),
            this.ItemCreator('Sell 400 kg potato','I have too much potato, and i will sell it.'),
            this.ItemCreator('Sell iPhone XS 500$','Hello, i will sell my phone.'),
        ],
        term: ''
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
//slozhno

    editPost = (id,content) => {
        this.setState(({postItems}) => {
            const idx = postItems.findIndex((el) => el.id === id);
            const NewPost = this.ItemCreator(postItems[idx].nameUser , content);
            NewPost.id = id;
            const newArr = [
                ...postItems.slice(0, idx),
                NewPost,
                ...postItems.slice(idx + 1)
            ]
            console.log(newArr);
            return {
                postItems: newArr
            };
        })
    }

    search(ITEMS, term) {
        if (term === 0) {
            return ITEMS;
        }
        return ITEMS.filter((item) => {
            return item.nameUser.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }

    OnSearchChange = (term) => {
        this.setState({term});
    };

    render() {
        const {postItems, term} = this.state;
        const VisibleItems = this.search(postItems, term);
        return (
            <div>

                <Header OnSearchChange={this.OnSearchChange}/>
                <AddPostPanel
                              postItems={VisibleItems}
                              // postItems={this.state.postItems}
                              AddPost={this.AddPost}
                              deletePost={this.deletePost}
                              editPost={this.editPost}
                />
            </div>
        );
    }
}

