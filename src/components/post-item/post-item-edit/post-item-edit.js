import React, {Component} from 'react';
// import './post-item.css';

export default class PostItemEdit extends Component {
    state = {
        edit_status: false
    }

    onContentChange = (e) => {
        this.setState({
            content: e.target.value
        });
        console.log("Content: ", e.target.value)
    }



    SumbitEdit = (e) => {
//slozhno
    }



    render() {
        const {nameUser, content, date} = this.props;

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
                <button type="button" className="btn btn-secondary" onClick={this.SumbitEdit}>Submit</button>


            </div>
        );
    }
}