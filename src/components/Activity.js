import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { List, Switch, FormControlLabel, Grid, Fab } from '@mui/material';
import { Autorenew } from '@mui/icons-material';

import ActivityItem from './ActivityItem';
import ActivityDetails from './ActivityDetails';

const Activity = () => {
  useEffect(async () => {
    await getActivities();
  }, []);
  const [activities, setActivities] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [openDetail, setDetailOpen] = React.useState(false);
  const [detailId, setDetailId] = React.useState(false);

  const handleDetailsOpen = id => {
    setDetailOpen(true);
    setDetailId(id);
  };
  const handleDetailsClose = () => {
    setDetailOpen(false);
    setDetailId(null);
  };

  const getActivities = async () => {
    const result = await axios.get(
      'https://aircall-job.herokuapp.com/activities'
    );
    setActivities(result.data);
  };
  const updateCall = async (id, isArchived) => {
    try {
      const result = await axios.post(
        `https://aircall-job.herokuapp.com/activities/${id}`,
        {
          is_archived: !isArchived,
        }
      );
      if (result.statusText !== 'OK') {
        throw new Error('Update failed');
      }
    } catch (error) {
      console.error(error);
    } finally {
      await getActivities();
    }
  };
  const resetActivities = async () => {
    try {
      await axios.get('https://aircall-job.herokuapp.com/reset');
    } catch (error) {
      console.error(error);
    } finally {
      await getActivities();
    }
  };

  if (!activities || activities.length === 0) return null;
  return (
    <>
      <Grid container direction="column" justifyContent="space-between">
        <Grid item container justifyContent="flex-end">
          <FormControlLabel
            control={
              <Switch
                checked={showAll}
                onChange={e => setShowAll(e.target.checked)}
              />
            }
            label="Show Archives"
          />
        </Grid>
        <Grid item>
          <List>
            {activities.map(a => {
              const {
                id,
                call_type: type,
                created_at: createdAt,
                direction,
                duration,
                from,
                is_archived: isArchived,
                to,
                via,
              } = a;
              return (
                <ActivityItem
                  key={id}
                  id={id}
                  type={type}
                  createdAt={createdAt}
                  direction={direction}
                  duration={duration}
                  from={from}
                  isArchived={isArchived}
                  to={to}
                  via={via}
                  showAll={showAll}
                  updateCall={updateCall}
                  openDetail={() => handleDetailsOpen(id)}
                />
              );
            })}
          </List>
        </Grid>
        <Grid item container justifyContent="flex-end">
          <Fab color="primary" size="small" onClick={resetActivities}>
            <Autorenew />
          </Fab>
        </Grid>
      </Grid>

      <ActivityDetails
        open={openDetail}
        handleClose={handleDetailsClose}
        id={detailId}
      />
    </>
  );
};

export default Activity;
