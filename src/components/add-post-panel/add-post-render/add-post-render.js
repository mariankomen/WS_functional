import React, {Component} from 'react';


export default class AddPostRender extends Component {
    state = {
        nameUser: '',
        content: ''
    }
    onContentChange = (e) => {
        this.setState({
            content: e.target.value
        });
        console.log("Content: ", e.target.value)
    }
    onNameChange = (e) => {
        this.setState({
            nameUser: e.target.value
        });
        console.log("Name: ", e.target.value)
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.AddPost(this.state.nameUser, this.state.content)
        this.setState({
            nameUser: '',
            content: ''
        })
    }

    render() {

        return (
            <div>
                <div>
                    <nav className="navbar navbar-light bg-light">
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="text" placeholder="Enter post title: " onChange={this.onNameChange}/>
                        </form>
                    </nav>
                </div>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Enter your post:</span>
                    </div>
                    <textarea className="form-control" aria-label="With textarea" onChange={this.onContentChange}></textarea>
                </div>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.onSubmit}>Add post</button>
            </div>
        );
    }
}