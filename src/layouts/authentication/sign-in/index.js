import { useState } from "react";
import { Link } from "react-router-dom";
import Switch from "@mui/material/Switch";
import ArgonBox from "components/ArgonBox";
import { useNavigate } from "react-router-dom";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";
import ArgonTypography from "components/ArgonTypography";
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";


const bgImage = "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg";

function Illustration() {
  const navigate = useNavigate();
  const [passWrd, setPassWrd] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleLogin = () => {

    console.log(emailAddress)
    console.log(passWrd)

    if (emailAddress === "prithivi@kartelsolutions.com" && passWrd === "Prithivi1234") {
      localStorage.setItem("websiteCachePASS", "yes");
      navigate("/dashboard");
    } else {
      // Show error
    }
  };

  return (
    <IllustrationLayout title="Sign In" description="Enter your email and password to sign in"
      illustration={{
        image: bgImage, title: '"Attention is the new currency"',
        description: "The more effortless the writing looks, the more effort the writer actually put into the process.",
      }}>
      <ArgonBox component="form" role="form">
        <ArgonBox mb={2}>
          <ArgonInput type="email" placeholder="Email" size="large" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
        </ArgonBox>

        <ArgonBox mb={2}>
          <ArgonInput type="password" placeholder="Password" size="large" value={passWrd} onChange={(e) => setPassWrd(e.target.value)} />
        </ArgonBox>

        <ArgonBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <ArgonTypography variant="button" fontWeight="regular" onClick={handleSetRememberMe} sx={{ cursor: "pointer", userSelect: "none" }}>
            &nbsp;&nbsp;Remember me
          </ArgonTypography>
        </ArgonBox>

        <ArgonBox mt={4} mb={1}>
          <ArgonButton color="info" size="large" onClick={handleLogin} fullWidth>Sign In</ArgonButton>
        </ArgonBox>

        <ArgonBox mt={3} textAlign="center">
          <ArgonTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <ArgonTypography component={Link} to="/authentication/sign-up" variant="button" color="info" fontWeight="medium">Sign up</ArgonTypography>
          </ArgonTypography>
        </ArgonBox>

      </ArgonBox>
    </IllustrationLayout>
  );
}

export default Illustration;