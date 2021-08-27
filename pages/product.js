import React from 'react'
import GlPage from '../Componets/GlPage'
import Container from '../Containers/Container'
import ProductWrapper from '../Wrappers/ProductWrapper'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@material-ui/core';
import Link from 'next/link';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
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

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: "100%",
    },
}));

const Product = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
    return (
        <Container>
            <ProductWrapper>
                <GlPage />
                <div className="global_category">
                    <h1>Категории</h1>
                    <div className={classes.root}>
                        <AppBar position="static" color="default">
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                variant="fullWidth"
                                aria-label="full width tabs example"
                            >
                                <Tab label="Жилые здания" {...a11yProps(0)} />
                                <Tab label="Предприятия" {...a11yProps(1)} />
                                <Tab label="Индустрия" {...a11yProps(2)} />
                                <Tab label="Коммунальная техника" {...a11yProps(3)} />
                            </Tabs>
                        </AppBar>
                        <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={value}
                            onChangeIndex={handleChangeIndex}
                        >
                            <TabPanel value={value} index={0} dir={theme.direction}>

                                <div className="row">
                                    <div className="col-md-6 col-lg-4 col-xl-3 p-3" style={{ height: "450px" }}>
                                        <div className="h-100 shadow p-3 d-flex flex-column justify-content-between rounded-3">
                                            <img className="w-100 h-50" style={{ objectFit: "cover" }} src="https://orzu-tehnopark.s3.amazonaws.com/viessmann/product2.webp" alt="" />
                                            <div>
                                                <h4>Product name</h4>
                                                <p className="mb-2">Product Price</p>
                                                <p className="text-warning">
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                </p>
                                                <p>
                                                    Product Description
                                                </p>
                                                <Link href="#"><a>Info</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </TabPanel>
                            <TabPanel value={value} index={1} dir={theme.direction}>
                            <div className="row">
                                    <div className="col-md-6 col-lg-4 col-xl-3 p-3" style={{ height: "450px" }}>
                                        <div className="h-100 shadow p-3 d-flex flex-column justify-content-between rounded-3">
                                            <img className="w-100 h-50" style={{ objectFit: "cover" }} src="https://orzu-tehnopark.s3.amazonaws.com/viessmann/product2.webp" alt="" />
                                            <div>
                                                <h4>Product name</h4>
                                                <p className="mb-2">Product Price</p>
                                                <p className="text-warning">
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                </p>
                                                <p>
                                                    Product Description
                                                </p>
                                                <Link href="#"><a>Info</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={2} dir={theme.direction}>
                            <div className="row">
                                    <div className="col-md-6 col-lg-4 col-xl-3 p-3" style={{ height: "450px" }}>
                                        <div className="h-100 shadow p-3 d-flex flex-column justify-content-between rounded-3">
                                            <img className="w-100 h-50" style={{ objectFit: "cover" }} src="https://orzu-tehnopark.s3.amazonaws.com/viessmann/product2.webp" alt="" />
                                            <div>
                                                <h4>Product name</h4>
                                                <p className="mb-2">Product Price</p>
                                                <p className="text-warning">
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                </p>
                                                <p>
                                                    Product Description
                                                </p>
                                                <Link href="#"><a>Info</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={3} dir={theme.direction}>
                            <div className="row">
                                    <div className="col-md-6 col-lg-4 col-xl-3 p-3" style={{ height: "450px" }}>
                                        <div className="h-100 shadow p-3 d-flex flex-column justify-content-between rounded-3">
                                            <img className="w-100 h-50" style={{ objectFit: "cover" }} src="https://orzu-tehnopark.s3.amazonaws.com/viessmann/product2.webp" alt="" />
                                            <div>
                                                <h4>Product name</h4>
                                                <p className="mb-2">Product Price</p>
                                                <p className="text-warning">
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                </p>
                                                <p>
                                                    Product Description
                                                </p>
                                                <Link href="#"><a>Info</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </SwipeableViews>
                    </div>
                </div>
            </ProductWrapper>
        </Container>
    )
}

export default Product
