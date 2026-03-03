# React Exercises

## Setup

1. `cd Exercises/exercises-app`
2. `npm i`
3. `npm start`

---

## Exercise 1: Components, Props, and Layout

**Goal:** Learn how to create functional components, pass data via props, render dynamic content, and compose components using a layout pattern.

### Steps

1. **Create the Homepage component**
   - Open `src/components/Homepage/Homepage.jsx`
   - Create a functional component called `Homepage` that accepts `props` as a parameter
   - Export the component using a default export

2. **Create the Navbar component**
   - Create a new file `src/components/Navbar/Navbar.jsx`
   - Create a functional component called `Navbar`
   - Add placeholder content (e.g., site title or navigation links)
   - Export the component using a default export

3. **Create the Footer component**
   - Create a new file `src/components/Footer/Footer.jsx`
   - Create a functional component called `Footer`
   - Add placeholder content (e.g., copyright text)
   - Export the component using a default export

4. **Create the Layout component**
   - Open `src/components/Layout.jsx`
   - Create a functional component called `Layout` that accepts `children` as a prop
   - Import and render the `<Navbar />` at the top
   - Render `{children}` in the middle
   - Import and render the `<Footer />` at the bottom

5. **Import mock data**
   - Open `src/App.jsx`
   - Import the user data from `./mockUser.json`

6. **Compose the app**
   - In `App.jsx`, import the `Layout` and `Homepage` components
   - Wrap `<Homepage />` inside `<Layout>` as a child
   - Pass the imported user object as a prop to Homepage (e.g., `user={mockUser}`)

7. **Display a welcome message**
   - In `Homepage.jsx`, use the props to display a personalized greeting
   - Example output: "Greetings, John"

### Hints

- To import JSON: `import mockUser from './mockUser.json'`
- Access props in the component: `props.user.firstName`
- You can destructure props: `function Homepage({ user })`
- The `children` prop is a special React prop that contains nested elements

### Expected Result

When you run the app, you should see:

- A Navbar at the top
- A welcome message displaying the user's first name from the mock data
- A Footer at the bottom

---

## Exercise 2: State and Form Handling

**Goal:** Learn how to manage component state with `useState`, handle form inputs with `onChange`, and process form submissions with `onSubmit`.

### Steps

1. **Create the ContactForm component**
   - Create a new file `src/components/ContactForm/ContactForm.jsx`
   - Import `useState` from React
   - Create a functional component called `ContactForm`
   - Export the component using a default export

2. **Set up state for form fields**
   - Inside `ContactForm`, create state variables for:
     - `name` (string, initially empty)
     - `email` (string, initially empty)
     - `message` (string, initially empty)
   - Example: `const [name, setName] = useState('')`

3. **Build the form JSX**
   - Return a `<form>` element containing:
     - A text input for name with a label
     - An email input for email with a label
     - A textarea for message with a label
     - A submit button

4. **Connect inputs to state with onChange**
   - Add a `value` attribute to each input, bound to its corresponding state variable
   - Add an `onChange` handler to each input that updates the state

5. **Handle form submission**
   - Create a `handleSubmit` function that:
     - Accepts the event as a parameter
     - Calls `e.preventDefault()` to stop the page from refreshing
     - Logs the form data to the console: `{ name, email, message }`
     - Optionally clears the form by resetting all state values to empty strings
   - Attach this function to the form's `onSubmit` attribute

6. **Add the form to your app**
   - In `App.jsx`, import the `ContactForm` component
   - Render `<ContactForm />` inside the `<Layout>` component (below or instead of Homepage)

7. **Test your form**
   - Fill out all fields and click submit
   - Check the browser console to see the logged form data
   - Verify that the form clears after submission (if you implemented that)

### Hints

- Import useState: `import { useState } from 'react'`
- Controlled inputs require both `value` and `onChange`
- Always call `e.preventDefault()` in form submit handlers to prevent page reload
- You can create a single state object instead of separate variables:
  ```jsx
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  ```

### Expected Result

When you run the app, you should see:

- A form with name, email, and message fields
- Typing in any field updates the displayed value in real-time
- Clicking submit logs the form data to the console and optionally clears the form

## Exercise 3: Routing

**Goal:** Learn how to set up client-side routing with `react-router-dom`, create navigation links, and render different components based on the URL.

### Setup

First, install react-router-dom:

```bash
npm install react-router-dom
```

### Steps

1. **Set up the Router in App.jsx**
   - Open `src/App.jsx`
   - Import `BrowserRouter`, `Routes`, and `Route` from `react-router-dom`
   - Wrap your entire app in `<BrowserRouter>`
   - Inside the `<Layout>` component, use `<Routes>` to define your route configuration

2. **Create route definitions**
   - Add a `<Route>` for the homepage at path `"/"`
   - Add a `<Route>` for the contact form at path `"/contact"`
   - Each route should render its corresponding component using the `element` prop
   - Example: `<Route path="/" element={<Homepage user={mockUser} />} />`

3. **Update the Navbar with Link components**
   - Open `src/components/Navbar/Navbar.jsx`
   - Import `Link` from `react-router-dom`
   - Replace any `<a>` tags with `<Link>` components
   - Use the `to` prop instead of `href`
   - Example: `<Link to="/">Home</Link>`

4. **Add navigation links using Link**
   - Create a link to Home: `<Link to="/">Home</Link>`
   - Create a link to Contact: `<Link to="/contact">Contact</Link>`

5. **Test your routes**
   - Click the navigation links and verify the URL changes
   - Verify the correct component renders for each route
   - Try manually typing URLs in the browser address bar

6. **Create a button that navigates using Link**
   - In the `Homepage` component, add a button that links to the contact page
   - Wrap a `<button>` element inside a `<Link>` component
   - Alternatively, style the `Link` itself to look like a button using CSS

7. **Upgrade to NavLink for active styling in Navbar**
   - Replace `Link` with `NavLink` in your imports
   - Replace `<Link>` components with `<NavLink>` components
   - `NavLink` automatically adds an "active" class when the link matches the current URL
   - Add CSS to style the active state:

8. **Customize NavLink active behavior (optional)**
   - Use the `className` prop with a function to apply custom classes
   - Alternatively, use the `style` prop with a function for inline styles:

### Hints

- `BrowserRouter` must wrap everything that uses routing
- `Routes` is a container for all your `Route` definitions
- Each `Route` needs a `path` and an `element` prop
- Use `Link` instead of `<a>` tags to prevent full page reloads
- The `to` prop on both `Link` and `NavLink` works like `href` on anchor tags
- `NavLink` is like `Link` but adds automatic "active" class when the route matches
- `NavLink` accepts `className` and `style` as functions that receive `{ isActive }`

### Expected Result

When you run the app, you should see:

- A Navbar with clickable links for Home and Contact
- Clicking "Home" navigates to `/` and shows the Homepage component
- Clicking "Contact" navigates to `/contact` and shows the ContactForm component
- The URL in the browser updates without a full page reload
- The Navbar and Footer remain visible on all pages (they're in the Layout)
- If using `NavLink`, the current page's link should have the "active" class applied
