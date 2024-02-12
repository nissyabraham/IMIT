import React, { useState, useEffect } from "react";
import "./Imagedisplay.css";
import { CgProfile } from "react-icons/cg";
import { FaPlusCircle } from "react-icons/fa";
import defaultimage from "./image/defaultimage.jpg";
import Swal from "sweetalert2";
import Popupcomponent from "./Popupcomponent";
import Modalreply from "./Modalreply";
const Imagedisplaycomponent = ({ image, url }) => {
  const [openmodal, SetOpenmodal] = useState(false);
  const [replyopenmodal, SetReplyOpenmodal] = useState(false);
  const [comments, setComments] = useState([]);
  const [replays, setReplays] = useState([]);
  const [likedImage, setLikedImage] = useState(null);
  const [likedComments, setLikedComments] = useState([]);

  const handleCommentSubmit = (newComment) => {
    setComments([...comments, newComment]);
    SetOpenmodal(false);
  };

  const handleReplySubmit = (newreply) => {
    setReplays([...replays, newreply]);
    SetReplyOpenmodal(false);
  };
  useEffect(() => {
    setComments([]);
  }, [image]);

  const handleLikeClick = () => {
    setLikedImage(image);
    const commentsHTML = `
    <div style="
    width: 350px; 
    height:300px;
    padding-top:5px;
    background-color: #E1E1E133;
    border-color:#E1E1E133 ;
    margin-top: 10px;
    border-radius: 20px;
    margin-left: 10px;
    border-color: #fae5e5;
    margin-bottom:10px;
    ">
      ${comments
        .map(
          (comment) => `
      <p><span style="display: flex;
      justify-content: start;margin-left:5px;">${comment.name}</span></p>
        <div style="
        color:black ;
width:250px;

background-color:#ECC8AE;
border-radius: 0px 30px 30px 30px;
margin-left: 10px;
margin-bottom: 1px;">
<span style="
display: flex;
justify-content: flex-start;">
         
          <p style="color: black; padding-left: 20px; ">${comment.comment}</p>
        </div>
      `
        )
        .join("")}
        ${replays
          .map(
            (replay) => `
        <p><span style="display: flex;
        justify-content: start;margin-left:30px;">${replay.name}</span></p>
          <div style="
          color:black ;
  width:250px;
  
  background-color:#ECC8AE;
  border-radius: 0px 30px 30px 30px;
   margin-left: 30px;
  margin-bottom: 1px;">
  <span style="
  display: flex;
  justify-content: flex-start;">
           
            <p style="color: black; padding-left: 20px; ">${replay.reply}</p>
          </div>
        `
          )
          .join("")}
    </div>
  `;

    Swal.fire({
      html: `
      
        <div style="display: flex; border: 1px solid red; ">
        
          <img
            src="${image ? URL.createObjectURL(image) : defaultimage}"
            alt="Custom image"
            style="width: 350px; height: 350px;padding-top:10px;padding-left:10px;padding-bottom:10px"
          />
          <div>
          <button id="closeModalBtn" style="font-size: 15px;width: 22px;margin-top:10px;
          border-style: solid;
          margin-top:0px;
         margin-left:358px;
        
         padding-bottom: 10px;
          background-color:gray;
          border-width: 1px;
          border-radius:8px 0px 0px 30px;
          border-color: gray;
          cursor: pointer;

          color:white;
          padding-top: 5px;">x</button>
          
          <div style="display:flex;">
          
          <span style=" margin-left: 10px;margin-right:150px;font-size: 20px;margin-top:10px;">Asha sunny</span>
          <div style="font-size: 15px;width: 100px; height: 22px;margin-top:10px;
          border-style: solid;
          border-width: 1px;
          border-radius: 10px;
          border-color: red;
          background-color:white;
          color: red;
          padding-top: 5px;">report</div>
            
            </div>
           
            <hr style=" border-style: solid;
            border-width: 1px;
            border-color: #000000;
            margin-left:10px;
            margin-bottom:15px;
            margin-right:15px;
            ">
            <span style="
          padding-left:60px;
          padding-right:60px;
          padding-top:5px;
          padding-bottom:5px;
          
           border-width: 1px;
           border-color: red;
           color: red;
           background-color:white;
           border-radius: 15px;
           box-shadow: none;
           margin-right:20px;
           box-shadow: 1px 0px 0px white;
          
          border-style: solid;
          cursor: pointer;">
          <span style="">like</span>
          </span>
          <span style=" 
          
          padding-left:40px;
          padding-right:40px;
          padding-top:5px;
          padding-bottom:7px;
           border-width: 1px;
           border-color: red;
           color: red;
           background-color:white;
           border-radius: 15px;
           box-shadow: none;
       
           box-shadow: 1px 0px 0px white;
          
          border-style: solid;
          cursor: pointer;">
            <span>comment</span>
            </span>
            ${commentsHTML}
          </div>
        </div>
      `,
      width: "800px",
      imageAlt: "Custom image",
      showConfirmButton: false,
    });
    document.getElementById("closeModalBtn").addEventListener("click", () => {
      Swal.close();
    });
  };

  const totalCommentsAndReplies = comments.length + replays.length;

  return (
    <div className="containerimg">
      {openmodal && (
        <Popupcomponent
          closemodal={SetOpenmodal}
          onSubmit={handleCommentSubmit}
        />
      )}
      {replyopenmodal && (
        <Modalreply
          closemodal={SetReplyOpenmodal}
          onSubmit={handleReplySubmit}
        />
      )}
      <div className="displayimage">
        <div className="displayimgpro">
          <div>
            <CgProfile className="displayicon" />
          </div>
          <span className="displaytxt">Anitta k.c</span>
          <div className="displayreport">report</div>
        </div>
        <div className="dummytxtcont">
          <span className="dummytxt">
            lorem ipsum is simply dummy text of the printing and typesetting
            industry
          </span>
          <div className="add">
            <FaPlusCircle />
          </div>
        </div>

        <div className="">
          {image ? (
            <img
              className="image"
              src={URL.createObjectURL(image)}
              alt="Uploaded Image"
            />
          ) : (
            <img className="image" src={defaultimage} alt="Default Image" />
          )}
        </div>
        <div className="comments-length">
          <div className="commentslengthdiv">
            {totalCommentsAndReplies} comments
          </div>
        </div>
        <div className="likecomment">
          <div className="like" onClick={handleLikeClick}>
            <p>like</p>
          </div>

          <div className="comment" onClick={() => SetOpenmodal(true)}>
            <p>comment</p>
          </div>
        </div>
        <div className="commentcontainer">
          {comments.map((singlecomment, index) => (
            <div key={index}>
              <p className="commentedname">
                {" "}
                <CgProfile style={{ fontSize: "25px" }} />
                <span className="commentname">{singlecomment.name} </span>
              </p>
              <div className="comments">
                <p className="comment-text">{singlecomment.comment}</p>

                <p
                  className="reply"
                  onClick={() => {
                    SetReplyOpenmodal(true);
                  }}
                >
                  reply
                </p>
              </div>
            </div>
          ))}
          <div className="">
            {replays.map((singlereplay, index) => (
              <div key={index}>
                <p className="replyname">
                  {" "}
                  <CgProfile style={{ fontSize: "25px" }} />
                  {singlereplay.name}
                </p>
                <div className="replays">
                  <p className="reply-text">{singlereplay.reply}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imagedisplaycomponent;
