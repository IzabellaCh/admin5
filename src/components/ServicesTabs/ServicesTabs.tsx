'use client';
import { useState, SyntheticEvent } from 'react';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { SERVICES, ServiceData } from '@/shared/serviceData/service.data';
import { ServiceTabContent } from '@/components/ServiceTabContent/ServiceTabContent';

type a11yPropsTypes = {
  id: string;
  ['aria-controls']: string;
};

export type a11yPropsFuncType = (index: number) => a11yPropsTypes;

const a11yProps: a11yPropsFuncType = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

export const ServicesTabs = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        className="services"
        value={value}
        onChange={handleChange}
        aria-label="services"
        orientation="vertical"
        sx={{
          '@media (max-width:900px)': {
            display: 'none',
          },
        }}
      >
        {SERVICES.map((service: ServiceData, index: number) => (
          <Tab
            key={index}
            label={
              <span style={{ display: 'flex' }}>
                <Typography
                  variant="body1"
                  color="secondary.main"
                  position="relative"
                  top="7px"
                >{`0${index + 1}`}</Typography>
                <Typography
                  variant="h1"
                  sx={{
                    '@media (max-width:1080px)': {
                      fontSize: 35.45,
                      lineHeight: '39.973px',
                      maxWidth: '200px',
                    },
                  }}
                >
                  {service.title}
                </Typography>
              </span>
            }
            {...a11yProps(index)}
            disableRipple
          />
        ))}
      </Tabs>
      {SERVICES.map((service: ServiceData, index: number) => (
        <Box
          key={index}
          hidden={value !== index}
          sx={{
            width: '55%',
            '@media (max-width:1080px)': {
              width: '70%',
            },
            '@media (max-width:900px)': {
              display: 'none',
            },
          }}
        >
          <ServiceTabContent service={service}></ServiceTabContent>
        </Box>
      ))}
    </>
  );
};
