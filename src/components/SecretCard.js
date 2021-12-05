import React from 'react';

const SecretCard = (props) => {
    return (
        <div className="SecretCard">
            <div className="image">
                <img src='../images/block.clear.br.png' alt='secret-card'/>;
            </div>
            <h3>Secret: {props.title}</h3>
            <p>Description: {props.detail}</p>
            <p>Secret's Destination Info: {props.recipent_email_contact}</p>
            <p>Fluster Factor (1(-) to 5(+)): {props.fluster_factor}</p>
            <hr />
        </div>
    );
}


export default SecretCard;
