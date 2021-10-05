import React from "react";
import {
  Button,
  Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@mui/material";

const ActivityDetails = ({
	id,
	call_type: type,
	created_at: createdAt,
	direction,
	duration,
	from,
	is_archived: isArchived,
	to,
	via,
	open,
	handleClose,
}) => {
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
			<Dialog
				open={open}
				onClose={handleClose}
			>
				<DialogTitle>
					
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Let Google help apps determine location. This means sending
						anonymous location data to Google, even when no apps are running.
					</DialogContentText>
				</DialogContent>
				{/* <DialogActions>
					<Button onClick={handleClose}>Disagree</Button>
					<Button onClick={handleClose} autoFocus>
						Agree
					</Button>
				</DialogActions> */}
			</Dialog>
		</>
	);
};

export default ActivityDetails;
