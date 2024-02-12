import React ,{ useEffect, useRef, useState }  from 'react'
import { AiFillFolderAdd } from "react-icons/ai";
import './Imagecomponent.css'
import Imagedisplaycomponent from './Imagedisplaycomponent';


const Imageuploadcomponent = () => {
    const [image,setImage] = useState(null)
    const inputRef=useRef(null)
    const [url,setUrl] = useState([])
    const HandlImageclick = () =>{
    inputRef.current.click()
   
    }
    const Handleimagechange = (event) =>{
        const files = event.target.files[0];
        setImage(files)
       
    }
  
 return (
    <div className='containerimg' >
        
                    <div className="containerimage" >
                     <div className='imageupload' onClick={HandlImageclick}>
                      <p className="imguploadtxt" >upload images</p>
                      <input
                  className=""
                   style={{ display: 'none' }}
ref={inputRef}
                  type="file"
                  name="image"
                  accept="image/*" 
                  onChange={Handleimagechange}
                  />
                  
                    </div>
                  
                    </div>

               
            
            
    
<Imagedisplaycomponent image={image} url={url}/>
    </div>
  )
}

export default Imageuploadcomponent