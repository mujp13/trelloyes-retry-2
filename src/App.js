import React from 'react';
import './App.css';
import List from './List'

class App extends React.Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {}
    }
  };
  
  handleDeleteCard() {
    console.log('handle delete item called')
  }

  handleAddCard() {
    console.log('handle add item called')
  }

  render() {
    return (
      <main className='App'>
        <header className='App-header'>
          <h1> Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.props.store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.props.store.allCards[id])}
              onAddCard={this.handleAddCard}
              onDeleteCard={this.handleDeleteCard}
            />
          ))}
        </div>
      </main>
    );
  }
}


export default App;
