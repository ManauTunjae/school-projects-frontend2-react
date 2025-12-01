import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newTodo, setNewTodo] = useState("");
  // Hämta users från localStorgae eller tom array
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  // Spara inloggad användare (null = ingen är inloggad)
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")) || null
  );
  // Uppdatera localStorage när 'users' ändras
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  // Uppdatera localStorage när inloggad användare 'loggedInUser' ändras
  useEffect(() => {
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
  }, [loggedInUser]);
  // Register ny användare funktion
  const registerNewUser = () => {
    // Skapa ny användare
    let newUser = {
      username: username,
      password: password,
      todo: [],
    };
    setUsers([...users, newUser]);
    console.log(`User: ${username} is registered!`);
    setUsername("");
    setPassword("");
  };
  // Logga in funktion
  const isUser = () => {
    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      setLoggedInUser(foundUser);
    } else {
      alert("User is not exist! Please register.");
    }
  };
  // Logga ut funktion
  const logOut = () => {
    setLoggedInUser(null);
    setUsername("");
    setPassword("");
  };
  // Add todo funktion
  const addTodo = () => {
    if (!newTodo) return;
    // Spread kopiera användare
    const updatedUser = [...users];
    // Hitta index på inloggad user
    const index = updatedUser.findIndex(
      (u) => u.username === loggedInUser.username
    );
    // Lägg till todo på rätt användare
    updatedUser[index].todo.push(newTodo);
    //uppdarera users state
    setUsers(updatedUser);
    // Uppdatera inloggad användare med nya todos
    setLoggedInUser(updatedUser[index]);
    // Töm input
    setNewTodo("");
  };

  return (
    <div>
      <h1>Local Storage inloggning WEBB25</h1>

      {!loggedInUser && (
        <div className="inputContainer">
          <label htmlFor="username">
            <strong>Username: </strong>
            <input
              type="text"
              id="username"
              value={username}
              placeholder="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </label>

          <label htmlFor="password">
            <strong>Password: </strong>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>

          <div className="btnContainer">
            <button className="btnRegidter" onClick={registerNewUser}>
              Register
            </button>
            <br />
            <button className="btnLogIn" onClick={isUser}>
              Log in
            </button>
          </div>
        </div>
      )}

      {loggedInUser && (
        <div className="loggedInContainer">
          <h2>Welcome, {loggedInUser.username}!</h2>

          <button onClick={logOut} className="loggedOutBtn">
            Log out
          </button>

          <h3>Your Todo List</h3>
          <ul className="todoListContainer">
            {loggedInUser.todo.map((todo, i) => (
              <li key={i}>{todo}</li>
            ))}
          </ul>

          <input
            type="text"
            placeholder="New todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={addTodo} className="addTodoBtn">
            Add new todo
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
