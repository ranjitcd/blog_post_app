import React,{ useEffect, useState} from 'react';
import { connect } from 'react-redux';  
import {postsShowing, addpost} from '../redux/action/Action';
import BlogUi from './BlogUi';


const mapStateToProps = state => ({  
    posts: state.posts  
});

const mapDispatchToProps = dispatch => ({
    postsShowing: () => dispatch(postsShowing()),
    addpost:(data) =>dispatch(addpost(data))
});

function BlogPost(props) {
    const [id] = useState(0);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [searchItem, setSearch] = useState("");
    const [postShow, setPost] = useState(false);

    useEffect(() =>{
        props.postsShowing()
    },[]) 

    let searchedData = props.posts.filter((data) => {
        return data.title.toLowerCase().includes(searchItem.toLowerCase())
    });

    const savePost = () => {  
        if (title && text && !id) {  
          const createNewposts = {  
            id: Math.floor(Math.random() * (999 - 100 + 1) + 100),  
            title: title,  
            text: text,  
          };  
          props.addpost(createNewposts);  
        } else if (title && text && id) {  
          console.log("Enter content is already present"); 
        } else {
          alert('Enter the correct Blog Details.');  
        }  
    }  

    const clearText = () =>{
        setSearch('')
    }
          
    const posts = () =>{
        setPost(!postShow)
    }

    const handleSearch = e =>{
        setSearch(e.target.value)  
    }

    const savePostTitle = e =>{
        setTitle(e.target.value)
    }

    const savePostContent = data =>{
        setText(data)
    }
    return (
        <div>
        <BlogUi 
         posts= {posts}
         handleSerch= {handleSearch}
         savePostTitle= {savePostTitle}  
         savePostContent= {savePostContent}
         clearText = {clearText} 
         savePost= {savePost}
         searchItem = {searchItem}
          /> 
         
         <article>
                    {postShow && searchedData && searchedData.map((data, index) => {  
                            return <section key={index}>
                                    <h1>{data.title}</h1>
                                    <p>{data.text}</p>
                                </section>
                            })}  
                </article>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost)

