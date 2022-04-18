import { Badge, Card } from "react-bootstrap";

function TCard(props) {
    let cardClass = props.callback ? " h-100 clickable" : "h-100"
    return (
        <Card className={cardClass} onClick={props.callback}>
            <Card.Body>
                <Card.Text>
                {props.textContent}
                </Card.Text>
                {
                    props.categories && props.categories.map((item, index) => <Badge pill bg="secondary" className="text-capitalize" key={index}> {item} </Badge>)
                }
            </Card.Body>
        </Card>
    )
}

export default TCard;