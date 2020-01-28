import React from 'react';
import './List.css';
import Card from './Card';

function List(props) {
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {props.cards.map(card => (
          <Card 
            onDeleteCard={props.onDeleteCard}
            key={card.id}
            id={card.id}
            title={card.title}
            content={card.content} />
        ))}
        <button 
          onClick={() => props.onAddCard(props.id)}
          type="button"
          className="List-add-button">
          + Add Random Card
        </button>
      </div>
    </section>
  );
}

export default List;

List.defaultProps = {
  onClickAdd: () => {},
}