import React, {Component} from 'react';

import './post-item.css';

export default class PostItem extends Component {
    render() {
        return (
            <div className='post-item'>

                <div className='name_date'>
                    <div>
                        <h3>NameUser</h3>
                    </div>
                    <div>
                        <h6>21.09.2000</h6>
                    </div>
                </div>

                <textarea className="form-control" aria-label="With textarea">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet incidunt magnam nemo pariatur quod! Aliquam asperiores eveniet nulla numquam quaerat sed veritatis! Autem enim illo qui unde velit voluptate voluptatum.
                </textarea>
                <button type="button" className="btn btn-secondary">Редагувати</button>
                <button type="button" className="btn btn-danger">Видалити</button>

            </div>
        );
    }
}