import { useState, ChangeEvent, FormEvent } from "react";
import { Alert, Spinner, Form, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

const Bootstrap = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // if you're going to write the handler for the onChange separately,
  // like in this case, you'll have to provide the type of the e manually
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Hurray! We've submitted");

    //put the user back to the homepage "/"
    navigate("/");
  };

  return (
    <div>
      <Alert variant="success">{location.pathname}</Alert>
      <Spinner animation="border" variant="danger" />

      <hr />
      <Form
        onSubmit={handleSubmit} // when extracting the function definition elsewhere it will be up to you to pass also the types for the Event
        // onSubmit={e => {
        //   e.preventDefault();

        //   console.log("Hurray! We've submitted");
        // }}

        // in this case though the type React.ChangeEvent is properly INFERED by its context
      >
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            // onChange={e => setEmail(e.target.value)}
            onChange={handleEmailChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Bootstrap;
