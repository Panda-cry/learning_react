import { ListItem, Button, Grid } from "@mui/material";

function QuoteItem(props) {
  return (
    <ListItem id={props.id} key={props.id}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8}>
          <div>
            <span style={{ fontWeight: "bold" }}>{props.author}</span>
          </div>
        </Grid>
        <Grid item xs={8}>
          <div>
            <span>{props.quote}</span>
          </div>
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined" color="primary">
            Full Screen
          </Button>
        </Grid>
      </Grid>
    </ListItem>
  );
}

export default QuoteItem;
