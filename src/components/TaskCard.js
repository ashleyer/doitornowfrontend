import React from 'react';

const TaskCard = (props) => {
  return (
    <div className="TaskCard">
      <div className="image">
        <img  src={ './images/doie_juggling_bwr 2.png' } alt="juggler"/>
      </div> 
      <h3>Task: { props.title }</h3>
      <p>Details: {props.detail}</p>
      <p>Priority Rating 1(-) to 5(+)): { props.priority_rating }</p>
      <hr />
    </div>
  );
}
export default TaskCard;
