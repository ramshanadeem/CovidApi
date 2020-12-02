import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';


const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        margin: '10px',
        border: '2px solid grey'
    },
    media: {
        height: 140,
    },
});

export default function MediCard({ text, value, color }) {
    const classes = useStyles();

    return (
        <Card className={classes.root} style={{ backgroundColor: color }}>
            <CardActionArea>
                <CardContent >
                    <Typography gutterBottom variant="h5" component="h2">
                        {text}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <CountUp end={value} />

                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>

            </CardActions>
        </Card>
       
    );
}