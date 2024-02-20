import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import { CustonMuiIcon } from '@/mui/muiCustomIcon';
import { EMenu, TVisibleMenu } from './modalMobileMenu.types';
import { SERVICES, ServiceData } from '@/shared/serviceData/service.data';
import { ENavigationLinksName } from '@/shared/navigationData/navigation.data';
import { ButtonMore } from '@/components/Button/ButtonMore/ButtonMore';

type ServicesMenuProps = {
  handleNavigate: (visibleMenu: TVisibleMenu) => void;
};

export const ServicesMenu = ({ handleNavigate }: ServicesMenuProps) => {
  {
    return (
      <Stack rowGap="50px" pt="45px">
        <IconButton
          onClick={() => handleNavigate(EMenu.MainMenu)}
          sx={(theme) => ({
            position: 'absolute',
            top: 18,
            left: 15,
            fontSize: '30px',
            '& svg path': {
              stroke: theme.palette.primary.main,
            },
          })}
        >
          <CustonMuiIcon
            type="icon-arrow-left"
            size="30px"
            style={{ fill: 'transparent' }}
          />
        </IconButton>
        {SERVICES.map((service: ServiceData, index: number) => (
          <ButtonMore
            key={index}
            text={service.title}
            onClick={() =>
              handleNavigate(
                service.title === ENavigationLinksName.PC
                  ? EMenu.PCMenu
                  : service.title === ENavigationLinksName.Servers
                  ? EMenu.ServersMenu
                  : service.title === ENavigationLinksName.Nets
                  ? EMenu.NetsMenu
                  : EMenu.MainMenu,
              )
            }
            className="menu-mobile-button"
          />
        ))}
      </Stack>
    );
  }
};
