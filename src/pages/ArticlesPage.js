import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ArticlesPage = () => (
  <>
    <Typography variant="h2">Articles Page</Typography>
    <Link to="/articleFormPage">
      <Button>New Article</Button>
    </Link>
  </>
);

export default ArticlesPage;
