import { Box, Divider, Typography } from "@mui/material"; // Importing components from MUI library.
import Navbar from "../components/navbar/Navbar"; // Importing Navbar component.
import Sidebar from "@/components/sidebar/Sidebar"; // Importing Sidebar component.
import ProductTable from "@/components/ProductTable"; // Importing ProductTable component.



async function fetchProducts() {
  const res = await fetch('http://localhost:3000/api/products');
  const data = await res.json();
  return data.data;

}


export default async function Home() {
  const data = await fetchProducts();
  return (
    <Box sx={{ display: 'flex', width: '100%'  }}>
      <Sidebar /> {/* Sidebar component */}
      <Box component="main" sx={{ flexGrow: 1, width: { sm: `calc(100% - ${240}px)` } }}>
        <Navbar /> {/* Navbar component */}
        <Box component="main" bgcolor={"#EEF2F6"} sx={{ flexGrow: 1, p: 2 }}>
          <Box sx={{ bgcolor: "white", borderRadius: "6px" }}>
            <Box padding={1}>
              <Typography>Projects</Typography> {/* Projects title */}
            </Box>
            <Divider /> {/* Divider line */}
            <Box padding={1}>
              <ProductTable data={data}  /> {/* ProductTable component */}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}






