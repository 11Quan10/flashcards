import { useState, useEffect } from "react";

const Flashcard = ({ card }) => {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        setFlipped(false);
    }, [card]);

    const flipCard = () => setFlipped(!flipped);

    return (
        <div id={card.difficulty} className={`flashcard ${flipped ? " flipped" : ""}`} onClick={flipCard}>
            {
                flipped ? (
                    <div className="answer">
                        <h2>{card.country}</h2>
                    </div>
                ) : (
                    <>
                        <h2>What country is this?</h2>
                        <div className="question">
                            <img src={card.image} alt="Guess the country!" />
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default Flashcard;