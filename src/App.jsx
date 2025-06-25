import './App.css';
import { useState } from 'react';
import Flashcard from './components/Flashcard';
import SubmitBox from './components/SubmitBox';
import cardSet from './data/flashcards';

const App = () => {
    const [cards, setCards] = useState([...cardSet]);
    const [currentCard, setCurrentCard] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const [guess, setGuess] = useState("");
    const [feedback, setFeedback] = useState("");
    const [prevDisabled, setPrevDisabled] = useState(true);
    const [nextDisabled, setNextDisabled] = useState(false);

    const changeCard = (change) => {
        let next = currentCard + change;
        if (next < 0 || next >= cards.length) return;
        setCurrentCard(next);
        setFlipped(false);

        setPrevDisabled(next === 0);
        setNextDisabled(next === cards.length - 1);
        setGuess("");
        setFeedback("");
    }

    const shuffleCards = () => {
        console.log("Cards are shuffled!");
        let newCardSet = [...cards];
        let idx = newCardSet.length;

        while (idx > 0) {
            let random = Math.floor(Math.random() * idx);
            idx--;

            [newCardSet[idx], newCardSet[random]] = [newCardSet[random], newCardSet[idx]];
        }

        setCards(newCardSet);
        setCurrentCard(0);
        setFlipped(false);
        setGuess("");
        setFeedback("");
        setPrevDisabled(true);
        setNextDisabled(false);
    }

    return (
        <div className="App">
            <h1>GeoQuizzr</h1>
            <p>Guess the country from the highlighted map section.</p>
            <p>Number of cards: {cards.length}</p>

            <Flashcard card={cards[currentCard]} flipped={flipped} setFlipped={setFlipped} />
            <SubmitBox 
                card={cards[currentCard]} 
                onCorrect={() => setFlipped(true)}
                guess={guess}
                feedback={feedback}
                setGuess={setGuess} 
                setFeedback={setFeedback} 
            />
            <div className="nav-buttons">
                <button onClick={() => changeCard(-1)} disabled={prevDisabled}>←</button>
                <button onClick={() => changeCard(1)} disabled={nextDisabled}>→</button>
                <button onClick={shuffleCards}>Shuffle</button>
            </div>
        </div>
    );
};

export default App;