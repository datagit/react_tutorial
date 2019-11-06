import React, {Component} from 'react'
// import logo from './logo.svg';
import './App.css';
import Table from '../table/Table';
import Form from '../form/Form';
import Toggle from "../toggle/Toggle";
import Search from "../search/Search";
import Contact from "../contact/Contact";
class App extends Component {
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
      {
        name: 'Dat Dao',
        job: 'IT',
      },
    ],
  };
  removeCharacter = index => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      })
    })
  };
  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] })
  };
  render() {
    const { characters } = this.state
    return (
        <div className="container">
          {/*<Table characterData={characters} removeCharacter={this.removeCharacter}/>*/}
          {/*<Form handleSubmit={this.handleSubmit} />*/}
          {/*<Toggle/>*/}
          <Search/>
          <Contact
              name="Joni Baez"
              email="test@example.com"
              site="http://test.com"
          />
        </div>
    )
  }
}

export default App;
