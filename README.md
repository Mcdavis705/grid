<h1>Using Local Storage with React – My Step-by-Step Guide</h1>

In this small project, I explored how to use Local Storage in a React app. Local Storage lets us save data directly in the user's browser — and the best part is, it stays there even after refreshing or closing the page! I used it to save the state of a grid where clicking items changes their color.

Let me walk you through what I built and how I did it.

🛠️ Step 1: Project Setup
I started by creating a fresh React project using Vite, since it's lightweight and super fast to get going.

Then I installed Tailwind CSS to help with styling — it's a utility-first CSS framework that lets you build UI elements quickly using ready-to-use classes. After following Tailwind's setup guide for Vite, I was ready to build the interface.

🎨 Step 2: Building the Grid
Next, I created a component that renders a 4x4 grid (so 16 items total). Here's how I handled the state:

I used React's useState hook to create an array of 16 booleans.

Each boolean represents one cell in the grid.

Initially, all values are set to false.

👆 Step 3: Handling Clicks
To make the grid interactive:

I added a click event to each item.

When an item is clicked, I updated its boolean value in the state (from false to true, or vice versa).

This allowed the item's color to toggle when clicked.

Simple and responsive!

💾 Step 4: Adding Local Storage
Now for the fun part — saving and loading the grid state.

Save: I used localStorage.setItem() to store the grid state (after converting it to a string with JSON.stringify).

Load: I added a button that fetches the saved data with localStorage.getItem(), parses it, and sets it as the new state.

Clear: Another button resets the grid back to all false values.

This way, the user can save their current grid, load it later, or start fresh.

✅ What I Learned
Through this project, I got hands-on experience with:

React state (useState)

Event handling in React components

Working with browser Local Storage

Styling components with Tailwind CSS

It was a simple but super practical way to understand how to persist UI state locally in a React app.