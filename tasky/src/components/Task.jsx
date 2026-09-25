import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import Chip from '@mui/material/Chip';

const Task = (props) => {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }} sx={{ display: 'flex' }}>
      <Card
        sx={{
          backgroundColor: props.done ? 'lightgreen' : 'lightblue',
          padding: '20px',
          borderRadius: 2,
          width: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <CardHeader
          title={props.title}
          sx={{
            backgroundColor: 'rgb(132, 48, 147)',
            color: 'rgb(181, 211, 234)',
            borderRadius: '2px',
            padding: '15px',
            textAlign: 'center'
          }}
        />

        <CardContent
          sx={{
            flexGrow: 1,
            textAlign: 'center'
          }}
        >
          <Box sx={{ mt: 1, mb: 3 }}>
            <Chip
              label={`Due: ${props.deadline}`}
              color="secondary"
              variant="outlined"
              size="small"
            />
          </Box>

          <Typography
            component="p"
            variant="subtitle1"
            align="center"
            sx={{ fontStyle: 'italic' }}
          >
            {props.description}
          </Typography>
        </CardContent>

        <CardActions
          sx={{
            justifyContent: 'space-between',
            padding: '8px 0',
            mt: 'auto',
            gap: 1
          }}
        >
          <Button
            variant="contained"
            size="small"
            color="success"
            startIcon={<DoneIcon />}
            onClick={props.markDone}
          >
            Done
          </Button>

          <Button
            variant="contained"
            size="small"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={props.deleteTask}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Task;