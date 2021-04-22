import React,{ useState } from 'react';
import  styled  from  'styled-components';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"
import parse from "html-react-parser"


function BlogUi(props) {
  const [isOpen, setOpen] = useState(false);
   const toggleMod = () => { 
    setOpen(!isOpen)
 }
  const setText = (data) => {
    props.savePostContent(parse(data))
  }

  const Button = styled.button`
        flex:0 0 auto;
        background-color: #a33450;
        color: #ffffff;
        font-size: 1.2em;
        border: none;
        border-radius: .3em;
        padding:.5em;
        margin: .3em;
        cursor: pointer;
        &:hover {
          background-color: #939633;
        }
      `;
  return (
    <div>
    <div className="input-placeholder">
    <span className="fa fa-search "></span>
    <input  type="text" value={props.searchItem} placeholder="Search..." onChange={props.handleSerch}/>
    <button className="fa fa-times" onClick={props.clearText}></button>
</div>
<div className="button-container" >
    <Button onClick={toggleMod} >New Post</Button>
    <Button onClick={props.posts} >Published</Button>
 </div>
  {isOpen ? 
  <div className="leftsection">  
          <div className="inputfield">
          <input  className="input-highlight" value={props.title} type="text" placeholder="Title" onChange={props.savePostTitle} /></div>
          <div className="editer-container">
              <div className="editor">
              <CKEditor
              editor={ClassicEditor}
              onChange={(event,editor) => {
                //console.log(editor.getData())
                  const data = editor.getData()
                  setText(data)
              }}
              />
              </div>
          </div>
          <Button onClick={() => { props.savePost();toggleMod();}} >Publish Post</Button>
  </div> 
: null}
      
    </div>
  )
}

export default BlogUi

