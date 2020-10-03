import { Avatar } from "@material-ui/core";
import React from "react";
import "./VideoRow.css";

function VideoRow({
  title,
  views,
  description,
  timestamp,
  channelName,
  channelImage,
  previewImage,
}) {
  return (
    <div className="videoRow">
      <img src={previewImage} alt="preview_image" />
      <div className="videoRow_text">
        <h3>{title}</h3>

        <p className="videoRow_headline">
          {views} views • {timestamp}
        </p>

        <div className="videoRow_info">
          <Avatar
            className="videoRow_avatar"
            alt={channelName}
            src={channelImage}
          />
          <div className="videoRow_name">
            <p>{channelName}</p>
          </div>
        </div>
        <p className="videoRow_description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
