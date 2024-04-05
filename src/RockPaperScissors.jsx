import React, { useState } from 'react';
import rock from './rock.png';
import paper from './paper.png';
import scissors from './scissors.png';

function RockPaperScissors() {
    const [userScore, setUserScore] = useState(0); 
    const [compScore, setCompScore] = useState(0); 
    const [msg, setMsg] = useState('Play your move'); 

    const generateComputerChoice = () => {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    };

    const handleUserChoice = (userChoice) => {
        const computerChoice = generateComputerChoice();
        const result = determineWinner(userChoice, computerChoice);

        let newMsg;
        if (result === 'win') {
            newMsg = 'You win!';
            setUserScore(userScore + 1);
        } else if (result === 'lose') {
            newMsg = 'You lose!';
            setCompScore(compScore + 1);
        } else {
            newMsg = 'It\'s a tie!';
        }
        setMsg(newMsg);
    };

    const determineWinner = (userChoice, computerChoice) => {
        if (userChoice === computerChoice) {
            <p>It's A Tie</p>
            return 'tie';
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            <p></p>
            return 'win';
        } else {
            return 'lose';
        }
    };

    return (
        <div>
            <h1>Rock Paper Scissors</h1>
            <div className="choices">
                <div className="choice" id="rock" onClick={() => handleUserChoice('rock')}>
                <img src={rock} alt="Rock" />
                    
                </div>
                <div className="choice" id="paper" onClick={() => handleUserChoice('paper')}>
                <img src={paper} alt="Paper" />
                </div>
                <div className="choice" id="scissors" onClick={() => handleUserChoice('scissors')}>
                    <img src={scissors} alt="Scissors" />
                </div>
            </div>
            <div className="scores">
                <div className="you">
                    <p id="user-score">{userScore}</p>
                    <p>YOU</p>
                </div>
                <div className="comp">
                    <p id="comp-score">{compScore}</p>
                    <p>COMPUTER</p>
                </div>
            </div>
            <div className="msg-contt">
                <p id="msgg">{msg}</p>
            </div>
        </div>
    );
}

export default RockPaperScissors;
