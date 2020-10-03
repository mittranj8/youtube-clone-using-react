import { Avatar } from "@material-ui/core";
import React from "react";
import "./VideoCard.css";

function Videos({
  title,
  views,
  timestamp,
  channelName,
  channelImage,
  previewImage,
}) {
  return (
    <div className="videoCard">
      <img className="videoCard_thumbnail" src={previewImage} alt="preview" />
      <div className="videoCard_info">
        <Avatar
          className="videoCard_avatar"
          alt={channelName}
          src={channelImage}
        />
        <div className="videoCard_text">
          <h4>{title}</h4>
          <p>{channelName}</p>
          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Videos;
