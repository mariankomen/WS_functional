import React, {Component} from 'react';
import AddPostRender from "./add-post-render/add-post-render";
import PostItem from "../post-item/post-item";

import './add-post-panel.css'

export default class AddPostPanel extends Component {
    render() {
        const {postItems, deletePost, editPost} = this.props;
        const PostCre = postItems.map((items) => {
            const {id, ...itemObj} = items;
            return(
                <li key={id} className='post_item_li'>
                    <PostItem {...itemObj}
                              deletePost={() => deletePost(id)}
                              editPost={()=> editPost(id)}
                              id={id}
                    />
                </li>
            )
        })
        return (
            <div className="add-post-panel">
                <AddPostRender AddPost={this.props.AddPost}
                />
                {PostCre}
            </div>
        );
    }
}