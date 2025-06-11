
import { Container, Button } from 'react-bootstrap';

function Header(props) {

    return (
        <div className="Header">
            <div className="px-4 py-5 text-center">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <h1 className="display-5 fw-bold text-body-emphasis">Welcome to Dainan's portfolio website!</h1>
                        <div className="col-col-lg-6 mx-auto-auto">
                            <p className="lead mb-4">
                                This is a course project trying to practise the skills of bootstrap by building a portolio webpage. I added the framework of React to this project also.
                            </p>
                            <img className="d-block mx-auto" src="https://media.licdn.com/dms/image/v2/C5603AQGVXOFAgjQQJA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1644353207795?e=1755129600&v=beta&t=HOBhxvupYvxuUKAoBJ-_bXYoHG75-aSz3JoILcpTLQQ" />
                        </div>
                    </div>
                </div>
            </div>

            <Container>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <Button className="btn btn-secondary btn-lg px-4 gap-3" variant="primary" onClick={props.changeColorMode} >
                        Change color mode
                    </Button>
                </div>
            </Container>
        </div >
    );
}

export default Header;