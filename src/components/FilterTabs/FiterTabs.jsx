import  React  from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}



TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function FilterTabs({value, handleChange}) {
    return (
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              sx={{
                "& button": { color: "white" },
                "& button.Mui-selected": { color: "white" }
              }}
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#34c94b"
                }
              }}
            >
              <Tab label="All" {...a11yProps(0)} />
              <Tab label="Rock" {...a11yProps(1)} />
              <Tab label="Pop" {...a11yProps(2)} />
              <Tab label="Jazz" {...a11yProps(3)} />
              <Tab label="Blues" {...a11yProps(4)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            All
        </TabPanel>
        <TabPanel value={value} index={1}>
            Rock
        </TabPanel>
        <TabPanel value={value} index={2}>
            Pop
        </TabPanel>
        <TabPanel value={value} index={3}>
            Jazz
        </TabPanel>
        <TabPanel value={value} index={4}>
            Blues
        </TabPanel>
        </Box>
    );
  
}
