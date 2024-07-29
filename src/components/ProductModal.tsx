import React from 'react';
import { Modal, Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Review, ReviewModalProps } from '@/types/types';

// Styles for the modal
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
};

// Fetch product data by ID
async function fetchProduct(id: number) {
    const res = await fetch(`http://localhost:3000/api/products/${id}`);
    const data = await res.json();
    return data.data;
}

// ReviewModal component to display product reviews
async function ReviewModal({ open, handleClose, id }: ReviewModalProps) {
    // Fetch product data
    const data = await fetchProduct(id);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-title" variant="h6" component="h2">
                    Reviews
                </Typography>
                <List>
                    {/* Map through the reviews and display each one */}
                    {data?.reviews?.map((review: Review, index: number) => (
                        <div key={index}>
                            <ListItem alignItems="flex-start">
                                <ListItemText
                                    primary={`Rating: ${review?.rating} - ${review?.reviewerName}`}
                                    secondary={
                                        <>
                                            <Typography component="span" variant="body2" color="text.primary">
                                                {review?.comment}
                                            </Typography>
                                            <br />
                                            <Typography component="span" variant="body2" color="text.secondary">
                                                {new Date(review?.date).toLocaleDateString()}
                                            </Typography>
                                        </>
                                    }
                                />
                            </ListItem>
                            {/* Add a divider between reviews */}
                            {index < data?.reviews?.length - 1 && <Divider />}
                        </div>
                    ))}
                </List>
            </Box>
        </Modal>
    );
};

export default ReviewModal;
