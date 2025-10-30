import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import NotificationItem from "examples/Items/NotificationItem";
import { navbar, navbarContainer, navbarRow, navbarIconButton, navbarDesktopMenu, navbarMobileMenu, } from "examples/Navbars/DashboardNavbar/styles";
import { useArgonController, setTransparentNavbar, setMiniSidenav, setOpenConfigurator, } from "context";
import team2 from "assets/images/team-2.jpg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";

function DashboardNavbar({ absolute, light, isMini }) {
  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useArgonController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator } = controller;
  const [openMenu, setOpenMenu] = useState(false); 

  useEffect(() => {
    // Setting the navbar type
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    // A function that sets the transparent state of the navbar.
    function handleTransparentNavbar() {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }
    window.addEventListener("scroll", handleTransparentNavbar);

    handleTransparentNavbar();

    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);

  // Render the notifications menu
  const renderMenu = () => (
    <Menu anchorEl={openMenu} anchorReference={null} anchorOrigin={{ vertical: "bottom", horizontal: "left", }} open={Boolean(openMenu)} onClose={handleCloseMenu} sx={{ mt: 2 }}>
      <NotificationItem image={<img src={team2} alt="person" />} title={["New message", "from Laur"]} date="13 minutes ago" onClick={handleCloseMenu} />
      <NotificationItem image={<img src={logoSpotify} alt="person" />} title={["New album", "by Travis Scott"]} date="1 day" onClick={handleCloseMenu} />
    </Menu>
  );

  return (
    <AppBar position={absolute ? "absolute" : navbarType} color="inherit" sx={(theme) => navbar(theme, { transparentNavbar, absolute, light })}>

      <Toolbar sx={(theme) => navbarContainer(theme, { navbarType })}>

        <ArgonBox color={light && transparentNavbar ? "white" : "dark"} mb={{ xs: 1, md: 0 }} sx={(theme) => navbarRow(theme, { isMini })}>
          <Icon fontSize="medium" sx={navbarDesktopMenu} onClick={handleMiniSidenav}>  {miniSidenav ? "menu_open" : "menu"} </Icon>
        </ArgonBox>

        {isMini ? null : (
          <ArgonBox sx={(theme) => navbarRow(theme, { isMini })}>

            <Link to="/authentication/sign-in/basic">
              <IconButton sx={navbarIconButton} size="small">
                <Icon sx={({ palette: { dark, white } }) => ({ color: light && transparentNavbar ? white.main : dark.main, })}>account_circle </Icon>
                <ArgonTypography variant="button" fontWeight="medium" color={light && transparentNavbar ? "white" : "dark"}> Sign in</ArgonTypography>
              </IconButton>
            </Link>

            <IconButton size="small" color={light && transparentNavbar ? "white" : "dark"} sx={navbarMobileMenu} onClick={handleMiniSidenav}>
              <Icon>{miniSidenav ? "menu_open" : "menu"}</Icon>
            </IconButton>

            <IconButton size="small" color={light && transparentNavbar ? "white" : "dark"} sx={navbarIconButton} onClick={handleConfiguratorOpen}>
              <Icon>settings</Icon>
            </IconButton>

          </ArgonBox>
        )}
      </Toolbar>
    </AppBar>
  );
}

DashboardNavbar.defaultProps = { absolute: false, light: true, isMini: false, };
DashboardNavbar.propTypes = { absolute: PropTypes.bool, light: PropTypes.bool, isMini: PropTypes.bool, };
export default DashboardNavbar;