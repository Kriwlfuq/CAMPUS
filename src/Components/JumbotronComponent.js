import { Button, Jumbotron } from "react-bootstrap";
import React from "react";

const JumbotronComponent = (props) => {
  const redirectToInstagram = () => {
    window.location.assign("https://github.com/Kriwlfuq");
  };

  return (
    <div>
      <Jumbotron>
        <h1>Supp, Welcome and Enjooyy</h1>
        <p></p>
        <p>
          <Button variant="info" onClick={redirectToInstagram}>
            Fikruw
          </Button>
        </p>
      </Jumbotron>
    </div>
  );

};

export default JumbotronComponent;
