import { createTheme } from '@mui/material';
import { openSans } from './fonts';

export let theme = createTheme({
  palette: {
    primary: {
      main: '#4A7FB0',
      dark: '#97B5D1',
      light: '#DBE5EF',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#1B1B1B',
      light: '#F3F3F3',
      dark: '#D7D7D7',
      contrastText: '#0000000d',
    },
    error: {
      main: '#E94F32',
      dark: '#6F6F6F',
    },
    warning: {
      main: '#FEC2C2',
      dark: '#EF443B',
      light: '#FFE9E9',
    },
    info: {
      main: '#0E8EE9',
      light: '#A5D5F6',
      dark: '#0000001c',
      contrastText: '#003f7b4d',
    },
  },
  typography: {
    h1: {
      fontFamily: openSans.style.fontFamily,
      fontSize: 58,
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '65.4px',
      '@media (max-width:900px)': {
        fontSize: 35.45,
        lineHeight: '39.973px',
      },
    },
    h2: {
      fontFamily: openSans.style.fontFamily,
      fontSize: 28,
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
    },
    h3: {
      fontFamily: openSans.style.fontFamily,
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 'normal',
    },
    subtitle2: {
      fontFamily: openSans.style.fontFamily,
      fontSize: 14,
      fontStyle: 'normal',
      lineHeight: 'normal',
      fontWeight: 300,
    },
    body1: {
      fontFamily: openSans.style.fontFamily,
      fontSize: 18,
      fontStyle: 'normal',
      lineHeight: 'normal',
      fontWeight: 300,
    },
    body2: {
      fontFamily: openSans.style.fontFamily,
      fontSize: 16,
      fontStyle: 'normal',
      lineHeight: 'normal',
      fontWeight: 300,
    },
    caption: {
      fontFamily: openSans.style.fontFamily,
      fontSize: 12,
      fontStyle: 'normal',
      lineHeight: 'normal',
      fontWeight: 300,
      letterSpacing: 'normal',
    },
    button: {
      fontFamily: openSans.style.fontFamily,
      fontSize: 18,
      fontStyle: 'normal',
      lineHeight: 'normal',
      fontWeight: 300,
      textTransform: 'none',
    },
  },
});

const commonButtonStyle = {
  minWidth: '210px',
  height: '49px',
  position: 'relative',
  zIndex: 1,
  borderRadius: '6px',
  '@media (max-width:600px)': {
    height: '65px',
  },
};

const commonLinkButtonStyle = {
  fontSize: 16,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  width: 'fit-content',
  borderRadius: '7px',
  padding: '3px 14px 6px',
  whiteSpace: 'nowrap',
  position: 'relative',
  zIndex: 1,
};

theme = createTheme(theme, {
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          '& rect': {
            transition: 'fill 0.5s linear',
          },
          '&:hover rect': {
            fill: theme.palette.primary.main,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          maxWidth: 'max-content',
          maxHeight: 'max-content',
          padding: '0',
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          transition: 'none',
        },
      },
      variants: [
        {
          props: { variant: 'default', color: 'primary' },
          style: {
            ...commonButtonStyle,
            color: theme.palette.primary.contrastText,
            border: 'none',
            background: `linear-gradient(${theme.palette.primary.main}, ${theme.palette.primary.main})`,
            '&::before': {
              content: "''",
              position: 'absolute',
              borderRadius: '6px',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: `linear-gradient(96deg, ${theme.palette.primary.main} 10.95%, ${theme.palette.info.main} 147.66%)`,
              zIndex: -1,
              opacity: 0,
              transition: 'opacity 0.5s linear',
            },
            '&:hover::before': {
              opacity: 1,
            },
            '&.Mui-disabled': {
              background: theme.palette.error.dark,
              color: theme.palette.primary.contrastText,
            },
          },
        },
        {
          props: { variant: 'default', color: 'secondary' },
          style: {
            ...commonButtonStyle,
            color: theme.palette.secondary.main,
            border: `1px solid ${theme.palette.secondary.main}`,
            background: `linear-gradient(${theme.palette.primary.contrastText}, ${theme.palette.primary.contrastText})`,
            '&::before': {
              content: "''",
              position: 'absolute',
              borderRadius: '6px',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: `linear-gradient(96deg, ${theme.palette.primary.contrastText} 10.95%, ${theme.palette.secondary.dark} 147.66%)`,
              zIndex: -1,
              opacity: 0,
              transition: 'opacity 0.5s linear',
            },
            '&:hover::before': {
              opacity: 1,
            },
            '&.button-filter': {
              maxWidth: 'max-content',
              height: '49px',
              minWidth: '124px',
              whiteSpace: 'nowrap',
            },
            '&.button-filter-small': {
              height: '39px',
              minWidth: '100px',
            },
            '&.button-selected': {
              color: theme.palette.primary.contrastText,
              background: theme.palette.primary.main,
              border: 'none',
            },
          },
        },
        {
          props: { variant: 'more' },
          style: {
            color: theme.palette.secondary.main,
            border: 'none',
            backgroundColor: 'transparent',
            maxWidth: 'max-content',
            maxHeight: 'max-content',
            whiteSpace: 'nowrap',
            fontSize: '28px',
            fontWeight: 400,
            position: 'relative',
            padding: '0 16px 0 0',
            transition: 'color 0.3s linear',
            '& .MuiButton-endIcon': {
              position: 'absolute',
              right: '0px',
              bottom: 'calc(50% - 8px)',
              transition: 'right 0.3s linear',
            },
            '& .MuiButton-endIcon .MuiSvgIcon-root': {
              width: '12px',
              height: '12px',
            },
            '&:hover': {
              color: theme.palette.primary.main,
              background: 'transparent',
            },
            '&:hover .MuiButton-endIcon': {
              right: '-5px',
            },
            '&.menu-mobile-button': {
              fontSize: '35.45px',
              lineHeight: '39.973px',
              '& .MuiButton-endIcon .MuiSvgIcon-root': {
                width: '20px',
                height: '20px',
              },
              '& .MuiButton-endIcon': {
                bottom: 'calc(50% - 12px)',
                right: '-8px',
              },
              '&:hover .MuiButton-endIcon': {
                right: '-13px',
              },
            },
          },
        },
        {
          props: { variant: 'primitive' },
          style: {
            color: theme.palette.secondary.main,
            fontFamily: openSans.style.fontFamily,
            fontSize: 28,
            fontStyle: 'normal',
            lineHeight: 'normal',
            fontWeight: 400,
            border: 'none',
            padding: 0,
            textAlign: 'left',
            width: '231px',
            '& .MuiButton-endIcon': {
              fontSize: '10px',
            },
            '&:hover': {
              background: 'transparent',
            },
          },
        },
        {
          props: { variant: 'navigation' },
          style: {
            fontFamily: openSans.style.fontFamily,
            fontStyle: 'normal',
            lineHeight: 'normal',
            cursor: 'pointer',
            fontSize: 18,
            fontWeight: 300,
            textDecoration: 'none',
            color: theme.palette.secondary.main,
            transition: 'color 0.5s linear',
            '&:hover': {
              background: 'transparent',
              color: theme.palette.primary.main,
            },
          },
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: openSans.style.fontFamily,
          fontStyle: 'normal',
          lineHeight: 'normal',
          cursor: 'pointer',
          fontSize: 18,
          fontWeight: 300,
          textDecoration: 'none',
          color: theme.palette.secondary.main,
          transition: 'all 0.5s linear',
        },
      },
      variants: [
        {
          props: {
            variant: 'navigation',
          },
          style: {
            '&:hover': {
              color: theme.palette.primary.main,
            },
          },
        },
        {
          props: {
            variant: 'menuSubheader',
          },
          style: {
            fontWeight: 700,
            '&:hover': {
              color: theme.palette.primary.main,
            },
          },
        },
        {
          props: {
            variant: 'menuItem',
          },
          style: {
            fontSize: 14,
            '&:hover': {
              color: theme.palette.primary.main,
            },
          },
        },
        {
          props: {
            variant: 'articleListItem',
          },
          style: {
            fontWeight: 400,
            color: theme.palette.primary.main,
            textDecoration: 'underline',
            textDecorationColor: 'transparent',
            '&:hover': {
              textDecorationColor: theme.palette.primary.main,
            },
          },
        },
        {
          props: {
            variant: 'linkButton',
            color: 'primary',
          },
          style: {
            ...commonLinkButtonStyle,
            background: `linear-gradient(${theme.palette.primary.light}, ${theme.palette.primary.light})`,
            maxWidth: '342px',
            textAling: 'center',
            '&::before': {
              content: "''",
              position: 'absolute',
              borderRadius: '7px',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: `linear-gradient(97deg, ${theme.palette.primary.light} 18.11%, ${theme.palette.info.light} 172.56%)`,
              zIndex: -1,
              opacity: 0,
              transition: 'opacity 0.8s linear',
            },
            '&:hover::before': {
              opacity: 1,
            },
          },
        },
        {
          props: {
            variant: 'linkButton',
            color: 'secondary',
          },
          style: {
            ...commonLinkButtonStyle,
            background: `linear-gradient(${theme.palette.primary.contrastText}, ${theme.palette.primary.contrastText})`,
            maxWidth: '47%',
            textAlign: 'center',
            '&::before': {
              content: "''",
              position: 'absolute',
              borderRadius: '7px',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: `linear-gradient(97deg, ${theme.palette.primary.contrastText} 18.11%, ${theme.palette.primary.light} 172.56%)`,
              zIndex: -1,
              opacity: 0,
              transition: 'opacity 0.8s linear',
            },
            '&:hover::before': {
              opacity: 1,
            },
          },
        },
        {
          props: {
            variant: 'agreement',
          },
          style: {
            color: theme.palette.primary.main,
            fontFamily: openSans.style.fontFamily,
            fontSize: 12,
            fontStyle: 'normal',
            fontWeight: 300,
            lineHeight: '14px',
            whiteWrap: 'wrap',
            textDecoration: 'underline',
            textDecorationColor: 'transparent',
            '&:hover': {
              textDecorationColor: theme.palette.primary.main,
            },
            '& .reset-styles': {
              color: theme.palette.secondary.main,
            },
            '&:hover .reset-styles': {
              textDecoration: 'none',
            },
          },
        },
        {
          props: {
            variant: 'more',
          },
          style: {
            color: theme.palette.primary.main,
            fontFamily: openSans.style.fontFamily,
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: 300,
            lineHeight: 'normal',
            whiteWrap: 'nowrap',
            textDecoration: 'underline',
            textDecorationColor: 'transparent',
            '&:hover': {
              textDecorationColor: theme.palette.primary.main,
            },
          },
        },
      ],
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
      styleOverrides: {
        root: {
          transform: 'none',
          color: 'transparent',
          fontFamily: openSans.style.fontFamily,
          fontSize: 12,
          fontStyle: 'normal',
          lineHeight: 'normal',
          fontWeight: 300,
          top: '-16px',
          left: '0px',
          '&.Mui-focused': {
            color: theme.palette.secondary.main,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: openSans.style.fontFamily,
          fontSize: 12,
          fontStyle: 'normal',
          fontWeight: 200,
          lineHeight: 'normal',
          color: theme.palette.error.main,
          margin: 0,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
        InputProps: {
          sx: {
            borderRadius: '6px',
            boxSizing: 'border-box',
            minHeight: '48px',
            border: `1px solid ${theme.palette.primary.main}`,
            '& fieldset': {
              border: 'none',
            },
            '@media (max-width:900px)': {
              minHeight: '65px',
            },
          },
          inputProps: {
            style: {
              padding: '0px',
              boxSizing: 'border-box',
              fontFamily: openSans.style.fontFamily,
              color: theme.palette.secondary.main,
              // fontSize: 20,
              fontStyle: 'normal',
              fontWeight: 400,
              // lineHeight: 'normal',
              height: '100%',
              // backgroundColor: theme.palette.primary.contrastText,
            },
          },
        },
      },
      styleOverrides: {
        root: {
          '& textarea': { padding: 0, minHeight: 'calc(112px - 26px)' },
          '&.field textarea': { minHeight: 'calc(210px - 26px)' },
          '& .MuiInputBase-input': {
            fontSize: 20,
            lineHeight: 'normal',
            '@media (max-width:900px)': {
              fontSize: 22,
              lineHeight: '25.6px',
            },
          },
          // fontSize: 20,
          // lineHeight: 'normal',
          // '@media (max-width:900px)': {
          //   fontSize: 22,
          //   lineHeight: '25.6px',
          // },
          '& .MuiInputBase-root': {
            padding: '10px 13px',
            backgroundColor: theme.palette.primary.contrastText,
            '@media (max-width:900px)': {
              padding: '19px 13px',
            },
          },
          '& .MuiInputBase-input::-webkit-input-placeholder': {
            color: theme.palette.primary.main,
            opacity: 1,
            transition: 'color 0.5s linear',
          },
          '&:hover .MuiInputBase-input::-webkit-input-placeholder': {
            color: theme.palette.secondary.main,
          },
          '& .MuiInputBase-input:focus::-webkit-input-placeholder': {
            color: 'transparent',
          },
          '& .MuiInputBase-input::-moz-placeholder': {
            color: theme.palette.primary.main,
            opacity: 1,
            transition: 'color 0.5s linear',
          },
          '&:hover .MuiInputBase-input::-moz-placeholder': {
            color: theme.palette.secondary.main,
          },
          '& .MuiInputBase-input:focus::-moz-placeholder': {
            color: 'transparent',
          },
          '& .MuiInputBase-input:-ms-input-placeholder': {
            color: theme.palette.primary.main,
            opacity: 1,
            transition: 'color 0.5s linear',
          },
          '&:hover .MuiInputBase-input:-ms-input-placeholder': {
            color: theme.palette.secondary.main,
          },
          '& .MuiInputBase-input:focus:-ms-input-placeholder': {
            color: 'transparent',
          },
          '& .MuiInputBase-input:-moz-placeholder': {
            color: theme.palette.primary.main,
            opacity: 1,
            transition: 'color 0.5s linear',
          },
          '&:hover .MuiInputBase-input:-moz-placeholder': {
            color: theme.palette.secondary.main,
          },
          '& .MuiInputBase-input:focus:-moz-placeholder': {
            color: 'transparent',
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: 'transparent',
          width: '20px',
          '& svg rect': {
            transition: 'stroke 0.5s linear',
          },
          '&:hover svg rect': {
            stroke: theme.palette.secondary.main,
          },
          '&.Mui-checked': {
            color: 'transparent',
          },
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          '& .MuiSlider-rail': {
            maxHeight: '5px',
            color: theme.palette.secondary.light,
          },
          '& .MuiSlider-track': {
            maxHeight: '5px',
            color: theme.palette.primary.main,
          },
          '& .MuiSlider-thumb': {
            height: '16px',
            width: '16px',
          },
        },
      },
    },
    MuiTabs: {
      defaultProps: {
        indicatorColor: 'transparent',
      },
      styleOverrides: {
        root: {
          '&.services': {
            maxWidth: '370px',
            '& .MuiTabs-flexContainer': {
              rowGap: '51px',
            },
            '& button.MuiTab-root': {
              padding: '0',
              width: 'auto',
              minWidth: 'auto',
              maxWidth: '100%',
              whiteSpace: 'wrap',
              minHeight: 'auto',
              fontFamily: openSans.style.fontFamily,
              fontSize: '58px',
              fontWeight: '400',
              lineHeight: '65.4px',
              color: theme.palette.primary.light,
              textAlign: 'start',
              alignSelf: 'start',
              transition: 'color 0.5s linear',
              '&:hover': {
                color: theme.palette.primary.main,
              },
            },
            '& button.Mui-selected': {
              color: theme.palette.secondary.main,
            },
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          '&.cost': {
            marginTop: '3px',
          },
          '&.cost.Mui-expanded': {
            borderRadius: '10px',
            backgroundColor: theme.palette.primary.light,
            marginTop: '3px',
          },
          '&.why-us:first-of-type': {
            borderTop: '1px solid #DBE5EF',
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          '& .faq_plus': {
            transform: 'rotate(0deg)',
            transition: 'transform 0.3s linear',
          },
          '&.Mui-expanded .faq_plus': {
            transform: 'rotate(90deg)',
          },
          '& .MuiTypography-root': {
            fontFamily: openSans.style.fontFamily,
            fontSize: 18,
            fontStyle: 'normal',
            fontWeight: 300,
            lineHeight: 'normal',
            color: theme.palette.secondary.main,
          },
          borderRadius: '0',
          flexDirection: 'row-reverse',
          columnGap: '12px',
          '&.cost': {
            borderBottom: '1px solid',
            borderColor: theme.palette.primary.light,
            padding: '5px 10px',
            background: `linear-gradient(transparent, transparent 50%, ${theme.palette.primary.light} 50%, ${theme.palette.primary.light})`,
            backgroundSize: '100% 200%',
            transition: 'all 0.3s linear',
            '&:hover': {
              borderRadius: '10px',
              backgroundPosition: '100% 100%',
            },
          },
          '&.why-us': {
            '& .MuiTypography-root': {
              transition: 'all 0.5s linear',
              '&:hover': {
                color: theme.palette.primary.main,
              },
            },
            padding: '10px 0',
            '&.Mui-expanded': {
              padding: '10px 0 0',
            },
            '& .faq_container-plus': {
              position: 'relative',
              zIndex: 1,
              background: `radial-gradient(transparent, transparent)`,
              '&::before': {
                content: "''",
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: `radial-gradient(${theme.palette.primary.light} 50%, transparent 50%)`,
                zIndex: -1,
                opacity: 0,
                transition: 'opacity 0.5s linear',
              },
              '&:hover::before': {
                opacity: 1,
              },
            },
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          '& .MuiTypography-root': {
            fontFamily: openSans.style.fontFamily,
            fontSize: 14,
            fontStyle: 'normal',
            lineHeight: 'normal',
            fontWeight: 300,
          },
          '&.cost': {
            padding: '0 60px 16px',
            backgroundColor: theme.palette.primary.light,
            borderRadius: '0 0 10px 10px',
          },
          '&.why-us': {
            padding: '0 50px 16px',
          },
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          '& .MuiPaginationItem-root': {
            fontFamily: openSans.style.fontFamily,
            fontSize: 28,
            fontStyle: 'normal',
            lineHeight: 'normal',
            fontWeight: 400,
            color: theme.palette.secondary.main,
            minHeight: '50px',
            minWidth: '50px',
            backgroundColor: theme.palette.primary.contrastText,
            transition: 'all 0.5s linear',
            '&:hover': {
              backgroundColor: theme.palette.primary.light,
            },
            '&.Mui-selected': {
              color: theme.palette.primary.contrastText,
              backgroundColor: theme.palette.primary.main,
              transition: 'all 0.5s linear',
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
              },
            },
            '&.MuiPaginationItem-previousNext': {
              transition: 'all 0.5s linear',
              '&:hover': {
                backgroundColor: theme.palette.primary.contrastText,
              },
              '& svg path': {
                transition: 'stroke 0.5s linear',
              },
              '&:hover svg path': {
                stroke: theme.palette.primary.main,
              },
            },
          },
        },
      },
    },
  },
});

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    default: true;
    more: true;
    primitive: true;
    navigation: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    navigation: true;
    menuSubheader: true;
    menuItem: true;
    articleListItem: true;
    linkButton: true;
    agreement: true;
    more: true;
  }
}

declare module '@mui/material/SvgIcon' {
  interface TypographyPropsVariantOverrides {
    s: true;
    m: true;
    l: true;
  }
}
