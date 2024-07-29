import { Box, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// BreadcrumbsNavigation component to display breadcrumb navigation
const BreadcrumbsNavigation = () => {
    return (
        <Box
            sx={{
                bgcolor: "white",
                borderRadius: "12px",
                padding: 1,
                marginBottom: 2,
                display: "flex",
                justifyContent: "space-between"
            }}
        >
            {/* Title of the breadcrumb */}
            <Typography variant="h6">Projects</Typography>

            {/* Breadcrumb links */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2
                }}
            >
                {/* Home icon */}
                <HomeIcon />
                {/* First breadcrumb link */}
                <Typography>
                    Form
                </Typography>
                {/* Chevron icon */}
                <ChevronRightIcon />
                {/* Second breadcrumb link */}
                <Typography>
                    Text Field
                </Typography>
            </Box>
        </Box>
    );
};

export default BreadcrumbsNavigation;
