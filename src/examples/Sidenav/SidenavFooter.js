import ArgonBox from "components/ArgonBox";
import { useArgonController } from "context";
import { useNavigate } from "react-router-dom";
import ArgonButton from "components/ArgonButton";

function SidenavFooter() {
  const navigate = useNavigate();
  const [controller] = useArgonController();
  const { miniSidenav, darkSidenav } = controller;
  const handleLogOut = () => {
    localStorage.setItem("websiteCachePASS", "yes");
    localStorage.removeItem("websiteCachePASS");
    navigate("/authentication/sign-in");
  }
  return (
    <ArgonBox mt={4} mb={1} opacity={miniSidenav ? 0 : 1} sx={{ transition: "opacity 200ms linear" }}>
      <ArgonButton color="info" size="large" onClick={handleLogOut} fullWidth>Log Out</ArgonButton>
    </ArgonBox>

  );
}

export default SidenavFooter;