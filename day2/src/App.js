import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Container, Typography } from "@mui/material";
import Test1 from "./Test1";
import Test2 from "./Test2";
import Test3 from "./Test3";
import Test4 from "./Test4";
import Test5 from "./Test5";

export default function App() {
  return (
    <div>
      {/* Navbar */}
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "left", gap: "20px" }}>
          <Button style={{fontSize: "1.2rem", paddingBottom:"9px"  }} color="inherit" component={Link} to="/">v2.0 tututorial</Button>
          <Button color="inherit" component={Link} to="/test1">Test1</Button>
          <Button color="inherit" component={Link} to="/test2">Test2</Button>
          <Button color="inherit" component={Link} to="/test3">Test3</Button>
          <Button color="inherit" component={Link} to="/test4">Test4</Button>
          <Button color="inherit" component={Link} to="/test5">Test5</Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container style={{ textAlign: "center", padding: "20px" }}>
        

        <Routes>
          <Route path="/" element={<Typography variant="h5">Home Page</Typography>} />
          <Route path="/test1" element={<Test1 />} />
          <Route path="/test2" element={<Test2 />} />
          <Route path="/test3" element={<Test3 />} />
          <Route path="/test4" element={<Test4 />} />
          <Route path="/test5" element={<Test5 />} />
        </Routes>
      </Container>
    </div>
  );
}
