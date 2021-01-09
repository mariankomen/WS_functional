import React, {Component} from 'react';
import './post-item.css';
import PostItemEdit from "./post-item-edit/post-item-edit";

export default class PostItem extends Component {
    state = {
        edit_status: true
    }
    editStateStatus = () => {
        this.setState({
            edit_status: false
        })
    }
    render() {
        const {nameUser, content, date, deletePost, editPost} = this.props;
        const {edit_status} = this.state;

        if(!edit_status) {
            return <PostItemEdit nameUser={nameUser} content={content} date={date} editPost={editPost}/>
        }

        return (

            <div className='post-item'>
                <div>
                <div className='name_date'>
                    <div>
                        <h3>{nameUser}</h3>
                    </div>
                    <div>
                        <h6>{date}</h6>
                    </div>
                </div>
                <div className='content_style'>
                    {content}
                </div>
                <button type="button" className="btn btn-secondary" onClick={this.editStateStatus}>Редагувати</button>
                <button type="button" className="btn btn-danger" onClick={deletePost}>Видалити</button>
                </div>
            </div>

        );
    }
}