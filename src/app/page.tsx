import Image from "next/image";
import styles from "./page.module.css";
import LoginForm from "./auth/sigin-in/page";
import { Box, Toolbar, Typography } from "@mui/material";
import Navbar from "../components/navbar/Navbar"
import Sidebar from "@/components/sidebar/Sidebar";

export default function Home() {
  return <Box sx={{ display: 'flex', width: '100%' }}>
    <Sidebar />
    <Box component="main"
      sx={{ flexGrow: 1, width: { sm: `calc(100% - ${240}px)` } }}>
      <Navbar />
      <Box
        component="main"
        bgcolor={"#EEF2F6"}
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus vel, officiis at, ratione fugit nam, voluptatibus pariatur nulla molestiae voluptatum ullam atque minima sit non praesentium hic culpa repudiandae reiciendis.
          Blanditiis distinctio eveniet quasi aliquid repudiandae, molestiae officiis similique? Beatae fugiat nisi quia quidem rerum perspiciatis possimus sint voluptate commodi sit soluta nesciunt illum, dicta aliquid natus, excepturi laborum quas.
          Aspernatur, dolor! Obcaecati possimus quaerat, voluptatem asperiores molestiae magnam quisquam dolore veritatis tenetur corporis sequi modi quidem! Doloremque omnis, porro quasi dolor maiores cum, temporibus tempora voluptatum voluptatibus blanditiis aut.
          Nostrum quo quisquam illum nisi ipsum ipsam temporibus aut, sunt id eius, eaque dicta nam harum dolorum ducimus libero earum at. Consectetur dicta non, qui ipsum eaque perferendis perspiciatis iure.
          Nesciunt ut, voluptates facere voluptatum ipsam illo beatae soluta ducimus tenetur quibusdam ex assumenda! Aspernatur unde reiciendis fugiat! Explicabo atque quibusdam laudantium odit exercitationem sapiente possimus similique cum omnis repellendus.
        </Typography>
      </Box>
    </Box>
  </Box>
}
