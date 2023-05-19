import '../App.css';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import * as React from 'react';
import PropTypes from 'prop-types';


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

const TabToolbar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
      setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        textColor="#315047"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#BBD4CD"
          }
        }}
      >
        <Tab label="Yleinen info" {...a11yProps(0)} />
        <Tab label="Adoptoiminen Suomessa" {...a11yProps(1)} />
        <Tab label="Linkkejä" {...a11yProps(2)} />
        <Tab label="Kampanjavideo" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography className="font" sx={{ mt: 3, mb: 3}}>
          Löytöeläimien määrä on ongelma kaikkialla maailmassa, myös Suomessa. Meillä Suomessakin
          on paljon eläimiä, jotka on löydetty yksin luonnosta kulkemasta tai muuten otettu hoitoon
          ja tarvitsevat näin kotia sekä hoivaa.<br/><br/>

          "Adoptoi, älä osta" -kampanjavideon löydät viimeiseltä välilehdeltä - käy katsomassa!<br/>
          Alta löydät myös chatin, johon voit laittaa kommenttia tai kysymyksiä sekä tykätä muiden viesteistä. 
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography className="font" sx={{ mt: 3, mb: 3}}>
          Miten mahdollista?<br/>
          Suomesta löytyy eri paikkakunnilta adoptoimiseen mahdollistavia keskuksia, kuten 
          löytö- ja sijaiseläinkoteja, joihin voi hakemusta lemmikin adoptoimisesta lähettää.
          Kannattaa Googlata yleistä tietoa adoptoimisesta sekä itse adoptioprosessista.<br/><br/>
          Missä mahdollista?<br/>
          Mahdollista missä vain. Löytöeläinkodeilla on omat sijaintinsa, mutta tämä ei kuitenkaan estä 
          tekemästä matkaa adoptoidakseen lemmikin.<br/><br/>
          Miksi adoptoida?<br/>
          Adoptoiminen on eettistä sekä tukee kestävää kehitystä. 
          Lisäksi monet lemmikit tarvitsevat apua, ja tätä apua voi heille tarjota antamalla kodin sekä 
          huolenpitoa ja rakkautta.<br/><br/>
          Mitä lemmikin adoptoiminen maksaa?<br/>
          Lemmikkiä adoptoidessa on joitain kustannuksia Suomessa, ja adoptio saattaa maksaa 
          muutamia satoja euroa. Tämä maksu auttaa löytöeläinkoteja rahoittamaan toimintaansa sekä 
          varmistamaan lemmikin terveyden ennen adoptiota.<br/><br/>
          Löytö- ja sijaiseläinkotitoiminnan tukeminen<br/>
          Toimintaa mahdollista tukea rahallisesti lahjoituksen muodossa, ostamalla toimintaa 
          tukevia tuotteita sekä osallistumalla tarvikekeräyksiin kaupoissa.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Typography className="font" sx={{ mt: 3, mb: 3}}>
        Yleistä tietoa löytöeläimistä sekä adoptoimisesta:<br/>
        Suomen eläinsuojelu: 
          <a href="https://sey.fi/" target="_blank" rel="noopener noreferrer">sey.fi</a><br/>
        Rescueyhdistys Kulkurit: 
          <a href="https://kulkurit.fi/" target="_blank" rel="noopener noreferrer">kulkurit.fi</a><br/><br/>

        Löytöeläinkoteja Suomessa:<br/>
        Pet Rescue Finland: 
          <a href="https://www.petrescuefin.fi/" target="_blank" rel="noopener noreferrer">petrescuefin.fi</a><br/>
        Helsingin eläinsuojeluyhdistys: 
          <a href="https://www.hesy.fi/" target="_blank" rel="noopener noreferrer">hesy.fi</a><br/>
        Kampanjavideolla mainittu löytöeläinkoti Oulussa: 
          <a href="https://popopet.net/" target="_blank" rel="noopener noreferrer">popopet.net</a><br/><br/>
        
        Löytöeläinkoteja, niiden informaatiota sekä itse löytöeläimet löytyvät heidän omilta sivuiltaan.
        Löytöeläinkoteja voi esimerkiksi Googlata kaupungin tai maakunnan avulla.
      </Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/Ll_gZ35x0k0" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>
      </TabPanel>
    </Box>
  )
}

export default TabToolbar;
  