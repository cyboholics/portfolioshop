import React from "react";
import InfoIcon from "@mui/icons-material/Info"
import { Box, Tabs, Tab, Typography, Tooltip, IconButton } from "@mui/material"
import Paper from "../../MuiComponents/Paper"
import Awards from "./ResumeComponents/Awards"
import Cocurricular from "./ResumeComponents/Cocurricular"
import Experience from "./ResumeComponents/Experience"
import Education from "./ResumeComponents/Education"
import Por from "./ResumeComponents/Por"
import Publications from "./ResumeComponents/Publications"

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
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
    };
}

export default function FullWidthTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Paper>
            <Typography variant="h5">
                Resume
                <Tooltip arrow placement="right" title="Information about your Resume that will be displayed on the Website in a dedicated section">
                    <IconButton>
                        <InfoIcon fontSize={"small"} />
                    </IconButton>
                </Tooltip>
            </Typography>
            <>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons={false}
                    allowScrollButtonsMobile
                    aria-label="full width tabs example"
                >
                    <Tab wrapped label="Education" {...a11yProps(0)} />
                    <Tab wrapped label="Experience" {...a11yProps(1)} />
                    <Tab wrapped label="POR" {...a11yProps(2)} />
                    <Tab wrapped label="Awards" {...a11yProps(3)} />
                    <Tab wrapped label="Publications" {...a11yProps(4)} />
                    <Tab wrapped label="Cocurriculars" {...a11yProps(5)} />
                </Tabs>
            </>
            <Box
                sx={{paddingTop:2, paddingLeft:0}}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0}>
                    <Education />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Experience />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Por />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Awards />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Publications />
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <Cocurricular />
                </TabPanel>
            </Box>
        </Paper>
    );
}