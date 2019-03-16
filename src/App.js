import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import DashboardContainer from "./containers/DashboardContainer";
import SongContainer from "./containers/SongContainer";
import StreamContainer from "./containers/StreamContainer";
import OnePlaylistContainer from "./containers/OnePlaylistContainer";
import PlaylistsContainer from "./containers/PlaylistsContainer";
import AboutContainer from "./containers/AboutContainer";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={DashboardContainer} />
      <Route path="/songs" component={SongContainer} />
      <Route path="/stream" component={StreamContainer} />
      <Route path="/playlists/:playlistId" component={OnePlaylistContainer} />
      <Route path="/playlists" component={PlaylistsContainer} />
      <Route path="/about" component={AboutContainer} />
    </Switch>
  </BrowserRouter>
);

export default App;
