
import React from 'react';
import { Modal, Box, Typography, List} from '@mui/material';


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




function ReviewModalShimmer() {


    return (
        <Modal
            open={true}

            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-title" variant="h6" component="h2" textAlign={"center"}>
                    Reviews
                </Typography>
            <List sx={{
                textAlign:"center"
            }}>
              
                Loading...
            </List>
            </Box >
        </Modal >
    );
};

export default ReviewModalShimmer;
