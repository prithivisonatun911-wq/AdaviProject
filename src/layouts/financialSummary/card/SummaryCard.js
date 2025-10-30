import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useArgonController } from "context";

import PropTypes from 'prop-types';
const SummaryCard = ({ title, value, changePercent }) => {

  const [controller] = useArgonController();
  const { darkMode } = controller;
  const isPositive = changePercent >= 0;

  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle1" color={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>{title}</Typography>
        <Typography variant="h4" color={{ color: !darkMode ? "#111c44 !important" : "#ffffff97 !important" }}>{value.toLocaleString()}         </Typography>
        <Box display="flex" alignItems="center" mt={1}>
          {isPositive ? (
            <ArrowUpwardIcon color="success" />
          ) : (
            <ArrowDownwardIcon color="error" />
          )}
          <Typography variant="body2" color={isPositive ? 'success.main' : 'error.main'} ml={0.5} >
            {Math.abs(changePercent).toFixed(1)}%
          </Typography>
          <Typography variant="body2" color="textSecondary" ml={1}>
            vs prev month
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

SummaryCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  changePercent: PropTypes.number.isRequired,
};

export default SummaryCard;
