import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import CallAvatar from './CallAvatar';

const CallAvatarText = ({ type, direction }) => {
  return (
    <>
      <Typography variant="caption">
        {direction === 'inbound' ? 'from' : 'to'}
      </Typography>
      <CallAvatar type={type} direction={direction} />
      <Typography variant="caption">
        {direction === 'inbound' ? 'to' : 'from'}
      </Typography>
    </>
  );
};
CallAvatarText.propTypes = {
  type: PropTypes.string,
  direction: PropTypes.string,
};

export default CallAvatarText;
