import React, {Component} from 'react';


export default class AddPostRender extends Component {
    render() {
        return (
            <div>
                <div>
                    <nav className="navbar navbar-light bg-light">
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="text" placeholder="Enter your name: "/>
                        </form>
                    </nav>
                </div>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Enter your post:</span>
                    </div>
                    <textarea className="form-control" aria-label="With textarea"></textarea>
                </div>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Add post</button>
            </div>
        );
    }
}