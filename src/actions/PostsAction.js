import {SET_CORD_SEARCH,RESET_CORD_SEARCH,RESET_CORD_POSTS,GET_SINGLE_POST, ADD_NEW_POST ,ADD_ONE_TO_POSTS,REMOVE_ONE_TO_POSTS,RESET_SHOW_POSTS,SET_CORD_POSTS} from '../constants/PostsConstants'

export const getSinglePost = (postsId)=>{
    return {
        type:GET_SINGLE_POST,
        payload:postsId
    }
}

export const addNewPost = (posts)=>{
    return {
        type:ADD_NEW_POST,
        payload:posts
    }
}
export const addOneToPosts = ()=>{
    return {
        type:ADD_ONE_TO_POSTS,
        payload:1
    }
}

export const removeOneToPosts = ()=>{
    return {
        type:REMOVE_ONE_TO_POSTS,
        payload:1
    }
}

export const resetShowPosts = ()=>{
    return {
        type:RESET_SHOW_POSTS,
        payload:1
    }
}

export const resetMainCord = ()=>{
    return {
        type:RESET_CORD_POSTS,
        payload:1
    }
}

export const setMainCord = (cords)=>{
    return {
        type:SET_CORD_POSTS,
        payload:cords
    }
}

export const resetSearchCord = ()=>{
    return {
        type:RESET_CORD_SEARCH,
        payload:200
    }
}

export const setSearchCord = (cords)=>{
    return {
        type:SET_CORD_SEARCH,
        payload:cords
    }
}

