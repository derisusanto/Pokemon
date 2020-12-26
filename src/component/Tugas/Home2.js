import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Home2 = () => {
  return (
    <div>
      <Jumbotron >
        <h1 className="display-3">Hello</h1>
        <p className="lead">Tampilan ini di buat untuk memenuhi tugas tentang React JS</p>
        <hr className="my-2" />
        <p>Ini merupakan hasil yang sudah di buat oleh diri sendiri</p>
        <p className="lead">
          <Button color="dark">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Home2;
