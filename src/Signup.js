import React from "react";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { IconButton } from "@mui/material";

const Container = styled.div`
  width: 550px;
  height: auto;
`;

const Heading = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #212121;
`;

const Signup = ({ open, handleClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        aria-labelledby="responsive-dialog-title"
      >
        <Container className="p-4">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              alignItems: "center",
            }}
            className="mb-5"
          >
            <div></div>

            <Heading style={{ textAlign: "center" }}>Sign up</Heading>

            <div style={{ justifySelf: "end" }}>
              <IconButton
                onClick={() => {
                  handleClose();
                }}
              >
                <CancelRoundedIcon />
              </IconButton>
            </div>
          </div>

          <form>
            <div
              className=""
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridGap: "24px",
                alignItems: "center",
              }}
            >
              <div class="form-group mb-3">
                <label for="exampleInputEmail1 mb-1">First Name</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="John"
                />
              </div>
              <div class="form-group mb-3">
                <label for="exampleInputEmail1 mb-1">Last Name</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div class="form-group mb-3">
              <label for="exampleInputEmail1 mb-1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group mb-3">
              <label for="exampleInputPassword1 mb-1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div class="form-group form-check mb-3">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button
              type="submit"
              class="btn btn-primary btn-outline-text"
              style={{ width: "100%" }}
            >
             Sign up
            </button>
          </form>
        </Container>
      </Dialog>
    </>
  );
};

export default Signup;
