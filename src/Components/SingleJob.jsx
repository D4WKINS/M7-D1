import {Card,Col} from 'react-bootstrap'
import {useEffect} from 'react';



const SingleJob = (props) => {
useEffect(()=>{
console.log(props.job);
},[props.job])
    return ( 
        <>
        <Col className="my-3 px-3" xs={12} md={6} lg={6}>
        <Card className="h-100">
            <Card.Body>
                <Card.Title>{props.job.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              
                <div dangerouslySetInnerHTML={{__html: props.job.description.substring(0,420) + "..."}} />
              
                <Card.Link href="#">Card &amp; Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
        </Col>
        </>
     );
}
 
export default SingleJob;