import './App.css'
import Avatar from './Avatar';
import CommentDate from './CommentDate';
import CommentText from './CommentText';
import UserInfo from './UserInfo';

// If a component becomes too nested it can become less reusable. Each component should only encapsulate one responsibilty, if you
// have a component containing multiple responsibilites those responsibilites should be broken down into individual components.
// This makes the bigger component much more reusable/customizable. As well as gives you the option to use these pieces in other 
// places throughout the app
function Comment(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
          />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {props.date}
        </div>
      </div>
    );
  }


  //Makes components much more readable, just make sure youre giving your components names that are descriptive of what they are.
  function ExtractedComment(props) {
    return (
      <div className="Comment">
        <UserInfo author={props.author}/>
        <CommentText text={props.text}/>
        <CommentDate/>
      </div>
    );
  }

  export default Comment