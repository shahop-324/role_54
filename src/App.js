import "./App.css";
import React from "react";
import HeroImage from "./Assets/Images/hero.jpg";
import Logo from "./Assets/Images/logo.png";
import styled from "styled-components";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import IconButton from "@mui/material/IconButton";
import Signup from "./Signup";
import Signin from "./Signin";

const HeroContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

const NavRow = styled.div`
  max-width: 1200px;
  height: 8vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-gap: 24px;
  align-items: center;
`;

const BrandImage = styled.img`
  object-fit: contain;
  height: 6vh;
  width: 100%;
`;

const LinkButton = styled.div`
  font-weight: 500;
  font-size: 1rem;
  color: #ffffff;
  padding-bottom: 5px;
  border-bottom: 1px solid transparent;
  &:hover {
    color: #212121;
    border-bottom: 1px solid #212121;
    cursor: pointer;
  }
`;

const HeadingSmall = styled.div`
  font-size: 1rem;
  color: #ffffff;
  font-weight: 500;
`;

const HeadingMain = styled.div`
  font-size: 3.6rem;
  font-family: "sans-serif";
  color: #ffffff;
  font-weight: 600;
  line-height: 98px;
  letter-spacing: 14px;
`;


function App() {
  const [openSignup, setOpenSignup] = React.useState(false);
  const [openSignin, setOpenSignin] = React.useState(false);

  const handleCloseSignup = () => {
    setOpenSignup(false);
  };

  const handleCloseSignin = () => {
    setOpenSignin(false);
  };

  return (
    <>
      <HeroContainer style={{ backgroundImage: `url(${HeroImage})` }}>
        <NavRow className="container px-5">
          <BrandImage src={Logo} />
          <div className="d-flex flex-row align-items-center justify-content-between px-5 py-2">
            <LinkButton>Home</LinkButton>
            <LinkButton>Packages</LinkButton>
            <LinkButton>Pages</LinkButton>
            <LinkButton
              onClick={() => {
                setOpenSignin(true);
              }}
            >
              Signin
            </LinkButton>
            <LinkButton
              onClick={() => {
                setOpenSignup(true);
              }}
            >
              Sign up
            </LinkButton>
          </div>

          <div className="d-flex flex-row align-items-center">
            <button className="btn btn-outline-text btn-outline-light">
              BOOK A TRIP
            </button>

            <IconButton className="ms-3" style={{ color: "#ffffff" }}>
              <SearchRoundedIcon />
            </IconButton>
          </div>
        </NavRow>

        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ height: "92vh", width: "100%" }}
        >
          <HeadingSmall className="mb-2">
            Plan a trip to Santironi Village
          </HeadingSmall>
          <HeadingMain>Taxa Adventure</HeadingMain>
        </div>
      </HeroContainer>
      <Signup open={openSignup} handleClose={handleCloseSignup} />
      <Signin open={openSignin} handleClose={handleCloseSignin} />
    </>
  );
}

export default App;
