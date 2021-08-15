import { Form, FormControl } from 'react-bootstrap';
import { Component } from 'react'

class Search extends Component {
    state = {
        search: ''
    }

    handleSearch = async (query) => {
        let response = await fetch(`https://remotive.io/api/remote-jobs?search=${query}`)
        if (response.status === 200) {
            let {jobs}= await response.json() // If jobs enclosed within brackets {jobs} the object will be decontructed returning and objecting accessing the 1st level of its contents

            this.setState({
                search: jobs
            })
        }
    }

    render() {
        return (
            <Form className="d-flex ml-auto ms-auto" >
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2 p-2"
                    aria-label="Search"
                    style={{ backgroundColor: "#E58F65", color: "white", outline: "none" }}
                    onChange={(e) => { this.handleSearch(e.target.value) }}
                />
                {/* <Button variant="outline-dark">Search</Button> */}
            </Form>);
    }
}

export default Search;