import React from 'react';


const News = props => {
    const descriptionStyle = {
        fontSize: 20
    };
    return (
      <div>
          <div className="">
              <img width="100%"  src={props.image} alt="Card cap"/>
              <h1>{props.title}</h1>
          </div>
          <p style={descriptionStyle}>{props.description}</p>
      </div>

    );
};

export default News;