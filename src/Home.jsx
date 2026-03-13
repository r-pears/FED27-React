import {useContext, useEffect, useState} from "react";
import { About } from "./About";
import {CharacterContext} from "./Context/CharacterContext";

export function Home() {
  // user state with nested object
  const [user, setUser] = useState({
    username: "John",
    age: 20,
    address: {
      city: "New York",
      street: "Main Street 123",
    },
  });
  // const [characters, setCharacters] = useState([]);
  const { characters, setCharacters } = useContext(CharacterContext);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const res = await fetch("https://swapi.info/api/people");
        const data = await res.json();
        setCharacters(data);
      } catch (error) {
        console.error("Failed to fetch characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  // function handleFormUpdates which updates the user state based on the input fields in the form. It uses the spread operator to create a new user object with the updated values from the form inputs. The name attribute of the input fields is used to determine which property of the user object to update.
  function handleFormUpdates(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  function handleNameUpdate(event) {
    setUser({ ...user, name: event.target.value });
  }

  function handleAgeUpdate(event) {
    setUser({ ...user, age: event.target.value });
  }

  // spread operator in vanilla JS
  // const arr = [1, 2, 3, 4, 5]
  // const copiedArr = [...arr]
  // const newArray = [100, 99, 98, ...arr]

  const userIsSomeone = {
    name: "Jane",
    age: 21,
    hasDog: true,
  };

  // sends a POST request to the backend with the user data when the form is submitted. The fetch function is used to make the request, and the user object is stringified and sent in the body of the request. The Content-Type header is set to application/json to indicate that the request body contains JSON data.
  function submitForm(event) {
    event.preventDefault();
    fetch("http://localhost:8080/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  }

  if (characters.length === 0) {
    return <h1>Loading...</h1>;
  }

  //   return (
  //     <>
  //       <About user={user} />
  //       <form>
  //           <label htmlFor="username">Name</label>
  //             <input
  //               id="username"
  //               type="text"
  //               name="username"
  //               placeholder="Name"
  //               onChange={handleFormUpdates}
  //             />
  //         <input
  //           type={"text"}
  //           name={"age"}
  //           placeholder={"Age"}
  //           onChange={handleFormUpdates}
  //         />
  //         <input type={"submit"} value={"Submit"} onClick={submitForm} />
  //       </form>
  //     </>
  //   );

  return (
    <div>
      <h1>Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.name}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}
