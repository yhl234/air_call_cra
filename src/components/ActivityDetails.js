import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Dialog, DialogTitle, Typography, Avatar, Grid } from '@mui/material';
import axios from 'axios';
import { styled } from '@mui/material/styles';

import CallAvatarText from './CallAvatarText';

const DialogBody = styled(Grid)(({ theme }) => ({
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
  minHeight: '350px',
  maxHeight: '350px',
  maxWidth: '250px',
  minWidth: '250px',
}));

const ActivityDetails = ({ id, open, handleClose }) => {
  useEffect(async () => {
    if (!id || id === 0) return;
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
    const {
      call_type: type,
      created_at: createdAt,
      direction,
      duration,
      from,
      to,
      via,
    } = activity;
    const startedDate = moment(createdAt).format('YYYY/MM/DD');
    const startedTime = moment(createdAt).format('hh:mm:ss');
    const minuets = +duration / 60;
    context = (
      <>
        <DialogBody
          container
          direction="column"
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            flex="0 0"
          >
            <Avatar alt={from || 'Unknown'} />
          </Grid>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            flex="1 0"
          >
            <Typography>{from || 'Unknown'}</Typography>
            <CallAvatarText type={type} direction={direction} />
            <Typography>{to || 'Unknown'}</Typography>
            <Typography variant="caption" display="block" gutterBottom>
              @{via || 'Unknown'}
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            flex="0 0"
          >
            <Typography variant="overline" display="block" gutterBottom>
              {type} - {direction}
            </Typography>
            <Typography>{startedDate}</Typography>
            <Typography>{`${startedTime} - ${minuets} mins`}</Typography>
          </Grid>
        </DialogBody>
      </>
    );
  }

  return (
    <>
      <Dialog maxWidth="sm" scroll="paper" open={open} onClose={handleClose}>
        <DialogTitle>Call Details</DialogTitle>
        {/* <div>
          <div>{context}</div>
        </div> */}
        {context}
      </Dialog>
    </>
  );
};

export default ActivityDetails;

ActivityDetails.propTypes = {
  id: PropTypes.number,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};
