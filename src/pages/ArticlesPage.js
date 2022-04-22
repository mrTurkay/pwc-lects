import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import Layout from "../layout";

const ArticlesPage = () => (
  <Layout pageName="Articles">
    <Typography variant="h2">Articles Page</Typography>
    <Link to="/articleFormPage">
      <Button>New Article</Button>
    </Link>
  </Layout>
);

export default ArticlesPage;
