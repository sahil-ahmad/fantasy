import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
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

export default function Contanthowtoplay() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Cricket" {...a11yProps(0)} />
          <Tab label="Football" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <h2>How to Play Cricket</h2>
        <ol>
          <li>Select a match from the available games on the fantasy app.</li>
          <li>Create a team of 11 players within the given budget.</li>
          <li>Choose a captain and vice-captain to earn extra points.</li>
          <li>Track live performance to score points based on real matches.</li>
          <li>Join contests and compete with others to win rewards.</li>
        </ol>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <h2>How to Play Football</h2>
        <ol>
          <li>Select a football match from the fantasy app's fixtures.</li>
          <li>Create a team of 11 players, ensuring balance in all positions (goalkeeper, defenders, midfielders, and forwards).</li>
          <li>Appoint a captain and vice-captain for extra points.</li>
          <li>Monitor the performance of your players in real-time matches.</li>
          <li>Participate in contests and aim for the highest rank to win prizes.</li>
        </ol>
      </CustomTabPanel>
    </Box>
  );
}
