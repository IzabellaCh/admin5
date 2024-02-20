'use client';
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import Button, { buttonClasses } from '@mui/material/Button';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

import { CustonMuiIcon } from '@/mui/muiCustomIcon';

import { CalculatorForm } from '../Form/CalculatorForm/CalculatorForm';
import { TariffType, AllTariffs } from './calculator.data';
import { Counter } from '../Counter/Counter';

export const Calculator = () => {
  const tariffs = useRef<HTMLDivElement>(null);
  const [isTariffsOpen, setTariffsOpen] = useState<boolean>(false);

  const [currentTariff, setCurrentTariff] = useState<TariffType>(AllTariffs[0]);

  const [pcCounter, setPcCounter] = useState<number>(1);
  const [windowCounter, setWindowCounter] = useState<number>(0);
  const [linuxCounter, setLinuxCounter] = useState<number>(0);
  const [accessPointCounter, setAccessPointCounter] = useState<number>(0);
  const [nasCounter, setNasCounter] = useState<number>(0);

  const [sum, setSum] = useState<number>(0);

  const addSpacesToNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const handlePcNumberChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setPcCounter(newValue);
    }
  };

  useEffect(() => {
    const pcPrice =
      pcCounter < 5
        ? currentTariff.pc1
        : pcCounter < 10
        ? currentTariff.pc5
        : currentTariff.pc10;

    const pcSum = pcPrice * pcCounter;
    const windowSum = currentTariff.windowServer * windowCounter;
    const linuxSum = currentTariff.linuxServer * linuxCounter;
    const accessPointSum = currentTariff.accessPoint * accessPointCounter;
    const nasSum = currentTariff.nas * nasCounter;

    const allPrice =
      pcSum +
      windowSum +
      linuxSum +
      accessPointSum +
      nasSum +
      currentTariff.serverRool;

    setSum(allPrice);
  }, [
    pcCounter,
    windowCounter,
    linuxCounter,
    accessPointCounter,
    nasCounter,
    currentTariff,
  ]);

  return (
    <Box
      p="29px 40px 21px"
      border="1px solid"
      borderColor="primary.main"
      borderRadius="10px"
      maxWidth="1080px"
      minHeight="619px"
    >
      <Grid container spacing={10}>
        <Grid item xs={4} display="flex" flexDirection="column">
          <ClickAwayListener onClickAway={() => setTariffsOpen(false)}>
            <Stack
              pt="12px"
              ref={tariffs}
              onClick={(e) => e.stopPropagation()}
              position="relative"
              minHeight="52px"
            >
              <Stack
                rowGap="7px"
                position="absolute"
                top="0px"
                left="-18px"
                borderRadius="6px"
                padding="12px 18px"
                sx={{
                  backgroundColor: 'primary.contrastText',
                  boxShadow: isTariffsOpen ? '0px 4px 4px 0px #0000000d' : '',
                }}
              >
                <Button
                  variant="primitive"
                  sx={{ display: 'flex', justifyContent: 'flex-start' }}
                  endIcon={
                    <CustonMuiIcon
                      type={isTariffsOpen ? 'icon-arrow-up' : 'icon-arrow-down'}
                      size="21px"
                      sx={{
                        '& path': {
                          fill: 'transparent',
                        },
                        [`& .${buttonClasses.endIcon} > *:nth-of-type(1)`]: {
                          fontSize: '21px',
                        },
                      }}
                    />
                  }
                  onClick={() => setTariffsOpen((state) => !state)}
                >
                  {currentTariff.name}
                </Button>
                {isTariffsOpen &&
                  AllTariffs.map((item, index) => (
                    <Button
                      key={index}
                      variant="primitive"
                      sx={{
                        display: item === currentTariff ? 'none' : 'flex',
                        justifyContent: 'flex-start',
                      }}
                      onClick={() => {
                        setCurrentTariff(item);
                        setTariffsOpen(false);
                      }}
                    >
                      {item.name}
                    </Button>
                  ))}
              </Stack>
            </Stack>
          </ClickAwayListener>
          <Typography
            variant="caption"
            color="primary.main"
            pb="29px"
            pt="12px"
          >
            Тариф определяет время реагирования и коллическо выездов в месяц.
            Все остальное Вы настраиваете сами.
          </Typography>
          <Stack maxWidth="250px" pb="30px">
            <Typography variant="body1" color="secondary.main">
              Количество ПК:{' '}
              <span style={{ fontWeight: 700 }}>{pcCounter}</span>
            </Typography>
            <Slider
              value={pcCounter}
              min={1}
              step={1}
              max={10}
              onChange={handlePcNumberChange}
              aria-labelledby="calculator-slider"
            />
          </Stack>
          <Stack rowGap="16px">
            <Counter
              counter={windowCounter}
              setCounter={setWindowCounter}
              title="Windows"
              subtitle="Сервер на ОС Windows"
            />
            <Counter
              counter={linuxCounter}
              setCounter={setLinuxCounter}
              title="Linux"
              subtitle="Сервер на ОС Linux"
            />
            <Counter
              counter={accessPointCounter}
              setCounter={setAccessPointCounter}
              title="Точка доступа"
              subtitle="WI-FI"
            />
            <Counter
              counter={nasCounter}
              setCounter={setNasCounter}
              title="NAS"
              subtitle="Сервер для хранения данных"
            />
          </Stack>
        </Grid>
        <Grid item xs={4} display="flex" flexDirection="column">
          <Stack
            p="10px 25px"
            border="1px solid"
            borderColor="primary.main"
            borderRadius="10px"
          >
            <Typography variant="h1" color="primary.main">{`${addSpacesToNumber(
              sum,
            )} ₽`}</Typography>
            <Typography variant="h2" color="primary.main">
              в месяц
            </Typography>
          </Stack>
          <Stack justifyContent="space-between" rowGap="16px" pt="12px">
            <Typography variant="body1" color="secondary.main">
              Время реагирования:{' '}
              <span style={{ fontWeight: 700 }}>
                {currentTariff.reactionTime}
              </span>
            </Typography>
            <Typography variant="body1" color="secondary.main">
              Плановые выезды в месяц:{' '}
              <span style={{ fontWeight: 700 }}>
                {currentTariff.scheduledDeparture}
              </span>
            </Typography>
            <Typography variant="body1" color="secondary.main">
              Экстренные выезды:{' '}
              <span style={{ fontWeight: 700 }}>
                {currentTariff.emergencyDeparture}
              </span>
            </Typography>
            <Typography variant="body1" color="secondary.main">
              Консультации по телефону и удаленное подключение:{' '}
              <span style={{ fontWeight: 700 }}>
                {currentTariff.consultations}
              </span>
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          xs={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box height="14px"></Box>
          <CalculatorForm />
          <Typography variant="body1" color="secondary.main" pt="6px">
            Остались вопросы?
          </Typography>
          <Link
            variant="navigation"
            color="primary.main"
            sx={{
              textDecoration: 'underline',
              textDecorationColor: 'transparent',
              '&:hover': {
                textDecorationColor: 'primary.main',
              },
            }}
            href="/cost#FAQ"
          >
            Узнайте больше
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};
