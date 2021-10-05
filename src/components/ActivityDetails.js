import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material';
import axios from 'axios';

const ActivityDetails = ({ id, open, handleClose }) => {
  useEffect(async () => {
    if (!id) return;
    try {
      const result = await axios.get(
        `https://aircall-job.herokuapp.com/activities/${id}`
      );
      setActivity(result.data);
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  const [activity, setActivity] = useState(null);
  let context = null;
  if (!activity) {
    context = <>Not found</>;
  } else {
    const { type, createdAt, direction, duration, from, isArchived, to, via } =
      activity;
    context = (
      <>
        <Typography>{createdAt}</Typography>
        <Typography>
          {type} - {direction}
        </Typography>
        <Typography>form: {from}</Typography>
        <Typography>to: {to}</Typography>
        <Typography>
          via: {via} - {duration}
        </Typography>
        <Typography>duration: {duration}</Typography>
      </>
    );
  }

  return (
    <>
      {/* <div>{id}</div>
			<div>{type}</div>
			<div>{createdAt}</div>
			<div>{direction}</div>
			<div>{duration}</div>
			<div>{from}</div>
			<div>{isArchived}</div>
			<div>{to}</div>
			<div>{via}</div> */}
      {/* <button>archive</button> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Call Details</DialogTitle>
        <DialogContent>
          <DialogContentText>{context}</DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ActivityDetails;
ActivityDetails.propTypes = {
  id: PropTypes.number,
  // type: PropTypes.string,
  // // createdAt: PropTypes.string,
  // direction: PropTypes.string,
  // duration: PropTypes.string,
  // from: PropTypes.string,
  // // isArchived: PropTypes.bool,
  // to: PropTypes.string,
  // via: PropTypes.string,

  open: PropTypes.bool,
  handleClose: PropTypes.func,
};
