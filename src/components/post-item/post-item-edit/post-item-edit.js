import React, {Component} from 'react';
import PostItem from "../post-item";
// import './post-item.css';

export default class PostItemEdit extends Component {
    state = {
        edit_status: true
    }

    onContentChange = (e) => {
        this.setState({
            content: e.target.value
        });
        console.log("Content: ", e.target.value)
    }

    editStateStatus = (e) => {
        this.setState({
            edit_status: false
        })
        console.log("Content: ", e.target.value)
    }

    render() {
        const {nameUser, content, date, editPost} = this.props;
        const {edit_status} = this.state;

        if(!edit_status) {
            return <PostItem nameUser={nameUser} content={content} date={date} editPost={editPost}/>
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
                <button type="button" className="btn btn-secondary" onClick={this.editStateStatus}>Submit</button>


            </div>
        );
    }
}