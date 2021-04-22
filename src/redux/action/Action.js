import { POSTS_SHOWING, ADD_POSTS } from '../index'

export const postsShowing = () => ({
    type: POSTS_SHOWING
});
export const addpost = (data) => ({  
     type: ADD_POSTS,  
     payload: data  
        
}); 
