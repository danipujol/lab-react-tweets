


  import ProfileImage from "./ProfileImage";
  import User from "./User.js"
  import Timestamp from "./Timestamp.js"
 import Message from "./Message.js"
import Actions from "./Actions"

function Tweet(props) {
  return (
    <div className="tweet">

   <ProfileImage image={props.tweet.user.image} />


      <div className="body">
        <div className="top">
          
       
       {/* <User userData={props.tweet.user}/> */}
       <User user={props.tweet.user}/>
        

       <Timestamp time={props.tweet.timestamp}/>

        </div>

   <p>

   <Message message={props.tweet.message} /> 
   </p>
        

   <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
