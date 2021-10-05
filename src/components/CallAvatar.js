import React from 'react';
import PropTypes from 'prop-types';
import { CallMade, CallReceived, RecordVoiceOver } from '@mui/icons-material';

const CallAvatar = ({ type, direction }) => {
  let color = 'error';
  if (type === 'answered') {
    color = 'success';
  }
  if (type === 'voicemail') {
    return <RecordVoiceOver color="error" />;
  }
  if (direction === 'inbound') {
    return <CallReceived color={color} />;
  }
  return <CallMade color={color} />;
};
CallAvatar.propTypes = {
  type: PropTypes.string,
  direction: PropTypes.string,
};

export default CallAvatar;
