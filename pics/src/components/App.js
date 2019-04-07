import React from 'react';
import axios from 'axios';
import SeachBar from './SearchBar';

class App extends React.Component {
  async onSearchSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
              Authorization:
              'Client-ID e5a11148778f1fcfa24dbb5880edbc25d889d03cfd4a370058777b92b24c85e2',
            },
        });
        console.log(response.data.results);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '50px' }}>
        <SeachBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
