import React, { useEffect, useState } from 'react';
import Header from "./component/Tugas/Header"
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import './App.css';
import Axios from "axios"
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';

const App = () => {

    const [pokemon, setPokemon] = useState([]);
    const [detail, setDetail] = useState("");
    const [species, setSpecies] = useState("");
    const [types, setTypes] = useState([]);
    const [mypokemon, setMypokemon] = useState([]);
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [spesies, setSpesies] = useState("");
    const [tinggi, setTinggi] = useState("");
    const [berat, setBerat] = useState("");
    const [tipe, setTipe] = useState("");
    const [sprites, setSprites] = useState("");

    localStorage.setItem("poke", mypokemon);
    const poke = async () => {
        Axios.get(` https://pokeapi.co/api/v2/pokemon`)
            .then((res) => {
                setPokemon(res.data.results)
                console.log(res.data.results);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    useEffect(() => {
        Pokemon();
        poke();
    }, []);

    const Detail = (name) => {
        Axios.get(` https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((res) => {
                setDetail(res.data.sprites);
                setSpecies(res.data.species);
                setHeight(res.data.height);
                setWeight(res.data.weight);
                setTypes(res.data.types);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const DetailPokemon = (name) => {
        Axios.get(` https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((res) => {
                setSprites(res.data.sprites);
                setSpesies(res.data.species);
                setTinggi(res.data.height);
                setBerat(res.data.weight);
                setTipe(res.data.types);

                // localStorage.setItem("myPokemon",res.data.spesi)
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function Type() {
        return types.map((tipe, idx) => {
            return (
                <>
                    <div>
                        <a key={idx} value={tipe.type.name}>{tipe.type.name}</a>
                    </div>
                </>
            )
        })
    }

    // function Tipes() {
    //     return tipe.map((tip, idx) => {
    //         return (
    //             <>
    //                 <div>
    //                     <a key={idx} value={tip.type.name}>{tip.type.name}</a>
    //                 </div>
    //             </>
    //         )
    //     })
    // }


    function Poke() {
        return pokemon.map((poke, idx) => {
            return (
                <>
                    <div>
                        <a href="#" key={idx} onClick={() => Detail(poke.name)} value={poke.name}>{poke.name}</a>
                    </div>
                </>
            )
        })
    }

    function Pokemon() {
        return mypokemon.map((poke, idx) => {
            return (
                <>
                    <div>
                        <a href="#" key={idx} onClick={() => DetailPokemon(poke.name)} value={poke.name}>{poke.name}</a>
                    </div>
                </>
            )
        })
    }
    // useEffect(() => {

    //     gerak();
    // }, [species]);

    // const gerak = (e) => {
    //     let i = 0;
    //     window.setInterval(function () {
    //         if (i === 0) {
    //             setAnimate(detail.front_default)
    //             // return(detail.front_default)
    //         } else if (i === 1) {
    //             setAnimate(detail.front_shiny)
    //             // return(detail.front_shiny)ccl
    //         } else if (i === 2) {
    //             setAnimate(detail.back_default)
    //             // return (detail.back_default)
    //         } else if (i === 3) {
    //             i = -0;
    //             setAnimate(detail.back_shiny)
    //             // return(detail.back_shiny)
    //         }
    //         i = i + 1

    //     }, 1000);

    // }

    return (
        <div>
            <Header />git
            <Container>
                <Row>
                    <b>LIST POKEMON :</b><br />
                    <Col style={{ border: "20%" }}>{Poke()}</Col>
                    <Col>
                        {detail.length !== 0 && species.length !== 0 ? (

                            <div>
                                <center>
                                    <Card >
                                        <center>
                                            <CardTitle><h2><b>{species.name}</b></h2></CardTitle>

                                            <CardImg style={{ width: "100px" }} src={detail.front_default} />

                                            <Row>
                                                <Col><CardText style={{ textAlign: "left", padding: 5 }}><b>{height}</b></CardText></Col>
                                                <Col><CardText style={{ textAlign: "right", padding: 5 }}><b>{weight}</b></CardText></Col>
                                            </Row>
                                        </center>

                                        <CardBody>
                                            <CardText style={{ textAlign: "left" }}><b>Type</b></CardText><hr />
                                            <CardText style={{ textAlign: "left" }}>{Type()}</CardText>

                                            <Button color="success"
                                                type="submit"
                                                onClick={() => setMypokemon(mypokemon => [...mypokemon, { name: species.name }])}>Get Pokemon</Button>

                                        </CardBody>
                                    </Card>
                                </center>
                            </div>
                        ) : ""}
                    </Col>
                </Row>
            </Container>
            <hr />

            <Container>
                <b>LIST MY POKEMON</b>

                <Row>
                    <Col>{Pokemon()}</Col>
                    <Col>
                        {sprites.length !== 0 && spesies.length !== 0 ? (

                            <div>
                                <center>
                                    <Card >
                                        <center>
                                            <CardTitle><h2><b>{spesies.name}</b></h2></CardTitle>

                                            <CardImg style={{ width: "100px" }} src={sprites.front_default} />

                                            <Row>
                                                <Col><CardText style={{ textAlign: "left", padding: 5 }}><b>{tinggi}</b></CardText></Col>
                                                <Col><CardText style={{ textAlign: "right", padding: 5 }}><b>{berat}</b></CardText></Col>
                                            </Row>
                                        </center>

                                        <CardBody>


                                            <Button color="success"
                                                type="submit"
                                                onClick=""></Button>

                                        </CardBody>
                                    </Card>
                                </center>
                            </div>
                        ) : ""}
                    </Col>
                </Row>
            </Container>
            <hr />
        </div >
    );
}
export default App

