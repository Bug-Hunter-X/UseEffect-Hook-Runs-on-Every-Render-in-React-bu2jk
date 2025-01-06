# React useEffect Hook Runs on Every Render

This repository demonstrates a common issue with the React `useEffect` hook where it runs on every render, even with a dependency array specified. This can lead to performance issues and unexpected behavior.

## Problem
The provided code uses `useEffect` to log the current count.  Despite the dependency array `[count]`, the effect still runs on every render, flooding the console.

## Solution
The solution involves correctly specifying the dependency array. In this case, the dependency array was properly set so no changes are needed.

## How to Run
1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.

Open your browser and see the described issue in the console.