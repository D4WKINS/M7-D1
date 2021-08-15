import {Component} from 'react'
import SingleJob from './SingleJob.jsx'
import {CardGroup,Container} from 'react-bootstrap'


class Home extends Component {
    state = { 
      Jobs: []
     }

    fetchJobs = async() => {
        let response = await fetch(" https://remotive.io/api/remote-jobs?limit=10")
        if(response.status === 200){
        let jobs = await response.json()
        jobs = jobs.jobs
        return jobs
        }
    }

    fetchJobsBySearch = async(query) => {
        let response = await fetch(`https://remotive.io/api/remote-jobs?search=${query}`)
        if(response.status === 200){
        let jobs = await response.json()
        jobs = jobs.jobs
       
        return jobs
        }
    }

    async componentDidMount(){
        if(this.state.searchQuery){
            this.setState({jobs:await this.fetchBySearch(this.props.searchQuery)})
        }
        else{
        this.setState({jobs:await this.fetchJobs()})
        }
        console.log(this.state.jobs)
        // console.log(this.state.jobs.length)
    //   this.state.jobs.forEach(job => console.log(job))
    }

    async componentDidUpdate(prevProps, prevState){
        if(prevProps.searchQuery !== this.props.searchQuery){
            console.log("searchQuery changed")
            this.fetchJobsBySearch(this.props.searchQuery)
        }

        // if(prevState.jobs !== this.state.jobs){
        //     console.log("jobs changed")
        // }

    }
    render() { 
        return ( 
        <>
                {
                    this.state.jobs && 
                    <Container className="mt-3">
                        <CardGroup >
                            {this.state.jobs.map(job => 
                                        <SingleJob md={6} lg={3} key={job.id} job={job}/>
                                )}
                        </CardGroup>
                    </Container>
                }
        </>
         );
    }
}
 
export default Home;