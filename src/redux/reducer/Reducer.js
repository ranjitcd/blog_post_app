import  { POSTS_SHOWING }from '../index';
const initialstate = {  
    posts: [  
        { id: 1, title: "My Blog Post", text: "For more details about my blog, please refer the about page" },  
       
    ]  
}; 

const reducer = (state = initialstate, action) => {  
    switch (action.type) {  
        case POSTS_SHOWING:  
            return {  
                ...state  
            };
        case 'ADD_POSTS':    
            return {    
                ...state,    
                posts: state.posts.concat(action.payload)    
            };  
        default:  
            return state;  
    }  
};  
  
export default reducer; 