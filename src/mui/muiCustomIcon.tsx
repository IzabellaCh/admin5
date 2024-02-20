import React, { ReactNode } from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

import IconTelegram from '../../public/assets/icons/media/icon_telegram.svg';
import IconVK from '../../public/assets/icons/media/icon_vk.svg';
import IconFacebook from '../../public/assets/icons/media/icon_facebook.svg';
import IconWhatsapp from '../../public/assets/icons/media/icon_whatsapp.svg';
import IconPhone from '../../public/assets/icons/media/icon_phone.svg';
import IconMessagers from '../../public/assets/icons/media/icon_messagers.svg';
import IconCheckbox from '../../public/assets/icons/detailes/icon_checkbox.svg';
import IconCheckboxChecked from '../../public/assets/icons/detailes/icon_checkbox_checked.svg';
import IconResponseSuccess from '../../public/assets/icons/modal/icon_response_succes.svg';
import IconResponseError from '../../public/assets/icons/modal/icon_response_error.svg';
import IconAdviceBottom from '../../public/assets/icons/modal/icon_advice_bottom.svg';
import IconAdviceTop from '../../public/assets/icons/modal/icon_advice_top.svg';
import IconClose from '../../public/assets/icons/detailes/icon_close.svg';
import IconAdd from '../../public/assets/icons/detailes/icon_add.svg';
import IconRemove from '../../public/assets/icons/detailes/icon_remove.svg';
import IconArrowDown from '../../public/assets/icons/detailes/icon_arrow_down.svg';
import IconArrowUp from '../../public/assets/icons/detailes/icon_arrow_up.svg';
import IconServicePC from '../../public/assets/icons/offeredServices/icon_pc.svg';
import IconServicePCShadow from '../../public/assets/icons/offeredServices/icon_pc_shadow.svg';
import IconServiceNets from '../../public/assets/icons/offeredServices/icon_nets.svg';
import IconServiceNetsShadow from '../../public/assets/icons/offeredServices/icon_nets_shadow.svg';
import IconServiceServers from '../../public/assets/icons/offeredServices/icon_servers.svg';
import IconServiceServersShadow from '../../public/assets/icons/offeredServices/icon_servers_shadow.svg';
import IconLogoLetter from '../../public/assets/icons/logo/icon_logo_letter.svg';
import IconLogoName from '../../public/assets/icons/logo/icon_logo_name.svg';
import IconHomeSpeechBalloon from '../../public/assets/icons/home-page/icon_speech_balloon.svg';
import IconFeedbackTriangleLeft from '../../public/assets/icons/feedback/icon_triangle_left.svg';
import IconFeedbackTriangleRight from '../../public/assets/icons/feedback/icon_triangle_right.svg';
import IconEmoji from '../../public/assets/icons/why-us-page/icon_apple_emoji.svg';
import IconArrowLeft from '../../public/assets/icons/detailes/icon_arrow_left.svg';
import IconArrowRight from '../../public/assets/icons/detailes/icon_arrow_right.svg';
import IconCheckboxError from '../../public/assets/icons/modal/icon_checkbox_error.svg';
import Icon404Page from '../../public/assets/icons/404-page/icon_404_page.svg';
import IconBurger from '../../public/assets/icons/detailes/icon_header_burger.svg';
import IconCloseRounded from '../../public/assets/icons/detailes/icon_close_rounded.svg';
import IconArrowLeftBold from '../../public/assets/icons/detailes/icon_arrow_left_bold.svg';
import IconArrowRightBold from '../../public/assets/icons/detailes/icon_arrow_right_bold.svg';
type iconComponentMapArg = {
  element: ReactNode;
  viewBox: string;
};

const iconComponentMap: { [key: string]: iconComponentMapArg } = {
  'icon-telegram': { element: IconTelegram, viewBox: '0 0 40 40' },
  'icon-vk': { element: IconVK, viewBox: '0 0 40 40' },
  'icon-facebook': { element: IconFacebook, viewBox: '0 0 40 40' },
  'icon-whatsapp': { element: IconWhatsapp, viewBox: '0 0 40 40' },
  'icon-phone': { element: IconPhone, viewBox: '0 0 32 33' },
  'icon-messagers': { element: IconMessagers, viewBox: '0 0 77 77' },
  'icon-checkbox': { element: IconCheckbox, viewBox: '0 0 34 34' },
  'icon-checkbox-checked': {
    element: IconCheckboxChecked,
    viewBox: '0 0 34 34',
  },
  'icon-response-success': {
    element: IconResponseSuccess,
    viewBox: '0 0 109 109',
  },
  'icon-response-error': {
    element: IconResponseError,
    viewBox: '0 0 109 109',
  },
  'icon-advice-bottom': {
    element: IconAdviceBottom,
    viewBox: '0 0 186 93',
  },
  'icon-advice-top': {
    element: IconAdviceTop,
    viewBox: '0 0 186 93',
  },
  'icon-close': {
    element: IconClose,
    viewBox: '0 0 27 26',
  },
  'icon-add': {
    element: IconAdd,
    viewBox: '0 0 16 16',
  },
  'icon-remove': {
    element: IconRemove,
    viewBox: '0 0 16 16',
  },
  'icon-arrow-down': {
    element: IconArrowDown,
    viewBox: '0 0 21 13',
  },
  'icon-arrow-up': {
    element: IconArrowUp,
    viewBox: '0 0 21 13',
  },
  'icon-service-pc': {
    element: IconServicePC,
    viewBox: '0 0 317 180',
  },
  'icon-service-pc-shadow': {
    element: IconServicePCShadow,
    viewBox: '0 0 256 171',
  },
  'icon-service-nets': {
    element: IconServiceNets,
    viewBox: '0 0 339 339',
  },
  'icon-service-nets-shadow': {
    element: IconServiceNetsShadow,
    viewBox: '0 0 230 191',
  },
  'icon-service-servers': {
    element: IconServiceServers,
    viewBox: '0 0 337 215',
  },
  'icon-service-servers-shadow': {
    element: IconServiceServersShadow,
    viewBox: '0 0 243 171',
  },
  'icon-logo-letter': {
    element: IconLogoLetter,
    viewBox: '0 0 78 65',
  },
  'icon-logo-name': {
    element: IconLogoName,
    viewBox: '0 0 172 30',
  },
  'icon-home-speech-balloon': {
    element: IconHomeSpeechBalloon,
    viewBox: '0 0 224 99',
  },
  'icon-feedback-triangle-left': {
    element: IconFeedbackTriangleLeft,
    viewBox: '0 0 114 99',
  },
  'icon-feedback-triangle-right': {
    element: IconFeedbackTriangleRight,
    viewBox: '0 0 113 49',
  },
  'icon-emoji': {
    element: IconEmoji,
    viewBox: '0 0 160 160',
  },
  'icon-arrow-left': {
    element: IconArrowLeft,
    viewBox: '0 0 17 31',
  },
  'icon-arrow-right': {
    element: IconArrowRight,
    viewBox: '0 0 17 31',
  },
  'icon-checkbox-error': {
    element: IconCheckboxError,
    viewBox: '0 0 242 45',
  },
  'icon-404-page': {
    element: Icon404Page,
    viewBox: '0 0 717 467',
  },
  'icon-header-burger': {
    element: IconBurger,
    viewBox: '0 0 40 30',
  },
  'icon-close-rounded': {
    element: IconCloseRounded,
    viewBox: '0 0 40 31',
  },
  'icon-arrow-left-bold': {
    element: IconArrowLeftBold,
    viewBox: '0 0 21 36',
  },
  'icon-arrow-right-bold': {
    element: IconArrowRightBold,
    viewBox: '0 0 21 36',
  },
};
interface CustonMuiIconProps extends SvgIconProps {
  type: string;
  size: string;
}
export const CustonMuiIcon = ({
  type,
  size,
  sx,
  ...props
}: CustonMuiIconProps) => {
  const component = iconComponentMap[type];

  return component ? (
    <SvgIcon
      component={component.element}
      {...props}
      sx={{
        ...sx,
        fontSize: size,
      }}
      viewBox={component.viewBox}
    ></SvgIcon>
  ) : null;
};
