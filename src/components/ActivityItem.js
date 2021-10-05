import React from "react";
import PropTypes from "prop-types";

import {
	ListItem,
	IconButton,
	ListItemText,
	ListItemAvatar,
} from "@mui/material";
import { Archive, AddBox } from "@mui/icons-material";
import CallAvatar from "./CallAvatar";
const ActivityItem = ({
	id,
	type,
	createdAt,
	direction,
	duration,
	from,
	isArchived,
	to,
	showAll,
	updateCall,
	openDetail,
}) => {
  const handleUpdateClick = (e, id, isArchived) => {
    e.stopPropagation()
		updateCall(id, isArchived);
	};
	if (isArchived && !showAll) return null;
	return (
		<ListItem
			secondaryAction={
				<IconButton
					edge="end"
					aria-label="archive"
					onClick={(e) => handleUpdateClick(e, id, isArchived)}
				>
					{isArchived ? <AddBox /> : <Archive />}
				</IconButton>
			}
			onClick={() => openDetail(id)}
		>
			<ListItemAvatar>
				<CallAvatar type={type} direction={direction} />
			</ListItemAvatar>
			<ListItemText primary={from || "Unknown"} secondary={to || "Unknown"} />
		</ListItem>
	);
};

export default ActivityItem;

ActivityItem.propTypes = {
	id: PropTypes.number,
	type: PropTypes.string,
	createdAt: PropTypes.string,
	direction: PropTypes.string,
	duration: PropTypes.string,
	from: PropTypes.string,
	isActive: PropTypes.bool,
	to: PropTypes.string,
	via: PropTypes.string,
};