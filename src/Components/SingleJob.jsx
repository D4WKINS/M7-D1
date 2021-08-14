import {Card,Col} from 'react-bootstrap'
import {useEffect} from 'react';
const { htmlToText } = require('html-to-text');



const SingleJob = (props) => {
useEffect(()=>{
console.log(props.job);
},[props.job])
    return ( 
        <>
        <Col className="my-3 px-3" xs={12} md={6} lg={3}>
        <Card className="h-100">
            <Card.Body>
                <Card.Title>{props.job.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                {htmlToText(`${props.job.description}`)}
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
        </Col>
        </>
     );
}
 
export default SingleJob;