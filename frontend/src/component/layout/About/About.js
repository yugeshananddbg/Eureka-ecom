import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitProtofolio = () => {
    window.location = "http://yugeshanand.herokuapp.com";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dlk8gn2cx/image/upload/v1643608781/DSC_0123_t7wzfk.jpg"
              alt="Founder"
            />
            <Typography>Yugesh Anand</Typography>
            <Button onClick={visitProtofolio} color="primary">
              Visit My Protofollio
            </Button>
            <span>
              This is a sample wesbite made by @ Yugesh anand for mern partical
              purpose with the help of internet.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/channel/UCRABuCnfdZzYBJnmAzxmPZg"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/yugeshanand" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
