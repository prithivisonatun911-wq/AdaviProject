import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

const SectionControls = ({ company, setCompany, time, setTime, total, labelCompany, labelTime, companyOptions = [], timeOptions = [],
}) => {
  return (
    <Box mb={2} display="flex" flexWrap="wrap" gap={2} alignItems="center" justifyContent="flex-start"    >
      
      {/* Company Selector */}
      <FormControl size="small" sx={{ minWidth: 180 }}>
        <InputLabel id="company-select-label">{labelCompany}</InputLabel>
        <Select labelId="company-select-label" id="company-select" value={company} label={labelCompany} onChange={(e) => setCompany(e.target.value)}>
          <MenuItem value="All">All</MenuItem>
          {companyOptions.map((comp) => (
            <MenuItem key={comp} value={comp}>{comp}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Time Selector */}
      <FormControl size="small" sx={{ minWidth: 140 }}>
        <InputLabel id="time-select-label">{labelTime}</InputLabel>
        <Select labelId="time-select-label" id="time-select" value={time} label={labelTime} onChange={(e) => setTime(e.target.value)}>
          <MenuItem value="All">All</MenuItem>
          {timeOptions.map((timeOpt) => (
            <MenuItem key={timeOpt} value={timeOpt}>{timeOpt}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Total Display */}
      <Typography variant="subtitle1" sx={{ ml: "auto", fontWeight: "bold", minWidth: 120, textAlign: "right" }}>Total: ${total.toLocaleString()}</Typography>
    </Box>
  );
};

SectionControls.propTypes = {
  company: PropTypes.string.isRequired,
  setCompany: PropTypes.func.isRequired,
  time: PropTypes.string.isRequired,
  setTime: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  labelCompany: PropTypes.string.isRequired,
  labelTime: PropTypes.string.isRequired,
  companyOptions: PropTypes.arrayOf(PropTypes.string),
  timeOptions: PropTypes.arrayOf(PropTypes.string),
};

SectionControls.defaultProps = {
  companyOptions: [],
  timeOptions: [],
};

export default SectionControls;
