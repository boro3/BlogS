import {Testdata} from '../Testdata'
import {SET_CORD_SEARCH,RESET_CORD_SEARCH,RESET_CORD_POSTS,GET_SINGLE_POST, ADD_NEW_POST ,ADD_ONE_TO_POSTS,REMOVE_ONE_TO_POSTS,RESET_SHOW_POSTS,SET_CORD_POSTS} from '../constants/PostsConstants'

const initialState = {
    posts: Testdata,
    singlePost:'',
    numOfPages: parseInt(Testdata.length % 5) > 0 ? parseInt(Testdata.length / 5)+1 : parseInt(Testdata.length / 5),
    currentPage:1,
    mainPageCord:0,
    searchCord:200
}

const PostsReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_SINGLE_POST: {
            let temPost = undefined
            state.posts.map(item => {
                if(item.id===action.payload){
                    temPost=item
                }
                return null
            })
            return {
                ...state,
                singlePost: temPost
            }
        }

        case ADD_NEW_POST: {            
            return {
                ...state,
                posts:[action.payload,...state.posts]
            }
        }
        case ADD_ONE_TO_POSTS: {            
            return {
                ...state,
                currentPage:state.currentPage+1
            }
        }

        case REMOVE_ONE_TO_POSTS: {            
            return {
                ...state,
                currentPage:state.currentPage-1
            }
        }

        case RESET_SHOW_POSTS: {            
            return {
                ...state,
                currentPage:1
            }
        }

        case SET_CORD_POSTS: {            
            return {
                ...state,
                mainPageCord:action.payload
            }
        }

        case RESET_CORD_POSTS: {            
            return {
                ...state,
                mainPageCord:200
            }
        }

        case RESET_CORD_SEARCH: {            
            return {
                ...state,
                searchCord:200
            }
        }

        case SET_CORD_SEARCH: {            
            return {
                ...state,
                searchCord:action.payload
            }
        }

        default: return state;
    }
}

export default PostsReducer;