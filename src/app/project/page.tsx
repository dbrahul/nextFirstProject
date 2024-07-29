import { Box, Divider, Typography } from "@mui/material"; // Importing components from MUI library.
import Navbar from "../../components/navbar/Navbar"; // Importing Navbar component.
import Sidebar from "@/components/sidebar/Sidebar"; // Importing Sidebar component.
import ProductTable from "@/components/ProductTable"; // Importing ProductTable component.
import BreadcrumbsNavigation from "@/components/navbar/NavigationBreadCrumb";



// function to fetch the product from the server
async function fetchProducts() {
  const res = await fetch('http://localhost:3000/api/products');
  const data = await res.json();
  return data.data;

}


export default async function Dashboard() {

  const data = await fetchProducts();  // invoking the fetchProducts function
  
  return (
    <Box sx={{ display: 'flex', width: '100%'  }}>
      <Sidebar /> {/* Sidebar component */}
      <Box component="main" sx={{ flexGrow: 1, width: { sm: `calc(100% - ${240}px)` } }}>
        <Navbar /> {/* Navbar component */}
       
        <Box component="main" bgcolor={"#EEF2F6"} sx={{ flexGrow: 1, p: 2 }}>
         <BreadcrumbsNavigation/>
          <Box sx={{ bgcolor: "white", borderRadius: "12px" }}>
            <Box padding={1}>
              <Typography sx={{
                paddingLeft:1
              }}>Projects</Typography> {/* Projects title */}
            </Box>
            <Divider /> {/* Divider line */}
            <Box padding={2}>
              <ProductTable data={data}  /> {/* ProductTable component */}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}