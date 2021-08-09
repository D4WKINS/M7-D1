import {Component} from 'react'
class Home extends Component {
    state = { 
        allJobs: []
     }

    fetchJobs = async() => {
        let response = await fetch(" https://remotive.io/api/remote-jobs")
        if(response.status === 200){
        let jobs = await response.json()
        jobs = jobs.jobs
        return jobs
        }
    }
    async componentDidMount(){
        this.setState({allJobs:await this.fetchJobs()})
        console.log(this.state.allJobs)
        console.log(this.state.allJobs.length)
      this.state.allJobs.forEach(job => console.log(job))
    }
    render() { 
        return ( <>
        </> );
    }
}
 
export default Home;