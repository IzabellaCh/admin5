'use client';
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import Button, { buttonClasses } from '@mui/material/Button';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

import { CustomMuiIcon } from '@/mui/muiCustomIcon';
import { CustomLink } from '@/components/Link/CustomLink';
import { CalculatorForm } from '../Form/CalculatorForm/CalculatorForm';
import { TariffType, AllTariffs } from './calculator.data';
import { Counter } from '../Counter/Counter';
import { TariffDetales } from './TariffDetales';
import { CalculatorResult } from './CalculatorResult';
import { ServerRoolSelector } from './ServerRoolSelector';
import { selectWindowInnerWidth } from '@/redux/slices/window-inner-width-slice';

export const Calculator = () => {
  const tariffs = useRef<HTMLDivElement>(null);
  const windowInnerWidth = useSelector(selectWindowInnerWidth);

  const [isTariffsOpen, setTariffsOpen] = useState<boolean>(false);

  const [currentTariff, setCurrentTariff] = useState<TariffType>(AllTariffs[0]);

  const [pcCounter, setPcCounter] = useState<number>(1);
  const [windowCounter, setWindowCounter] = useState<number>(0);
  const [linuxCounter, setLinuxCounter] = useState<number>(0);
  const [accessPointCounter, setAccessPointCounter] = useState<number>(0);
  const [nasCounter, setNasCounter] = useState<number>(0);
  const [serverRoolCounter, setServerRoolCounter] = useState<number>(0);
  const [serverRoolMax, setServerRoolMax] = useState<number>(0);

  const [sum, setSum] = useState<number>(0);

  const [step, setStep] = useState<number>(1);

  const addSpacesToNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const handlePcNumberChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setPcCounter(newValue);
    }
  };

  useEffect(() => {
    if (windowCounter > 0 || linuxCounter > 0) {
      setServerRoolMax(windowCounter + linuxCounter);
      // TODO: править после комментария Антона:
      // что происходит при разных ситуациях
      // (было много серверов + выбрано какое-то количество ролей, затем роли не трогали, а сервера уменьшили)
      // if (serverRoolCounter === 0) {
      //   setServerRoolCounter(1);
      // }
    }
    if (windowCounter === 0 && linuxCounter === 0) {
      if (serverRoolMax > 0) setServerRoolMax(0);
      if (serverRoolCounter > 0) setServerRoolCounter(0);
      // TODO: править после комментария Антона
    }
  }, [windowCounter, linuxCounter, serverRoolCounter, serverRoolMax]);

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
    const serverRoolSum = currentTariff.serverRool * serverRoolCounter;

    const allPrice =
      pcSum + windowSum + linuxSum + accessPointSum + nasSum + serverRoolSum;

    setSum(allPrice);
  }, [
    pcCounter,
    windowCounter,
    linuxCounter,
    accessPointCounter,
    nasCounter,
    serverRoolCounter,
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
      sx={{
        '@media (max-width:900px)': {
          p: '20px 18px',
        },
      }}
    >
      <Grid container spacing={10}>
        <Grid
          item
          xs={windowInnerWidth > 1160 ? 4 : windowInnerWidth > 900 ? 6 : 12}
          display="flex"
          flexDirection="column"
          sx={{
            '@media (max-width:900px)': {
              display: step === 1 ? 'flex' : 'none',
            },
          }}
        >
          <ClickAwayListener onClickAway={() => setTariffsOpen(false)}>
            <Stack
              pt="12px"
              ref={tariffs}
              onClick={(e) => e.stopPropagation()}
              position="relative"
              minHeight="52px"
              sx={{
                '@media (max-width:900px)': {
                  pt: 0,
                },
              }}
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
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    '@media (max-width:900px)': {
                      fontSize: '22px',
                    },
                  }}
                  endIcon={
                    <CustomMuiIcon
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
                        '@media (max-width:900px)': {
                          fontSize: '22px',
                        },
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
            sx={{
              '@media (max-width:900px)': {
                fontSize: '18px',
                pt: 0,
              },
            }}
          >
            Тариф определяет время реагирования и коллическо выездов в месяц.
            Все остальное Вы настраиваете сами.
          </Typography>
          <Box
            sx={{
              display: 'none',
              pb: '40px',
              '@media (max-width:1160px)': {
                display: 'flex',
              },
            }}
          >
            <TariffDetales tariff={currentTariff} />
          </Box>
          <Stack maxWidth="100%" pb="30px">
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

          <ServerRoolSelector
            windowCounter={windowCounter}
            linuxCounter={linuxCounter}
            serverRoolCounter={serverRoolCounter}
            serverRoolMax={serverRoolMax}
            setServerRoolCounter={setServerRoolCounter}
          />
          <Stack
            sx={{
              display: 'none',
              pt: '43px',
              rowGap: '30px',
              '@media (max-width:900px)': {
                display: 'flex',
              },
            }}
          >
            <CalculatorResult sum={addSpacesToNumber(sum)} />
            <Button
              variant="default"
              color="primary"
              sx={{ width: '100%' }}
              onClick={() => setStep(2)}
            >
              далее
            </Button>
          </Stack>
        </Grid>
        <Grid
          item
          xs={4}
          display="flex"
          flexDirection="column"
          sx={{
            '@media (max-width:1160px)': {
              display: 'none',
            },
          }}
        >
          <CalculatorResult sum={addSpacesToNumber(sum)} />
          <TariffDetales tariff={currentTariff} />
        </Grid>
        <Grid
          item
          xs={windowInnerWidth > 1160 ? 4 : windowInnerWidth > 900 ? 6 : 12}
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{
            '@media (max-width:900px)': {
              display: step === 2 ? 'flex' : 'none',
            },
          }}
        >
          <Box
            minHeight="14px"
            sx={{
              '@media (max-width:1160px)': {
                display: 'none',
              },
            }}
          ></Box>
          <Box
            sx={{
              display: 'none',
              pb: '30px',
              width: '100%',
              '@media (max-width:1160px)': {
                display: 'flex',
              },
            }}
          >
            <CalculatorResult sum={addSpacesToNumber(sum)} />
          </Box>
          <CalculatorForm />
          <Stack
            alignItems="center"
            sx={{
              '@media (max-width:900px)': {
                display: 'none',
              },
            }}
          >
            <Typography variant="body1" color="secondary.main" pt="6px">
              Остались вопросы?
            </Typography>
            <CustomLink
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
            </CustomLink>
          </Stack>
          <Button
            variant="default"
            color="secondary"
            sx={{
              width: '100%',
              display: 'none',
              mt: '20px',
              border: 'none',
              color: (theme) => theme.palette.primary.main,
              background: 'none',
              '@media (max-width:900px)': {
                display: 'flex',
              },
            }}
            onClick={() => setStep(1)}
          >
            назад
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
