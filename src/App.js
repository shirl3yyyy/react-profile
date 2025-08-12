import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: 'Ada Lovelace',
        bio: 'Ada Lovelace was an English mathematician and writer, chiefly known for her work on Charles Babbage\'s early mechanical general-purpose computer, the Analytical Engine. She is regarded as the first computer programmer.',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/330px-Ada_Lovelace_portrait.jpg',
        profession: 'Mathematician & First Programmer'
      },
      shows: false,
      mountedTime: 0
    };

    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow() {
    this.setState((prevState) => ({
      shows: !prevState.shows
    }));
  }

  render() {
    const { Person, shows, mountedTime } = this.state;

    return (
      <div className="App" style={{ textAlign: 'center', padding: '2rem' }}>
        <h1>Profile Toggle</h1>

        <button onClick={this.toggleShow}>
          {shows ? 'Hide' : 'Show'} Details
        </button>

        {shows && (
          <div style={{ marginTop: '20px' }}>
            <img src={Person.imgSrc} alt={Person.fullName} style={{ borderRadius: '50%', width: '150px' }} />
            <h2>{Person.fullName}</h2>
            <p><strong>Profession:</strong> {Person.profession}</p>
            <p><strong>Bio:</strong> {Person.bio}</p>
          </div>
        )}

        <div style={{ marginTop: '30px', fontStyle: 'italic', color: 'gray' }}>
          Time since mounted: {mountedTime} seconds
        </div>
      </div>
    );
  }
}

export default App;

