import { Col, Form, Row, Badge } from "react-bootstrap";
import TCard from "../components/Card";
import React, { useEffect, useState } from 'react';
import * as service from '../services/jokeService'
import { useNavigate } from "react-router-dom";

function JokeList() {


    let navigate = useNavigate();

    let [categories, setCategories] = useState([]);
    let [jokes, setJokes] = useState([]);
    let [jokeCategory, setJokeCategory] = useState([]);
    let [count, setCount] = useState(10);

    useEffect(() => {
    }, [categories, jokes]);

    useEffect(() => {
        service.getCategories().then(res => {
            setCategories(res.value);
        });
    }, []);

    useEffect(() => {
        service.getRandomJokes(count, jokeCategory).then(res => {
            setJokes(res.value);
        })
    }, [count, jokeCategory]);

    function addJokeCategory(event) {
        const found = jokeCategory.find(item => item === event.target.value);
        if (found) {
            return;
        }
        setJokeCategory([...jokeCategory, event.target.value])
        event.target.value = ""
    }

    function removeCategory(category) {
        const found = jokeCategory.find(item => item == category)
        const index = jokeCategory.indexOf(found);
        jokeCategory.splice(index, 1);
        setJokeCategory([...jokeCategory])
    }

    function onSetCount(event) {
        const countNumber = parseInt(event.target.value)
        if (!countNumber) {
            setCount(0);
            return;
        }
        setCount(countNumber);
    }

    return (
        <div className="m-5 mt-4">
            <>
                <div>
                    <Row bsPrefix="row align-items-end mb-3 justify-content-between">
                        <Col bsPrefix="col-4">
                            <Form.Label htmlFor="categories-filter">Categorias</Form.Label>
                            <Form.Select size="sm" id="categories-filter" onChange={addJokeCategory}>
                                <option value="">Seleciona as categorias</option>
                                {categories.map((item, index) =>
                                    <option key={index} value={item}>{item}</option>
                                )}
                            </Form.Select>
                        </Col>
                        <Row bsPrefix="row col">
                            {jokeCategory.map((item, index) =>
                                <Col bsPrefix="col flex-grow-0" key={index}>
                                    <Badge pill bg="secondary" className="text-capitalize">
                                        {item}
                                        <span className="px-2 clickable" onClick={() => removeCategory(item)}>X</span>
                                    </Badge>
                                </Col>
                            )}
                        </Row>

                        <Col bsPrefix="col-1">
                            <Form.Group>
                                <Form.Control type="number" value={count} onInput={onSetCount} />
                            </Form.Group></Col>
                    </Row>
                </div>
            </>
            <Row bsPrefix="row">
                {jokes.map((item, index) =>
                    <Col key={index} bsPrefix="col-3 mb-3">
                        <TCard textContent={item.joke} categories={item.categories} callback={() => navigate('/joke/'+item.id)}/>
                    </Col>
                )}
            </Row>
        </div>
    )
}

export default JokeList;