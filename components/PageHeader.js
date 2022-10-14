import Card from 'react-bootstrap/Card';

function PageHeader(props) {
    return (
        <>
            <Card className='bg-light'>
                <Card.Body>
                    {props.text}
                </Card.Body>
            </Card>
            <br />
        </>
    )
}

export default PageHeader;

