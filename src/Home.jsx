import React from 'react';
import fun from './fun.jpg'

function Home() {
    return (
        <div>
            <h1>Long Boring Lectures ???</h1>
            <p class="para">Welcome to the Game Zone</p>
            <img class="fun" src={fun} alt="image" />
            <p class="para"> Navigate through the games from the Navigation Bar and have some fun. </p>
        </div>
    );
}
export default Home;
