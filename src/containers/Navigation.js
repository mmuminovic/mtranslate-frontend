import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Navbar,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { authSlice } from "../store/authSlice";
import { Menu } from "@material-ui/icons";

const Navigation = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  // useEffect(() => {
  //     const lsTest = () => {
  //         const test = 'test'
  //         try {
  //             localStorage.setItem(test, test)
  //             localStorage.removeItem(test)
  //             return true
  //         } catch (e) {
  //             return false
  //         }
  //     }

  //     if (lsTest() === true) {
  //         if (
  //             localStorage.auth_token !== undefined &&
  //             localStorage.auth_token !== '' &&
  //             localStorage.auth_token !== 'undefined'
  //         ) {
  //             const decoded = jwtDecode(localStorage.auth_token)

  //             const currentTime = Date.now() / 1000
  //             if (decoded.exp < currentTime) {
  //                 dispatch(authSlice.actions.auth())
  //                 history.replace('/login')
  //             } else {
  //                 dispatch(
  //                     authSlice.actions.auth({
  //                         token: localStorage.auth_token,
  //                     })
  //                 )
  //             }
  //         } else {
  //             dispatch(authSlice.actions.auth())
  //             history.replace('/login')
  //         }
  //     } else {
  //         dispatch(authSlice.actions.auth())
  //         history.replace('/login')
  //     }
  // }, [history, dispatch])

  return (
    <>
      {authState.token ? (
        <div className="navigation">
          <Navbar expand="xs" style={{ justifyContent: "space-between" }}>
            <NavbarText
              onClick={() => history.push("/")}
              style={{ cursor: "pointer" }}
            >
              mTranslate
            </NavbarText>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle
                  nav
                  style={{
                    color: "#000",
                  }}
                >
                  <Menu
                    htmlColor="#000"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem
                    onClick={() => {
                      history.push("/");
                    }}
                  >
                    Početna
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem
                    onClick={() => {
                      dispatch(authSlice.actions.auth());
                      history.replace("/login");
                    }}
                  >
                    Odjavi se
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Navbar>
        </div>
      ) : (
        <div className="navigation"></div>
      )}
    </>
  );
};

export default Navigation;
