import {Form, FormControl} from 'react-bootstrap';
import {Component} from 'react'

class Search extends Component {
    state = {  
        search: '' 
    }

    handleSearch=(query)=>{
        this.setState({search:query})
        if(this.state.search){
            this.props.query(this.state.search)
        }
    }
    render() { 
        return ( 
             <Form className="d-flex ms-auto" >
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2 p-2"
          aria-label="Search"
          style={{backgroundColor:"#E58F65",color:"white",outline:"none"}}
          onChange={(e)=>{this.handleSearch(e.target.value)}}
        />
        {/* <Button variant="outline-dark">Search</Button> */}
      </Form> );
    }
}
 
export default Search;