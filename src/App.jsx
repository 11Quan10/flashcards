import './App.css';
import { useState } from 'react';
import Flashcard from './components/Flashcard';
import cardSet from './data/flashcards';

const App = () => {
    const [currentCard, setCurrentCard] = useState(0);

    const getNext = () => {
        let next;
        do {
            next = Math.floor(Math.random() * cardSet.length);
        } while (next === currentCard || next === 0);
        setCurrentCard(next);
    }

    return (
        <div className="App">
            <h1>GeoQuizzr</h1>
            <p>Guess the country from the highlighted map section.</p>
            <p>Number of cards: {cardSet.length}</p>

            <Flashcard card={cardSet[currentCard]} />
            <button onClick={getNext}>Next</button>
        </div>
    );
};

export default App;