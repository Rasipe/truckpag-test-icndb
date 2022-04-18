import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import TCard from "../components/Card";
import * as service from '../services/jokeService'

function JokeDetail() {

    let { id } = useParams();
    const [joke, setJoke] = useState("")

    useEffect(() => {
        service.getJoke(id).then(res => {
            setJoke(res.value);
        })
    }, [])

    return (
        <Row className="m-5 mt-4 h-75 align-items-stretch">
            <Col>
                <Card className="h-100">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                        <Card.Text>
                            {joke.joke}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default JokeDetail;