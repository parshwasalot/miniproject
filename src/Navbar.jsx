import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './Home';
import TicTacToe from './TicTacToe';
import RockPaperScissors from './RockPaperScissors';
function Navbar() {
    return (
        <Router>
            <div className="navbar">
                <nav>
                    <ul>
                        <NavLink to="/" className="link" activeClassName="active">Home</NavLink>
                        <NavLink to="/TicTacToe" className="link" activeClassName="active">Tic Tac Toe</NavLink>
                        <NavLink to="/RockPaperScissors" className="link" activeClassName="active">Rock Paper Scissors</NavLink>
                    </ul>

                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/TicTacToe" element={<TicTacToe />} />
                    <Route path="/RockPaperScissors" element={<RockPaperScissors/>} />
                </Routes>
            </div>
        </Router>
    );
}
export default Navbar;
