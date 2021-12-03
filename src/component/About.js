import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(12),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    heading: {
        fontSize: 16,
        fontWeight: "bold",
        textTransform: "uppercase",
        lineHeight: "normal"
    },
    containerLine: {
        color: "#393E52",
        letterSpacing: "-0.5px",
        borderLeft: "10px solid",
        padding: "20px 15px",
        borderImage: "linear-gradient(#00DBDE, #FC00FF) 1",
        lineHeight: "1.1",
    },
    bgFirst: {
        background: "#F4F8F9",
        borderRadius: "10px"
    },
    bgSecond: {
        borderRadius: "10px",
        margin: "0 0 0 10px",
        boxShadow: "10px 10px 6px -13px #888888"
    },
    subItems:{
        marginLeft: 10
    }
}));

const getAge = (date) => {
    return Math.floor(((new Date()).getTime() - (new Date(date)).getTime())/(1000*60*60*24*365.25))
}
function About() {
    const classes = useStyles();
    return (
        <Grid container spacing={2}>
            <Grid container item xs={12} sm={4} className={classes.bgFirst} spacing={2}>
                <Grid container item xs={12}>
                    <Grid item xs={6} sm={5}><span className={classes.heading}>age</span></Grid>
                    <Grid item xs={6} sm={7}><span>{getAge('June 30, 1996')}</span></Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={6} sm={5}><span className={classes.heading}>Education</span></Grid>
                    <Grid item xs={6} sm={7}><span>Master of Computer Application (Uttarakhand Technical University).</span></Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={6} sm={5}><span className={classes.heading}>Short Bio</span></Grid>
                    <Grid item xs={6} sm={7}><span>I am a Full-Stack Web Developer. Having {getAge('Jan 22, 2018')}+ years industrial experience. Keen to learn trending web/cloud technologies. Always open for new ideas and innovations.</span></Grid>
                </Grid>
            </Grid>
            <Grid container item xs={12} sm={8} className={classes.bgSecond} spacing={1}>
                <Grid container item xs={12}>
                    <Grid item xs={12}><span className={classes.heading}>Technologies</span></Grid>
                    <Grid item xs={12} className={classes.subItems}><strong>Frontend:</strong>&nbsp; Angular, ReactJS</Grid>
                    <Grid item xs={12} className={classes.subItems}><strong>Backend:</strong>&nbsp; NodeJS, Express JS, Koa JS, GraphQL, Python (Pandas, Numpy)</Grid>
                    <Grid item xs={12} className={classes.subItems}><strong>Database:</strong>&nbsp; MongoDB, MySQL, PostgreSQL</Grid>
                    <Grid item xs={12} className={classes.subItems}><strong>Cloud:</strong>&nbsp; AWS (EC2, LightSail, S3, Lambda), Azure, Kubernetes, Docker, Serverless</Grid>
                    <Grid item xs={12} className={classes.subItems}><strong>OS:</strong>&nbsp; Windows, Linux(Ubuntu), MacOS</Grid>
                    <Grid item xs={12} className={classes.subItems}><strong>Other skills:</strong>&nbsp; GraphQL, D3, Web Hosting, Domain Pointing, SSL Certificate Installation</Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default About;