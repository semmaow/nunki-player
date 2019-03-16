import _ from 'lodash';
import React from "react";
import { putSongOnPlaylist } from '../actions';
import { fetchSongs } from '../actions';

class AddSongToPlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {songId: '', playlistId: props.playlistId, songOrder: ''};
    this.state.songs = null;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetchSongs().then((data) => {
      this.setState({ songs: data.data.items });
    });
  }

  renderListItem(song) {
    return (
      <option value={song.id}>{song.name + ' by ' + song.artist}</option>
    );
  }

  renderList() {
    return _.map(this.state.songs, this.renderListItem.bind(this));
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    putSongOnPlaylist(this.state.playlistId, this.state.songId, this.state.songOrder).then(() => {
      window.location.reload(false);
    });
  }

  render() {
    return (
      <form className="uploadform" onSubmit={this.handleSubmit}>
        <p>Add a song to the playlist</p>
        <div className="form-group">
          <label>Select song</label>
            <br />
            <br />
            <div className="input-group">
              <div className="input-group-addon">
                <select name="songId" value={this.state.songId} 
                onChange={this.handleInputChange}>
                  <option value=''></option>
                  {this.renderList()}
                </select>
              </div>
            </div>
        </div>
        <div className="form-group">
          <label>Song Order</label>
            <br />
            <br />
            <div className="input-group">
              <div className="input-group-addon"></div>
                <input name="songOrder" type="text" value={this.state.songOrder} 
                       onChange={this.handleInputChange} />
            </div>
        </div>
        <button type="submit" value="Submit" className="btn btn-default">Add Song</button>
      </form>
    );
  }
}
      

export default AddSongToPlaylistForm;
