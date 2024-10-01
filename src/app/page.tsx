'use client';

import { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import mainImage from '../../public/assets/icons/home-page/image_home.jpg';
import whyUsImage from '../../public/assets/icons/home-page/image_why_us.jpg';
import whyUsMobileImage from '../../public/assets/icons/home-page/image_why_us_mobile.jpg';
import aboutUsImage from '../../public/assets/icons/home-page/image_about_us.jpg';

import { changeOpenModal } from '@/redux/slices/modal-condition-slice';
import { AnimatedText } from '@/components/AnimatedText/AnimatedText';
import { HomeTitle } from '@/components/HomeTitle/HomeTitle';
import {
  HOME_TITLES,
  SUBTITLES,
  WYU_US_TEXT,
  ABOUT_US_TEXT,
} from '@/app/home.data';
import { HOW_WE_WORK } from '@/components/Step/step.data';
import { Calculator } from '@/components/Calculator/Calculator';
import {
  ALL_ARTICLES,
  TArticleData,
} from '@/shared/articlesData/articles.data';
import { ETags } from '@/shared/tagsData/tags.data';
import { ButtonMore } from '@/components/Button/ButtonMore/ButtonMore';
import { StepNumber } from '@/components/Step/StepNumber';
import { StepText } from '@/components/Step/StepText';
import { Step } from '@/components/Step/Step';
import { CustomMuiIcon } from '@/mui/muiCustomIcon';
import { Feedback } from '@/components/Feedback/Feedback';
import { FEEDBACK_DATA } from '@/shared/feedbackData/feedback.data';
import { ScoreTable } from '@/components/Score/ScoreTable';
import { PairButtonsContainer } from '@/containers/PairButtonsContainer';
import { getFourRandomNumbers } from '@/utils/function';
import { selectWindowInnerWidth } from '@/redux/slices/window-inner-width-slice';
import { ServicesHomePageComponent } from '@/components/ServicesHomePageComponent/ServicesHomePageComponent';
import { ScrollableFeedbackStack } from '@/components/ScrollableFeedbackStack/ScrollableFeedbackStack';

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();
  const windowInnerWidth = useSelector(selectWindowInnerWidth);
  const [selectedArticles, setSelectedArticles] = useState<TArticleData[]>([]);

  const feedbackList = useMemo(() => {
    let feedbackArray;

    if (FEEDBACK_DATA.length <= 4) {
      feedbackArray = FEEDBACK_DATA;
    } else {
      const randomNumbers = getFourRandomNumbers(FEEDBACK_DATA.length);
      feedbackArray = [];
      for (let i = 0; i < randomNumbers.length; i++) {
        feedbackArray.push(FEEDBACK_DATA[randomNumbers[i]]);
      }
    }

    return feedbackArray.sort((a, b) => {
      return b.text.length - a.text.length;
    });
  }, []);

  useEffect(() => {
    const tag = ETags.Services;
    const newSelectedArticles = ALL_ARTICLES.filter(
      (article) => article.tags?.includes(tag),
    );
    setSelectedArticles(newSelectedArticles);
  }, []);

  return (
    <>
      <Box
        width="100%"
        sx={{
          mt: '30px',
          height: '613px',
          backgroundImage: `url(${mainImage.src})`,
          backgroundPosition: 'right',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          borderRadius: '11px',
          '@media (max-width:1080px)': {
            height: '500px',
          },
          '@media (max-width:900px)': {
            height: '400px',
          },
          '@media (max-width:600px)': {
            height: 'auto',
            backgroundImage: 'none',
            position: 'relative',
            mt: '0px',
          },
        }}
      >
        <Box
          position="absolute"
          top="0px"
          right="0px"
          sx={{
            display: 'none',
            height: '300px',
            width: '100%',
            backgroundImage: `url(${mainImage.src})`,
            backgroundPosition: 'right',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            borderRadius: '10px',
            '@media (max-width:600px)': {
              display: 'block',
            },
          }}
        >
          <Stack
            width="100%"
            height="100%"
            sx={{
              background:
                'linear-gradient(to right, #FFFFFF 40%, transparent 80%)',
            }}
          ></Stack>
        </Box>
        <Stack
          alignItems="flex-start"
          justifyContent="center"
          width="100%"
          height="100%"
          sx={{
            background:
              'linear-gradient(to right, #FFFFFF 40%, transparent 70%)',
            '@media (max-width:600px)': {
              background: 'none',
            },
          }}
        >
          <Stack
            justifyContent="space-between"
            width="100%"
            zIndex={1}
            sx={{
              height: '67%',
              '@media (max-width:1080px)': {
                height: '80%',
              },
              '@media (max-width:600px)': {
                pt: '245px',
              },
              '@media (max-width:440px)': {
                pt: '215px',
              },
            }}
          >
            <Stack
              justifyContent="space-between"
              rowGap="20px"
              width="100%"
              sx={{
                rowGap: '20px',
                '@media (max-width:600px)': {
                  rowGap: '10px',
                },
              }}
            >
              <Typography
                variant="body1"
                color="secondary.main"
                maxWidth="250px"
              >
                {SUBTITLES[0]}
              </Typography>
              <Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{
                    columnGap: '30px',
                    '@media (max-width:600px)': {
                      rowGap: '10px',
                    },
                  }}
                >
                  <Typography variant="h1" color="secondary.main">
                    Системное
                  </Typography>
                  <AnimatedText />
                </Stack>
                <Typography variant="h1" color="secondary.main">
                  администрирование
                </Typography>
              </Stack>
              <Typography
                variant="body1"
                color="secondary.main"
                maxWidth="350px"
                sx={{
                  '@media (max-width:600px)': {
                    pb: '80px',
                  },
                }}
              >
                {SUBTITLES[1]}
              </Typography>
            </Stack>
            <PairButtonsContainer />
          </Stack>
        </Stack>
      </Box>
      <Stack>
        <HomeTitle titleData={HOME_TITLES[0]} />
        <Stack
          p="0 34px 0"
          width="100%"
          sx={{
            maxWidth: '840px',
            '@media (max-width:1200px)': {
              maxWidth: '100%',
            },
          }}
        >
          <Box
            width="100%"
            position="relative"
            sx={(theme) => ({
              height: '160px',
              borderLeft: `1px solid ${theme.palette.primary.main}`,
              borderBottom: `1px solid ${theme.palette.primary.main}`,
              '@media (max-width:600px)': {
                borderBottom: 'none',
                height: '180px',
              },
            })}
          >
            <Stack
              position="absolute"
              sx={{
                top: '-31px',
                left: '-31px',
                '@media (max-width:600px)': {
                  top: '-22px',
                  left: '-22px',
                },
              }}
            >
              <Step stepNumber={HOW_WE_WORK[0].number} direction="right">
                <StepText data={HOW_WE_WORK[0]} maxWidth="245px" />
              </Step>
            </Stack>
          </Box>
          <Box
            width="100%"
            sx={(theme) => ({
              borderRight: `1px solid ${theme.palette.primary.main}`,
              height: '360px',
              '@media (max-width:1200px)': {
                height: '550px',
              },
              '@media (max-width:600px)': {
                borderRight: 'none',
                borderLeft: `1px solid ${theme.palette.primary.main}`,
                height: '450px',
              },
            })}
            position="relative"
          >
            <Stack
              position="absolute"
              sx={{
                top: '-31px',
                left: 'calc(50% - 31px)',
                '@media (max-width:750px)': {
                  left: 'calc(30% - 31px)',
                },
                '@media (max-width:600px)': {
                  left: '-22px',
                  top: '-22px',
                },
              }}
            >
              <Step
                stepNumber={HOW_WE_WORK[1].number}
                direction={windowInnerWidth > 600 ? 'down' : 'right'}
              >
                <StepText data={HOW_WE_WORK[1]} maxWidth="300px" />
                <StepNumber text={HOW_WE_WORK[2].number}>
                  <Stack
                    position="relative"
                    justifyContent="center"
                    alignItems="center"
                    maxHeight="99px"
                    sx={{
                      '@media (max-width:750px)': {
                        display: 'none',
                      },
                    }}
                  >
                    <CustomMuiIcon
                      type="icon-home-speech-balloon"
                      size="224px"
                    />
                    <Typography
                      variant="body2"
                      color="primary.main"
                      position="absolute"
                      top="15px"
                      left="22px"
                      maxWidth="180px"
                    >
                      Специалист будет у Вас в течении 2-х часов
                    </Typography>
                  </Stack>
                </StepNumber>
                <StepText data={HOW_WE_WORK[2]} maxWidth="300px" />
              </Step>
            </Stack>
            <Stack
              position="absolute"
              sx={{
                top: '100%',
                right: '-31px',
                left: null,
                '@media (max-width:600px)': {
                  top: '100%',
                  right: null,
                  left: '-22px',
                },
              }}
            >
              <Step
                stepNumber={HOW_WE_WORK[3].number}
                direction={
                  windowInnerWidth > 1200
                    ? 'down'
                    : windowInnerWidth > 600
                    ? 'left'
                    : 'right'
                }
              >
                <StepText data={HOW_WE_WORK[3]} maxWidth="316px" />
              </Step>
            </Stack>
          </Box>
          <Box height="192px"></Box>
        </Stack>
      </Stack>
      <Stack>
        <HomeTitle titleData={HOME_TITLES[1]} />
        <Stack
          columnGap="17px"
          sx={{
            flexDirection: 'row',
            '@media (max-width:800px)': {
              flexDirection: 'column',
              rowGap: '35px',
            },
          }}
        >
          <Box
            sx={{
              width: '347px',
              height: '458px',
              backgroundImage: `url(${whyUsImage.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              borderRadius: '10px',
              '@media (max-width:900px)': {
                width: '300px',
                height: '400px',
              },
              '@media (max-width:800px)': {
                maxWidth: '360px',
                width: '100%',
                height: '307px',
                backgroundImage: `url(${whyUsMobileImage.src})`,
              },
            }}
          ></Box>
          <Stack
            justifyContent="space-between"
            width="calc(100% - 347px)"
            sx={{
              rowGap: '40px',
              width: 'calc(100% - 347px)',
              '@media (max-width:900px)': {
                rowGap: '25px',
                width: 'calc(100% - 300px)',
              },
              '@media (max-width:800px)': {
                width: '100%',
              },
            }}
          >
            <Typography
              variant="h1"
              color="secondary.main"
              maxWidth="455px"
              sx={{
                '@media (max-width:1080px)': {
                  fontSize: 35.45,
                  lineHeight: '39.973px',
                  maxWidth: '300px',
                },
                '@media (max-width:800px)': {
                  maxWidth: '100%',
                },
              }}
            >
              Решаем задачи{' '}
              <Box component="span" color="primary.main">
                быстро
              </Box>
            </Typography>
            <Stack rowGap="20px" width="90%">
              {WYU_US_TEXT.map((paragraph: string, index: number) => (
                <Typography key={index} variant="body1" color="secondary.main">
                  {paragraph}
                </Typography>
              ))}
            </Stack>
            <Stack
              direction="row"
              columnGap="6px"
              rowGap="7px"
              width="90%"
              flexWrap="wrap"
              sx={{
                '@media (max-width:900px)': {
                  display: 'none',
                },
              }}
            >
              {selectedArticles
                .slice(0, 5)
                .map((article: TArticleData, index: number) => (
                  <Link
                    key={index}
                    variant="linkButton"
                    color="primary"
                    href={`/blog/${article.id}`}
                  >
                    {article.title}
                  </Link>
                ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <HomeTitle titleData={HOME_TITLES[2]} />
        <ServicesHomePageComponent />
      </Stack>
      <Stack id="calculator">
        <HomeTitle titleData={HOME_TITLES[3]} />
        <Calculator />
      </Stack>
      <Stack>
        <HomeTitle titleData={HOME_TITLES[4]} />
        <Typography
          variant="h1"
          color="secondary.main"
          pb="32px"
          sx={{
            '@media (max-width:700px)': {
              display: 'none',
            },
          }}
        >
          Принципы работы мы начали формировать{' '}
          <Box component="span" color="primary.main">
            с 2008 года
          </Box>
        </Typography>
        <Stack
          columnGap="8%"
          width="100%"
          sx={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            '@media (max-width:700px)': {
              flexDirection: 'column',
              justifyContent: 'flex-start',
              rowGap: '20px',
            },
          }}
        >
          <Box
            height="100%"
            sx={{
              backgroundImage: `url(${aboutUsImage.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              borderRadius: '10px',
              minHeight: '447px',
              width: '60%',
              '@media (max-width:900px)': {
                minHeight: '350px',
                width: '50%',
              },
              '@media (max-width:700px)': {
                minHeight: '307px',
                width: '100%',
              },
            }}
          ></Box>
          <Stack
            justifyContent="space-between"
            sx={{
              maxWidth: '320px',
              '@media (max-width:700px)': {
                maxWidth: '100%',
              },
            }}
          >
            <Typography
              variant="h1"
              color="secondary.main"
              pb="25px"
              sx={{
                display: 'none',
                '@media (max-width:700px)': {
                  display: 'block',
                },
              }}
            >
              Принципы работы мы начали формировать{' '}
              <Box component="span" color="primary.main">
                с 2008 года
              </Box>
            </Typography>
            <Stack justifyContent="space-between" rowGap="20px" pt="15px">
              {ABOUT_US_TEXT.map((paragraph: string, index: number) => (
                <Typography key={index} variant="body2" color="secondary.main">
                  {paragraph}
                </Typography>
              ))}
            </Stack>
            <ButtonMore
              text="Узнать больше"
              sx={{
                alignSelf: 'flex-end',
                '@media (max-width:700px)': {
                  mt: '34px',
                },
              }}
              onClick={() => router.push(HOME_TITLES[4].href as string)}
            />
          </Stack>
        </Stack>
      </Stack>
      <Stack width="100%">
        <HomeTitle titleData={HOME_TITLES[5]} />
        <Stack
          width="100%"
          sx={{
            '@media (max-width:900px)': {
              display: 'none',
            },
          }}
        >
          <Stack direction="row" justifyContent="space-between" width="100%">
            <Feedback
              feedbackData={feedbackList[0]}
              width="61%"
              type="right"
              p="12px 25px"
              rowGap="14px"
            />
            <Feedback
              feedbackData={feedbackList[2]}
              width="34%"
              type="left"
              mt="132px"
              p="12px 25px"
              rowGap="14px"
            />
          </Stack>
          <Stack direction="row" columnGap="32px">
            <Feedback
              feedbackData={feedbackList[3]}
              width="36%"
              type="left"
              p="12px 25px"
              rowGap="14px"
            />
            <Feedback
              feedbackData={feedbackList[1]}
              width="55%"
              type="right"
              mt="102px"
              p="12px 25px"
              rowGap="14px"
            />
          </Stack>
        </Stack>
        {windowInnerWidth > 900 ? null : (
          <ScrollableFeedbackStack
            buttonsTop="-83px"
            buttonsBottom={null}
            buttonsRight="0px"
          />
        )}
      </Stack>
      <Stack
        width="100%"
        justifyContent="center"
        alignItems="center"
        sx={{
          rowGap: '43px',
          '@media (max-width:900px)': {
            rowGap: '38px',
          },
        }}
      >
        <Stack rowGap="8px" justifyContent="center" alignItems="center">
          <HomeTitle titleData={HOME_TITLES[6]} mb="0px" />
          <Typography
            variant="h2"
            color="secondary.main"
            sx={{
              '@media (max-width:900px)': {
                fontSize: 18,
                fontWeight: 300,
              },
            }}
          >
            Уже решено
          </Typography>
        </Stack>
        <ScoreTable />
        <Button
          variant="default"
          color="primary"
          onClick={() => dispatch(changeOpenModal(true))}
          sx={{
            '@media (max-width:500px)': {
              width: '100%',
              maxWidth: '360px',
            },
          }}
        >
          связаться с нами
        </Button>
      </Stack>
    </>
  );
}
