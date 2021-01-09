import React, {Component} from 'react';

import './post-item.css';

export default class PostItem extends Component {
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

                <textarea className="form-control " aria-label="With textarea">
                    {content}
                 </textarea>
                <button type="button" className="btn btn-secondary">Редагувати</button>
                <button type="button" className="btn btn-danger">Видалити</button>

            </div>
        );
    }
}