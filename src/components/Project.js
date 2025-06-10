import { Button, Card } from 'react-bootstrap';
import { useState } from "react";


function Project(props) {
    const { name, img, description, link } = props.projectInfo;
    const [showDescription, setShowDescription] = useState(false);

    function toggle() {
        setShowDescription(!showDescription);
    }

    return (
        <div className="Project">
            <Card style={{ width: '18 rem' }}>
                <center>
                    <Card.Img variant="top" src={img} onClick={toggle} style={{
                        objectPosition: "50% 50%",
                        objectFit: 'scale-down',
                        borderRadius: 55,
                        width: '20vw',
                        height: '30vh'
                    }} />
                </center>

                <Card.Body>
                    <Card.Title> {name} </Card.Title>
                    {
                        showDescription &&
                        <Card.Text>
                            {description}
                        </Card.Text>
                    }
                    <Button variant="primary" href={link} target="_blank" >Go to repo</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Project;