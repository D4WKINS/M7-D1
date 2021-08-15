import {searchJobs} from './actions'

const searchUser= (state, action) => {
    return{
        type: 'SEARCH_USER',
        payload: action.payload
    }
}

export default searchUser
