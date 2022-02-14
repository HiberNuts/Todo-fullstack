import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { Alert, Card, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function App() {
   const [todo, settodo] = useState([]);
   const [value, setvalue] = useState("");
   const [username, setusername] = useState("");
   const [password, setpassword] = useState("");
   const [user, setuser] = useState(null);
   const [passwordRegister, setpasswordRegister] = useState("");
   const [usernameRegister, setusernameRegister] = useState("");

   const [tok, settok] = useState(null);

   // const baseUrl = "https://todo-app-0212.herokuapp.com/todos";
   // const loginUrl = "https://todo-app-0212.herokuapp.com/login";
   // const userUrl = "https://todo-app-0212.herokuapp.com/user";

   const baseUrl = "https://todo-app-0212.herokuapp.com/todos";
   const loginUrl = "https://todo-app-0212.herokuapp.com/login";
   const userUrl = "https://todo-app-0212.herokuapp.com/user";
   // Token shit

   useEffect(() => {
      const loggedUser = window.localStorage.getItem("loggedUser");

      if (loggedUser) {
         const user = JSON.parse(loggedUser);
         setuser(user);
         setToken(user.token);
         if (!user) {
            window.location.reload(false);
         }
         if (user) {
            fetchData(user);
         }
      }
   }, []);

   // useEffect(() => {
   //    fetchData();
   // }, []);

   const setToken = (newToken) => {
      settok(`bearer ${newToken}`);
   };

   async function fetchData(user) {
      try {
         console.log("====================================");
         console.log(user.id);
         console.log("====================================");
         if (!user) {
            window.location.reload(false);
         }

         const fetch = await axios.get(`${baseUrl}/${user.id}`);
         console.log(fetch.data);

         settodo(fetch.data);

         // if (user) {

         //    console.log(user.id);
         //    let flag = false;
         //    fetch.data.map((tod) => {
         //       console.log("====================================");
         //       console.log(tod);
         //       console.log("====================================");
         //       tod.user.map((use) => {
         //          if (use.username === user.username) {
         //             const newTodo = todo.concat(tod);
         //             settodo(newTodo);
         //             console.log(newTodo);
         //          }
         //       });
         //    });

         // }
      } catch (err) {
         window.location.reload(true);
      }
      //change hardcore url  here..............
   }

   const handleRegisterSubmit = async (e) => {
      e.preventDefault();
      try {
         if (usernameRegister && passwordRegister) {
            const data = await axios.post(userUrl, {
               username: usernameRegister,
               password: passwordRegister,
            });

            console.log(data);
            setusernameRegister("");
            setpasswordRegister("");
         }
      } catch (err) {
         console.log(err);
      }
   };

   const handleSubmit = (e) => {
      // addTodo(value);
      e.preventDefault();
      let text = value;
      const config = { headers: { Authorization: tok } };

      axios.post(baseUrl, { text }, config).then((res) => {
         window.location.reload(true);
         fetchData(user);
         setvalue("");
         console.log(res);
      });
      // try {
      //    await axios.post(baseUrl, { text }, config);
      //    fetchData(user);
      //    setvalue("");
      // } catch (err) {
      //    console.log(err);
      // }

      //    window.reload(true);
      //    fetchData(user);
      //    setvalue("");
      //    console.log(res);
      // });
   };

   const removeTodo = async (id, e) => {
      e.preventDefault();
      await axios.delete(`${baseUrl}/${id}`);
      fetchData(user);
   };

   const UpdateTodo = async (e, id, textt) => {
      e.preventDefault();
      let text = prompt("Type the corrected form ");
      await axios.put(`${baseUrl}/${id}`, { text });

      fetchData(user);
   };
  
   const handleLoginSubmit = async (event) => {
      event.preventDefault();
      try {
         console.log("logging in with", username, password);
         const data = await axios.post(loginUrl, { username, password });
         window.localStorage.setItem("loggedUser", JSON.stringify(data.data));
         setToken(data.data.token);
         setuser(data.data);

         setusername("");
         setpassword("");

         fetchData();
      } catch (error) {}
   };

   const handleLogout = (event) => {
      event.preventDefault();
      window.localStorage.removeItem("loggedUser");
      window.location.reload(false);
   };
   // for token and shit:

   return (
      <div className="App">
         {user === null ? (
            <div className="auth">
               <div className="register">
                  <h3>Register</h3>{" "}
                  <Form onSubmit={handleRegisterSubmit}>
                     <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                           class="padding"
                           type="name"
                           placeholder="enter your username"
                           onChange={(e) => setusernameRegister(e.target.value)}
                        />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                           class="padding"
                           onChange={(e) => setpasswordRegister(e.target.value)}
                           type="password"
                           placeholder="Password"
                        />
                     </Form.Group>
                     <Button variant="primary" type="submit">
                        Submit
                     </Button>
                  </Form>
               </div>
               <div className="login">
                  <h3>Login</h3>
                  <Form onSubmit={handleLoginSubmit}>
                     <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                           type="name"
                           placeholder="enter your username"
                           onChange={(e) => setusername(e.target.value)}
                        />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                           onChange={(e) => setpassword(e.target.value)}
                           type="password"
                           placeholder="Password"
                        />
                     </Form.Group>
                     <Button variant="primary" type="submit">
                        Submit
                     </Button>
                  </Form>
               </div>
            </div>
         ) : (
            <Card>
               <Card.Body className="d-flex justify-content-between">
                  Logged in as {user.username}
                  <Button variant="danger" onClick={handleLogout}>
                     Logout
                  </Button>
               </Card.Body>
            </Card>
         )}

         <div className="top">
            <h2 className="top-header">Todo list</h2>
            <form
               className="top-form"
               onSubmit={(e) => {
                  handleSubmit(e);
               }}
            >
               <input
                  className="top-input"
                  type="text"
                  value={value}
                  onChange={(e) => setvalue(e.target.value)}
                  placeholder="Enter a task..."
               />
               <Button type="submit" variant="outline-success">
                  ✓
               </Button>{" "}
            </form>
         </div>

         {todo.length > 0 &&
            todo.map((t) => (
               <Card key={t.id} style={{ width: "100%" }}>
                  <Card.Body className="task">
                     <Card.Title className="textTitle">{t.text}</Card.Title>

                     <div className="buttons">
                        <Button
                           variant="outline-primary"
                           onClick={(e) => UpdateTodo(e, t.id, t.text)}
                        >
                           ✎
                        </Button>
                        <Button
                           className="removeButton"
                           variant="outline-danger"
                           onClick={(e) => removeTodo(t.id, e)}
                        >
                           ✕
                        </Button>
                     </div>
                  </Card.Body>
               </Card>
            ))}
      </div>
   );
}

export default App;
