'use client';

import { useState } from 'react';
import { useSelector } from 'react-redux';

import { MobileModalContainer } from '@/containers/MobileModalContainer';
import { MainMenu } from './MainMenu';
import { ServicesMenu } from './ServicesMenu';
import { ServiceArticlesMenu } from './ServiceArticlesMenu';
import { EMenu, TVisibleMenu } from './modalMobileMenu.types';
import { SERVICES } from '@/shared/serviceData/service.data';
import { selectOpenModal, EModals } from '@/redux/slices/modal-condition-slice';

export const ModalMobileMenu = () => {
  const [visibleMenu, setVisibleMenu] = useState<TVisibleMenu>(EMenu.MainMenu);
  const openModal = useSelector(selectOpenModal);

  if (openModal !== EModals.MobileMenu) return null;

  return (
    <MobileModalContainer>
      {visibleMenu === EMenu.MainMenu && (
        <MainMenu onServicesMenu={() => setVisibleMenu(EMenu.ServicesMenu)} />
      )}
      {visibleMenu === EMenu.ServicesMenu && (
        <ServicesMenu handleNavigate={(menu) => setVisibleMenu(menu)} />
      )}
      {visibleMenu === EMenu.PCMenu && (
        <ServiceArticlesMenu
          handleNavigate={() => setVisibleMenu(EMenu.ServicesMenu)}
          serviceData={SERVICES[0]}
        />
      )}
      {visibleMenu === EMenu.ServersMenu && (
        <ServiceArticlesMenu
          handleNavigate={() => setVisibleMenu(EMenu.ServicesMenu)}
          serviceData={SERVICES[1]}
        />
      )}
      {visibleMenu === EMenu.NetsMenu && (
        <ServiceArticlesMenu
          handleNavigate={() => setVisibleMenu(EMenu.ServicesMenu)}
          serviceData={SERVICES[2]}
        />
      )}
    </MobileModalContainer>
  );
};
