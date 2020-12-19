import React from 'react';
import './../assets/css/style.css';
import Header from './Header';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import About from './About';
import Contact from './Contact';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    fullWidth:{
        width:"100%"
    }
});
function Home() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <React.Fragment>
            <Header />
            <section className="header-wrapper">
                <div className="container">
                    <div className="row">
                        <Paper className={classes.root}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                centered
                            >
                                <Tab label="About" />
                                {/* <Tab label="Contact" /> */}
                            </Tabs>
                        </Paper>
                    </div>

                </div>
                <div className="container-fluid user-info">
                    <div className="row">
                        <TabPanel className={classes.fullWidth} value={value} index={0}>
                            <About/>
                        </TabPanel>
                        {/* <TabPanel className={classes.fullWidth} value={value} index={1}>
                            <Contact />
                        </TabPanel> */}
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Home;