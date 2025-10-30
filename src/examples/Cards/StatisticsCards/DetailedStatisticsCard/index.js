import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import { useArgonController } from "context";

function DetailedStaticsCard({ bgColor, title, count, percentage, icon, direction, chart }) {
  const [controller] = useArgonController();
  const { darkMode } = controller;

  return (
    <Card>
      <ArgonBox bgColor={bgColor === "white" && darkMode ? "transparent" : bgColor} variant={bgColor === "white" && darkMode ? "contained" : "gradient"}>
        <ArgonBox p={2}>

          <Grid container>
            <Grid item xs={8}>
              <ArgonBox ml={direction === "left" ? 2 : 0} lineHeight={1}>
                <ArgonTypography variant="button" color={bgColor === "white" ? "text" : "white"} textTransform="uppercase" fontWeight="medium">
                  {title}
                </ArgonTypography>
                <ArgonTypography variant="h5" fontWeight="bold" color={bgColor === "white" ? "dark" : "white"} mb={1}>
                  {count}
                </ArgonTypography>
              </ArgonBox>
            </Grid>
          </Grid>

          <ArgonTypography display="flex" alignItems="center" variant="button" fontWeight="bold" color={percentage.color}>
            {percentage.count}
            <ArgonTypography variant="body2" fontWeight="regular" color={bgColor === "white" ? "text" : "white"} ml={0.5} mt={-0.125}>
              {percentage.text}
            </ArgonTypography>
          </ArgonTypography>

          {chart && (
            <ArgonBox mt={2} height="150px">
              {chart}
            </ArgonBox>
          )}

        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

DetailedStaticsCard.defaultProps = {
  bgColor: "white",
  percentage: { color: "success", count: 0, text: "", },
  direction: "right",
  chart: null,
};


DetailedStaticsCard.propTypes = {
  bgColor: PropTypes.oneOf(["transparent", "white", "primary", "secondary", "info", "success", "warning", "error", "dark",]),
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark", "white",]),
    count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    text: PropTypes.string,
  }),
  icon: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark",]),
    component: PropTypes.node.isRequired,
  }).isRequired,
  direction: PropTypes.oneOf(["right", "left"]),
  chart: PropTypes.node,
};

export default DetailedStaticsCard;
