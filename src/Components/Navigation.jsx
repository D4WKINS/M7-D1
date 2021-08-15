import Search from './Search.jsx'
import {Navbar, Nav} from 'react-bootstrap'
import {Component} from 'react'
import {withRouter,Link} from 'react-router-dom'

class Navigation extends Component {
    state = {
      search: ''
      }
    handleSearch(query) {
      this.setState({search: query})
      this.props.searchQuery(this.state.search)
    
    }

    render() { 
        return ( <Navbar className="px-5" style={{backgroundColor:"rgb(240,240,240)"}} expand="lg">
        <Navbar.Brand href="#" style={{color:"#E58F65",fontFamily:"Arial", fontWeight:"600",letterSpacing:"0.1em"}}>REMOTIVE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="ms-auto" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-0 my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" className="nav-links" href="/">Home</Link>

          </Nav>
         <Search query={(query)=> this.handleSearch(query)}/>
        </Navbar.Collapse>
      </Navbar> );
    }
}
 
export default withRouter(Navigation);