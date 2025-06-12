import Project from "./Project";
import { Container, Row, Col } from 'react-bootstrap';

function ProjectList() {
    const projects = [
        {
            id: 1,
            name: "Vue.js",
            img: "img_vue.png",
            description: "This is a Vue framework test project forked from an original repository. It requires round profile pictures, employee names with email links, responsive design, and quick start instructions. To set up, install libraries with yarn, run the storybook server with yarn storybook, run the website server with yarn dev, and build the release with yarn build.",
            link: "https://github.com/dainan78910jj/test_userlist"
        },
        {
            id: 2,
            name: "Python & AI",
            img: "img_lexicon.gif",
            description: "This is my private code repo, which save the daily study in Python & AI together with the teachers in Lexicon. The course contains Python fundamentals, SQL/NoSQL database, basic frontend, AI/Machine learning/Deep learning, IT security and Azure cloud sections.",
            link: "https://github.com/dainan78910jj/python_ai_2025_daily_study"
        },
        {
            id: 3,
            name: "React.js",
            img: "img_react.png",
            description: "This is a on-going frontend project using React framework. The repository is initialized from React Boilerplate, and modified according project requirement. It also using React Bootstrap for styling. It is part of the education of Python & AI course from Lexicon.",
            link: "https://github.com/dainan78910jj/one_week_project_frontend"
        }
    ]

    return (
        <div className="ProjectList mt-5">

            <Container>
                <Row>
                    {projects.map((p) => <Col className="col-lg-4 col-12" key={p.id}> <Project projectInfo={p} /></Col>)}
                </Row>
            </Container>

        </div>
    );
}

export default ProjectList;