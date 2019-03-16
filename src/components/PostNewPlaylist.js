import React from "react";
import { postPlaylist } from '../actions';

class PostNewPlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    postPlaylist(this.state.value).then(() => {
      window.location.reload(false);
    });
  }

  render() {
    return (
      <form className="uploadform" onSubmit={this.handleSubmit}>
        <p>Create a new playlist</p>
        <div className="form-group">
          <br/>
          <div className="input-group">
            <div className="input-group-addon"></div>
              <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter new playlist name"/>
          </div>
        </div>
        <button type="submit" value="Submit" className="btn btn-default">Submit</button>
      </form>
    );
  }
}
      

export default PostNewPlaylist;
