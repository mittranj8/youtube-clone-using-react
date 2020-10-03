import { TuneOutlined } from "@material-ui/icons";
import React from "react";
import ChannelRow from "./ChannelRow";
import "./SearchPage.css";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneOutlined />
        <h2>Filter</h2>
      </div>

      <hr />

      <ChannelRow
        image="//yt3.ggpht.com/a/AATXAJxuvwdB2H7bQQyQk8Aqu28rYXWmz_WJWjbwgcBD=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Marques Brownlee"
        verified
        subs="12.2M"
        noOfVideos={1276}
        description="MKBHD: Quality Tech Videos | Youtuber | Geek | Consumer"
      />

      <hr />

      <VideoRow
        title="Apple Watch Series 6 Review: It's Bait!"
        views="275K"
        timestamp="5 hours ago"
        channelName="Marques Brownlee"
        channelImage="//yt3.ggpht.com/a/AATXAJxuvwdB2H7bQQyQk8Aqu28rYXWmz_WJWjbwgcBD=s176-c-k-c0x00ffffff-no-rj-mo"
        previewImage="https://i.ytimg.com/vi/XDamqi_3Aro/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCiX-YrXvXcVeNlo5D12Ff3SszRrg"
        description="Protip: You probably don't need to buy this one. That shirt! http://shop.MKBHD.com Tech I'm using right now:"
      />

      <VideoRow
        title="The Galaxy S20 Fan Edition: Hear Me Out!"
        views="1.9M"
        timestamp="4 days ago"
        channelName="Marques Brownlee"
        channelImage="//yt3.ggpht.com/a/AATXAJxuvwdB2H7bQQyQk8Aqu28rYXWmz_WJWjbwgcBD=s176-c-k-c0x00ffffff-no-rj-mo"
        previewImage="https://i.ytimg.com/vi/azrdcp4yYas/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDnjhyEPawrUrK5L08uPKa1WYZvzg"
        description="All this phone for $699? Midrange is where the action is at! Shoutout to Honey: http://joinhoney.com/"
      />

      <VideoRow
        title="The Ultimate iOS 14 Homescreen Setup Guide!"
        views="14.7M"
        timestamp="1 week ago"
        channelName="Marques Brownlee"
        channelImage="//yt3.ggpht.com/a/AATXAJxuvwdB2H7bQQyQk8Aqu28rYXWmz_WJWjbwgcBD=s176-c-k-c0x00ffffff-no-rj-mo"
        previewImage="https://i.ytimg.com/vi/cH66LWWluVE/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCsfYcBkDT43Iok9AiOoY4g1KCEZg"
        description="So I heard you like homescreens... Complete iOS14 feature walkthrough: https://youtu.be/ZLyDvABxGF0"
      />

      <VideoRow
        title="Can You Actually Game in 8K? (RTX 3090 Gameplay!)"
        views="4M"
        timestamp="1 week ago"
        channelName="Marques Brownlee"
        channelImage="//yt3.ggpht.com/a/AATXAJxuvwdB2H7bQQyQk8Aqu28rYXWmz_WJWjbwgcBD=s176-c-k-c0x00ffffff-no-rj-mo"
        previewImage="https://i.ytimg.com/vi/kFz9afj8lu0/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCas5KrS7-iKdn4TwvShTa-GkvMLQ"
        description=""
      />

      <VideoRow
        title="Porsche Taycan Turbo: I Almost Switched! [Auto Focus Ep 6]"
        views="2.1M"
        timestamp="1 week ago"
        channelName="Marques Brownlee"
        channelImage="//yt3.ggpht.com/a/AATXAJxuvwdB2H7bQQyQk8Aqu28rYXWmz_WJWjbwgcBD=s176-c-k-c0x00ffffff-no-rj-mo"
        previewImage="https://i.ytimg.com/vi/BAZX9p2oGOg/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAJBwG5Kbq9Z9FemdJ-JZe3q4EKXA"
        description="Porsche Taycan is an incredible electric sports car. It just needs"
      />

      <VideoRow
        title="Apple Watch Series 6: Everything New! (Product RED)"
        views="4M"
        timestamp="2 week ago"
        channelName="Marques Brownlee"
        channelImage="//yt3.ggpht.com/a/AATXAJxuvwdB2H7bQQyQk8Aqu28rYXWmz_WJWjbwgcBD=s176-c-k-c0x00ffffff-no-rj-mo"
        previewImage="https://i.ytimg.com/vi/Mm0NvlXdz4A/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAI7I-8m9xr1iC_Ld9g6hJgjP9rYQ"
        description="A first look at Apple Watch Series 6 and Apple Watch SE"
      />
    </div>
  );
}

export default SearchPage;
