# React Exercises

## Setup

1. `cd Exercises/exercises-app`
2. `npm i`
3. `npm start`

---

## Exercise 1: Create a Component with Props

**Goal:** Learn how to create a functional component, pass data via props, and render dynamic content.

### Steps

1. **Create the Homepage component**
   - Open `src/components/Homepage/Homepage.jsx`
   - Create a functional component called `Homepage` that accepts `props` as a parameter
   - Export the component using a default export

2. **Import mock data**
   - Open `src/App.jsx`
   - Import the user data from `../mockUser.json`

3. **Pass data as props**
   - In `App.jsx`, render the `<Homepage />` component
   - Pass the imported user object as a prop (e.g., `user={mockUser}`)

4. **Display a welcome message**
   - In `Homepage.jsx`, use the props to display a personalized greeting
   - Example output: "Greetings, John"

### Hints

- To import JSON: `import mockUser from './mockUser.json'`
- Access props in the component: `props.user.firstName`
- You can also destructure props: `function Homepage({ user })`

### Expected Result

When you run the app, you should see a welcome message displaying the user's first name from the mock data.
