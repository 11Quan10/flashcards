import { useState } from "react";

const SubmitBox = ({ card, onCorrect, guess, feedback, setGuess, setFeedback }) => {
    const handleInputChange = (e) => {
        setGuess(e.target.value);
        setFeedback("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (guess.trim().toLowerCase() === card.country.toLowerCase()) {
            setFeedback("correct");
            if (onCorrect) onCorrect();
        } else {
            setFeedback("incorrect");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
            <label htmlFor="guess-input">Enter Your Guess:</label>
            <input
                id="guess-input"
                type="text"
                value={guess}
                onChange={handleInputChange}
                autoComplete="off"
            />
            <button type="submit">Submit</button>
            {feedback === "correct" && (
                <span id="correct-answer">
                    Correct!
                </span>
            )}
            {feedback === "incorrect" && (
                <span id="incorrect-answer">
                    Incorrect, try again!
                </span>
            )}
            </form>
        </>
    );
};

export default SubmitBox;