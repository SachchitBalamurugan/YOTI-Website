import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import Logo from "./images/Logo.png";
import involve from "./images/involve.png";
import React, { useRef } from "react";
import TrashV from "./images/TrashV.png";
import PartyV from "./images/PartyV.png";
import FishV from "./images/FishV.png";

export default function Home() {
  const boxContainerRef = useRef(null);

  const scrollLeft = () => {
    if (boxContainerRef.current) {
      boxContainerRef.current.scrollLeft -= 200; // Adjust the scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (boxContainerRef.current) {
      boxContainerRef.current.scrollLeft += 200; // Adjust the scroll distance as needed
    }
  };

  return (
    <Axis>
      <Wrapper>
        <Spline
          className="spline"
          scene="https://prod.spline.design/ixgBvco61ZSk0cGo/scene.splinecode"
        />
        <Content>
          <Menu>
            <li>
              <img
                src={Logo}
                alt="Logo"
                style={{ width: "100px", height: "100px" }}
              />
            </li>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="./AboutUs">About Us</a>
            </li>
            <li>
              <a href="/gala">Galla</a>
            </li>
            <li>
              <a href="/content">Content</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/donate">Donate</a>
            </li>
            <li>
              <a href="/involve">Get Involved</a>
            </li>
          </Menu>

          <h1>We Make Free Websites For You</h1>
          <p>
            YOTI (Youth Opportunities in Tech Innovation) is a non-profit
            organization focused on empowering youth through computer science
            education. Our aim is to narrow the digital gap by offering
            resources, training, and mentorship to young individuals, enabling
            them to excel in the technology sector. Additionally, we provide
            free website development services for other non-profit
            organizations, helping them enhance their online presence and reach
            a wider audience.
          </p>
          <button>
            <img
              src={involve}
              alt="involve"
              style={{ width: "30px", height: "30px" }}
            />
            Get Involved Now
          </button>
          <divNEW
            style={{
              height: "600px",
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              color: "#61999c",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontFamily: "'Spline Sans', sans-serif",
                fontSize: "55px",
                margin: "20px", // Adjust the margin as needed
                transform: "translateY(70px)",
                zIndex: 101,
              }}
            >
              Empowering Youth Through Technology Education
            </h2>
            <h2
              style={{
                fontFamily: "'Catamaran', sans-serif",
                fontSize: "155px",
                margin: "20px", // Adjust the margin as needed
              }}
            >
              "
            </h2>
            <p
              style={{
                fontFamily: "'Spline Sans', sans-serif",
                fontSize: "20px",
                color: "#555", // You can change the color if needed
                maxWidth: "70%",
                transform: "translateY(-140px)",
              }}
            >
              "At YOTI, we believe in unlocking the potential of every young
              individual, guiding them towards a brighter future in the
              ever-evolving world of technology."
            </p>
            <p
              style={{
                fontFamily: "'Catamaran', sans-serif",
                fontSize: "20px",
                color: "#61999c", // You can change the color if needed
                maxWidth: "70%",
                transform: "translateY(-100px)",
              }}
            >
              - Sachchit Balamurugan (Founder and CEO of YOTI)
            </p>
          </divNEW>

          <divC
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <img
              src={TrashV}
              alt="TrashV"
              style={{
                width: "500px", // Adjust the width as needed
                height: "500px", // Adjust the height as needed
                marginRight: "20px",
                transform: "translateY(20px)",
                borderRadius: "50%", // Add border-radius for a circular image
              }}
            />
            <div
              style={{
                color: "white",
                fontSize: 150,
                fontFamily: "Inter",
                fontWeight: "900",
                wordWrap: "break-word",
              }}
            >
              01
            </div>

            <div2
              style={{
                color: "white",
                fontSize: 60,
                fontFamily: "Inter",
                fontWeight: "900",
                wordWrap: "break-word",
              }}
            >
              Volunteer
            </div2>
            <button2>
              <img
                src={involve}
                alt="involve"
                style={{ width: "30px", height: "30px" }}
              />
              Get Involved Now
            </button2>
          </divC>
          {/*Gala Text Below 02*/}
          <divC
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <div3
              style={{
                color: "white",
                fontSize: 150,
                fontFamily: "Inter",
                fontWeight: "900",
                wordWrap: "break-word",
                transform: "translateY(-120px)",
              }}
            >
              02
            </div3>
            <img
              src={PartyV}
              alt="PartyV"
              style={{
                width: "500px", // Adjust the width as needed
                height: "500px", // Adjust the height as needed
                marginRight: "20px",
                transform: "translateX(350px)",
                // Add border-radius for a circular image
              }}
            />
          </divC>
          <div4
            style={{
              color: "white",
              fontSize: 60,
              fontFamily: "Inter",
              fontWeight: "900",
              wordWrap: "break-word",
              transform: "translateY(-310px)",
            }}
          >
            Gala
          </div4>
          {/*Content for Gala*/}
          <GalaButton>
            <img
              src={involve}
              alt="involve"
              style={{ width: "30px", height: "30px" }}
            />
            Get Involved Now
          </GalaButton>
          <divContent
            style={{
              width: "732px",
              height: "100%",
              color: "white",
              fontSize: 30,
              fontWeight: "200",
              wordWrap: "break-word",
              transform: "translateY(-360px)",
            }}
          >
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit ess
          </divContent>

          {/*03 Donate Content*/}
          <img
            src={FishV}
            alt="FishV"
            style={{
              width: "500px", // Adjust the width as needed
              height: "500px", // Adjust the height as needed
              marginRight: "20px",
              transform: "translateY(-70%) translateX(5%)",
              borderRadius: "50%", // Add border-radius for a circular image
            }}
          />
          <div5
            style={{
              color: "white",
              fontSize: 150,
              fontFamily: "Inter",
              fontWeight: "900",
              wordWrap: "break-word",
              transform: "translateY(-450%) translateX(81%)",
            }}
          >
            03
          </div5>
          <div6
            style={{
              color: "white",
              fontSize: 60,
              fontFamily: "Inter",
              fontWeight: "900",
              wordWrap: "break-word",
              transform: "translateY(-1210%) translateX(80.3%)",
            }}
          >
            Donate
          </div6>
          <button4>
            <img
              src={involve}
              alt="involve"
              style={{ width: "30px", height: "30px" }}
            />
            Get Involved Now
          </button4>
        </Content>
        {/*Carousel for Reviews*/}
        {/* <ReviewsContainer>
          <h2>Reviews</h2>
          <BoxContainer ref={boxContainerRef}>
            <Box>
              <BoxText>Text for Box 1</BoxText>
            </Box>
            <Box>
              <BoxText>Text for Box 2</BoxText>
            </Box>
            <Box>
              <BoxText>Text for Box 3</BoxText>
            </Box>
            <Box>
              <BoxText>Text for Box 3</BoxText>
            </Box>
            <Box>
              <BoxText>Text for Box 3</BoxText>
            </Box>
            <Box>
              <BoxText>Text for Box 3</BoxText>
            </Box>
            <Box>
              <BoxText>Text for Box 3</BoxText>
            </Box>
            <Box>
              <BoxText>Text for Box 3</BoxText>
            </Box>
            <Box>
              <BoxText>Text for Box 3</BoxText>
            </Box>
            <Box>
              <BoxText>Text for Box 3</BoxText>
            </Box>
          </BoxContainer>
          <ArrowButton onClick={scrollLeft} direction="left">
            &lt;
          </ArrowButton>
          <ArrowButton onClick={scrollRight} direction="right">
            &gt;
          </ArrowButton>
        </ReviewsContainer> */}

        {/* <footer className="footer p-10 bg-neutral text-neutral-content">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <header className="footer-title">Social</header>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer> */}
        <Footer>
          <LogoContainer>
            <LogoImage src={Logo} alt="Logo" />
            <p>
              ACME Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
          </LogoContainer>

          <SocialMediaContainer>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                {/* Twitter icon */}
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                {/* Instagram icon */}
                <path d="M11.997 2c2.759 0 3.1.01 4.186.061 1.084.054 1.79.241 2.426.512.624.279 1.122.634 1.622 1.134.5.5.855.998 1.134 1.622.271.636.459 1.342.513 2.426.051 1.086.061 1.427.061 4.186s-.01 3.1-.061 4.186c-.054 1.084-.242 1.79-.513 2.426-.28.624-.635 1.122-1.134 1.622-.5.5-.998.855-1.622 1.134-.636.271-1.342.459-2.426.513-1.086.051-1.427.061-4.186.061s-3.1-.01-4.186-.061c-1.084-.054-1.79-.242-2.426-.513-.624-.28-1.122-.635-1.622-1.134-.5-.5-.855-.998-1.134-1.622-.271-.636-.459-1.342-.513-2.426-.051-1.086-.061-1.427-.061-4.186s.01-3.1.061-4.186c.054-1.084.242-1.79.513-2.426.28-.624.635-1.122 1.134-1.622.5-.5.998-.855 1.622-1.134.636-.271 1.342-.459 2.426-.513 1.086-.051 1.427-.061 4.186-.061zm0-2c-2.794 0-3.794.01-5.122.061-1.413.054-2.435.243-3.136.512-.807.279-1.475.646-2.122 1.293-.646.647-1.014 1.315-1.293 2.122-.27.701-.459 1.723-.512 3.136-.05 1.328-.061 2.328-.061 5.122s.01 3.794.061 5.122c.054 1.413.242 2.435.512 3.136.279.807.646 1.475 1.293 2.122.647.646 1.315 1.014 2.122 1.293.701.27 1.723.459 3.136.512 1.328.05 2.328.061 5.122.061s3.794-.01 5.122-.061c1.413-.054 2.435-.242 3.136-.512.807-.279 1.475-.646 2.122-1.293.646-.647 1.014-1.315 1.293-2.122.27-.701.459-1.723.512-3.136.05-1.328.061-2.328.061-5.122s-.01-3.794-.061-5.122c-.054-1.413-.242-2.435-.512-3.136-.279-.807-.646-1.475-1.293-2.122-.647-.646-1.315-1.014-2.122-1.293-.701-.27-1.723-.459-3.136-.512-1.328-.05-2.328-.061-5.122-.061zm0 5.795a6.205 6.205 0 1 0 0 12.41 6.205 6.205 0 0 0 0-12.41zm0 10.768a4.563 4.563 0 1 1 0-9.126 4.563 4.563 0 0 1 0 9.126zm10.036-10.243a1.245 1.245 0 1 1-2.49 0 1.245 1.245 0 0 1 2.49 0z"></path>
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                {/* Facebook icon */}
                <path d="M21 0H3C1.344 0 0 1.344 0 3v18c0 1.656 1.344 3 3 3h9.094V14.625h-2.906V11.25h2.906v-2.25c0-2.875 1.75-4.625 4.625-4.625 1.313 0 2.594.25 2.594.25v2.875h-1.469c-1.438 0-1.875.875-1.875 1.781v1.875h3l-.375 3.375h-2.625V24H21c1.656 0 3-1.344 3-3V3C24 1.344 22.656 0 21 0z"></path>
              </svg>
            </a>
            {/* Add more social media icons as needed */}
          </SocialMediaContainer>
        </Footer>
      </Wrapper>
    </Axis>
  );
}

const GalaButton = styled.button`
  background: rgba(0, 0, 0, 0.2);
  border: 0px;
  font-size: 16px;
  padding: 12px 30px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  max-width: 280px;
  backdrop-filter: blur(20px);
  z-index: 4;

  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;

  transition: background-color 0.3s ease-in-out;

  margin: 30px 95px; /* Adjust margin as needed */
`;

const Axis = styled.div`
  overflow-x: hidden;
`;
const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;
  background-color: rgba(
    51,
    51,
    51,
    0.3
  ); /* Background color with 30% opacity */
  color: white;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 10px;
  z-index: 100;
  transition: transform 0.3s ease-in-out; /* Add transition for smooth animation */

  &:hover {
    transform: scale(1.1); /* Scale the image by 10% on hover */
  }
`;

const SocialMediaContainer = styled.nav`
  display: flex;
  gap: 10px;

  a {
    text-decoration: none;
    color: white;

    svg {
      width: 24px;
      height: 24px;
      fill: white; /* Set the fill color to white for all icons */
    }
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 87.5%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 52px; /* Adjust the font size to make it bigger */
  cursor: pointer;
  z-index: 10;
  transform: translateY(-60%);
  ${(props) => (props.direction === "right" ? "right: 80px;" : "left: 80px;")}
  border-radius: 10px; /* Add border-radius to round the corners */

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  font-size: 16px;
  color: white;
  position: relative;

  .spline {
    position: absolute;
    margin: 0;
    top: 50px;
    right: 0;
    z-index: 1;
  }
`;

const Content = styled.div`
  position: relative; /* Change position to relative */
  top: 30px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 40px; /* Add margin at the bottom to make space for the box container */

  div {
    margin: 100px;
    transform: translateX(235%);
  }

  div2 {
    margin-top: 190px;
    transform: translateX(7.5%);
  }

  div3 {
    margin: 0 90px;
  }
  div4 {
    margin: -60px 95px;
  }

  divContent {
    margin: 30px 95px;
  }

  div5 {
    transform: translateY(81%);
  }

  div6 {
    transform: translateX(77%);
  }

  h1 {
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    font-size: 70px;
    margin: 0;
    transform: translateY(-15%);
    max-width: 600px;
    z-index: 3;
  }

  p {
    font-weight: normal;
    transform: translateY(-15%);
    line-height: 150%;
    max-width: 400px;
    z-index: 3;
  }

  button {
    transform: translateY(-15%);
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    max-width: 280px;
    backdrop-filter: blur(20px);
    z-index: 4;

    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;

    transition: background-color 0.3s ease-in-out;
  }

  button:hover {
    background-color: rgba(
      0,
      0,
      0,
      0.5
    ); /* Change this to your desired hover background color */
  }

  button2 {
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    width: 180px;
    backdrop-filter: blur(20px);
    margin: -30px -220px;
    z-index: 4;
    transform: translateY(300%);

    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;

    transition: background-color 0.3s ease-in-out;
  }

  button2:hover {
    background-color: rgba(
      0,
      0,
      0,
      0.5
    ); /* Change this to your desired hover background color */
  }

  button4 {
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    width: 180px;
    backdrop-filter: blur(20px);
    margin: -400px 990px;
    z-index: 4;
    transform: translateY(-900%);

    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;

    transition: background-color 0.3s ease-in-out;
  }

  button4:hover {
    background-color: rgba(
      0,
      0,
      0,
      0.5
    ); /* Change this to your desired hover background color */
  }

  h1,
  p,
  button {
    margin: 0 30px -30px 100px;
  }
`;
const Menu = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  transform: translateX(-2%);
  margin: 0 30px 0 100px;
  padding: 0;
  flex-direction: row;
  z-index: 2;

  li {
    list-style: none;
    margin: 0;

    a {
      text-decoration: none;
      color: white;
      padding: 8px 20px;
      border-radius: 14px;
      position: relative;

      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 14px;
        background-color: transparent;
        z-index: -1;
        transition: background-color 0.3s ease;
      }

      &:hover {
        &:before {
          background-color: rgba(225, 225, 225, 0.2);
        }
      }
    }
  }
`;

const ReviewsContainer = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  z-index: 3;
  padding: 0 80px;

  h2 {
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    font-size: 50px;
    margin: 20px;
    max-width: 600px;
    z-index: 3;
    transform: translateY(150%);
  }
`;
const BoxContainer = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  position: relative;
  display: flex;
  gap: 20px; /* Adjust the gap between boxes as needed */
  margin: 100px auto; /* Center the container horizontally and adjust the top margin */
  padding: 20px; /* Add padding to the container to make space for scrolling */
  overflow-y: hidden; /* Hide vertical scrollbar */
  text-align: center; /* Center the content */
  max-width: 1020px; /* Set a maximum width for the container */
  border-radius: 50px;

  @media (max-width: 768px) {
    max-width: 100%; /* Adjust for smaller screens */
  }
`;

const Box = styled.div`
  z-index: 5;
  width: 280px;
  height: 280px;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  z-index: 6;
  flex-shrink: 0; /* Prevent boxes from shrinking in the container */

  &:hover {
    div {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const BoxText = styled.div``;
