import { Button, Card, Row } from 'react-bootstrap';
import { useState } from "react";


function Project(props) {
    const { name, img, description, link } = props.projectInfo;
    const [showDescription, setShowDescription] = useState(false);

    function toggle() {
        setShowDescription(!showDescription);
    }

    return (
        <div className="Project">
            <Card style={{ width: '18 rem', marginTop: '5 srem' }}>
                <center>
                    <Card.Img variant="top" src={img} onClick={toggle} style={{
                        objectPosition: "50% 50%",
                        objectFit: 'scale-down',
                        borderRadius: 55,
                        width: '15vw',
                        height: '20vh'
                    }} />
                    <Card.Body>
                        <Card.Title style={{ textAlign: "center" }}> {name} </Card.Title>
                        {
                            showDescription &&
                            <Card.Text>
                                {description}
                            </Card.Text>
                        }
                        <Row>
                            <Button className='btn btn-secondary' href={link} target="_blank" >Go to repo</Button>
                        </Row>

                    </Card.Body>
                </center>

            </Card>
        </div >
    );
}

export default Project;