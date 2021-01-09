import React, {Component} from 'react';

import './add-post-panel.css'
import AddPostRender from "./add-post-render/add-post-render";
import PostItem from "../post-item/post-item";

export default class AddPostPanel extends Component {
    render() {
        return (
            <div className="add-post-panel">
                <AddPostRender/>
                <PostItem/>
            </div>
        );
    }
}