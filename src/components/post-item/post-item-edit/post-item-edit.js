import React, {Component} from 'react';
import PostItem from "../post-item";
// import './post-item.css';

export default class PostItemEdit extends Component {
    state = {
        id: this.props.id,
        content: this.props.content,
        edit_status: true
    }

    onContentChange = (e) => {
        this.setState({
            content: e.target.value
        });
        console.log("Content: ", this.state.content)
    }

    onEditPost = (e) => {
        e.preventDefault();
        this.props.editPost(this.state.id, this.state.content)
        this.setState({
            edit_status: false
        })
        console.log(this.state)
    }


    render() {
        const {nameUser, content, date, editPost} = this.props;
        const {edit_status} = this.state;

        if(!edit_status) {
            return <PostItem nameUser={nameUser} content={this.state.content} date={date} editPost={editPost}/>
        }

        return (
            <div className='post-item'>
                <div className='name_date'>
                    <div>
                        <h3>{nameUser}</h3>
                    </div>
                    <div>
                        <h6>{date}</h6>
                    </div>
                </div>

                <textarea className="form-control " aria-label="With textarea" onChange={this.onContentChange}>
                    {content}
                 </textarea>
                <button type="button" className="btn btn-secondary" onClick={this.onEditPost}>Submit</button>


            </div>
        );
    }
}