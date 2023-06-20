import '../App.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';

const Search = () => {
    return (
        <Container>
            <Form className="search">
                <Form.Control
                    type="search"
                    placeholder="헤어스타일 검색"
                    className="search_bar"
                    aria-label="Search"
                />
                <Button className='btn' variant="light">
                    <BiSearch />
                </Button>
            </Form>
        </Container>
    )
};

export default Search;