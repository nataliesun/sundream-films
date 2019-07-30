import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import LandingPage from '../../routes/LandingPage/LandingPage';
import ReviewsPage from '../../routes/ReviewsPage/ReviewsPage';
import BookOnlinePage from '../../routes/BookOnlinePage/BookOnlinePage';
import GalleryPage from '../../routes/GalleryPage/GalleryPage';
import NavBar from '../NavBar/NavBar';

import './App.scss';
import '../../assets/futura-lt-cufonfonts-webfont/style.css';
import '../../assets/avenir-lt-std-cufonfonts-webfont/style.css';

class App extends React.Component {
  state = {
    error: null
  }

  render() {
    return (
      <div className="App">
        <main className="App__main">
          <header className="App__header">
            <NavBar />
          </header>

          {this.state.hasError && (
            <p className="red">There was an error! Oh no!</p>
          )}
          <Switch>
            <Route exact path={'/'} component={LandingPage} />
            <Route path={'/reviews'} component={ReviewsPage} />
            <Route path={'/book-online'} component={BookOnlinePage} />
            <Route path={'/gallery'} component={GalleryPage} />
            {/* <Route component={NotFoundPage} /> */}
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
