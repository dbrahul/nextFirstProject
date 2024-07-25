import Image from "next/image";
import styles from "./page.module.css";
import LoginForm from "./auth/sigin-in/page";
import { Box, Divider, Toolbar, Typography } from "@mui/material";
import Navbar from "../components/navbar/Navbar"
import Sidebar from "@/components/sidebar/Sidebar";
import ProductTable from "@/components/ProductTable";

export default function Home() {
  return <Box sx={{ display: 'flex', width: '100%' }}>
    <Sidebar />
    <Box component="main"
      sx={{ flexGrow: 1, width: { sm: `calc(100% - ${240}px)` } }}>
      <Navbar />
      <Box
        component="main"
        bgcolor={"#EEF2F6"}
        sx={{ flexGrow: 1, p: 2 }}
      >
        <Box sx={{
          bgcolor: "white",
          borderRadius: "6px",
        }}>

          <Box padding={1}>
            <Typography>
              Projects
            </Typography>
          </Box>
          <Divider />
          <Box padding={1}>
          <ProductTable/>
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
}
