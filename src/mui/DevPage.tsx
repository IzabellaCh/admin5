'use client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { ButtonMore } from '../components/Button/ButtonMore/ButtonMore';
import { CustomMuiIcon } from './muiCustomIcon';
import IconButton from '@mui/material/IconButton';
import { ModalСommunication } from '../components/Modal/ModalCommunication';
import { Calculator } from '../components/Calculator/Calculator';
import { ServiceCard } from '@/components/ServiceCard/ServiceCard';
import { SERVICES } from '@/shared/serviceData/service.data';
import { ServicesTabs } from '@/components/ServicesTabs/ServicesTabs';
import { setDevise } from '@/redux/slices/mobile-device-slice';
import {
  changeOpenModal,
  selectOpenModal,
  EModals,
} from '@/redux/slices/modal-condition-slice';

export const DevPage = () => {
  const dispatch = useDispatch();
  const openModal = useSelector(selectOpenModal);

  const [val, setVal] = useState(1);

  // проверка на мобильность устройства
  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      )
    ) {
      // true for mobile device
      dispatch(setDevise(true));
      console.log('mobile device');
    } else {
      // false for not mobile device
      dispatch(setDevise(false));
      console.log('not mobile device');
    }
  }, [dispatch]);

  return (
    <Stack rowGap="20px" p="0 160px 0">
      <ServicesTabs />
      <Stack
        direction="row"
        columnGap="20px"
        pb="200px"
        flexWrap="wrap"
        rowGap="20px"
        justifyContent="flex-end"
      >
        {SERVICES.map((service, index) => (
          <ServiceCard
            width="392px"
            maxHeight="392px"
            key={index}
            service={service}
            icon={true}
          />
        ))}
        {/* <ServiceCard width="392px" service={SERVICES[0]} icon={true} /> */}
      </Stack>
      <Stack direction="row" columnGap="20px" pb="200px">
        {SERVICES.map((service, index) => (
          <ServiceCard width="50%" key={index} service={service} icon={false} />
        ))}
      </Stack>
      <Calculator />
      <Stack>
        <Typography variant="h1" color="primary.main">
          Typography h1 openSans
        </Typography>
        <Typography variant="h2" color="primary.dark">
          Typography h2 openSans
        </Typography>
        <Typography variant="h3" color="primary.light">
          Typography h3 openSans
        </Typography>
        <Typography variant="subtitle2" color="secondary.main">
          Typography subtitle2 openSans
        </Typography>
        <Typography variant="body1" color="error.main">
          Typography body1 openSans
        </Typography>
        <Typography variant="body2" color="warning.main">
          Typography body2 openSans
        </Typography>
        <Typography variant="caption" color="warning.dark">
          Typography caption openSans
        </Typography>
      </Stack>
      <Stack direction="row" columnGap="20px" pt="20px">
        <Typography variant="h2" color="secondary.main">
          Открыть модалку тут:
        </Typography>
        <Button
          variant="default"
          color="primary"
          onClick={() => dispatch(changeOpenModal(EModals.Communication))}
        >
          связаться с нами
        </Button>
        <Button variant="default" color="secondary">
          узнать цены
        </Button>
      </Stack>
      <ButtonMore text="Узнать больше" />
      <Stack direction="row" columnGap="20px" pt="20px">
        <Typography variant="h2" color="primary.dark">
          Выбери кнопку-фильтр
        </Typography>
        <Button
          variant="default"
          color="secondary"
          className={`button-filter ${val === 1 ? 'button-selected' : ''}`}
          onClick={() => setVal(1)}
        >
          button 1
        </Button>
        <Button
          variant="default"
          color="secondary"
          className={`button-filter ${val === 2 ? 'button-selected' : ''}`}
          onClick={() => setVal(2)}
        >
          button 2
        </Button>
        <Button
          variant="default"
          color="secondary"
          className={`button-filter ${val === 3 ? 'button-selected' : ''}`}
          onClick={() => setVal(3)}
        >
          button 3
        </Button>
      </Stack>
      <Stack direction="row" columnGap="20px" pt="20px">
        <Typography variant="h2" color="primary.dark">
          Icon buttons
        </Typography>
        <IconButton>
          <CustomMuiIcon type="icon-telegram" size="33px" />
        </IconButton>
        <IconButton>
          <CustomMuiIcon type="icon-facebook" size="40px" />
        </IconButton>
        <IconButton>
          <CustomMuiIcon type="icon-vk" size="53px" />
        </IconButton>
        <IconButton>
          <CustomMuiIcon type="icon-messagers" size="77px" />
        </IconButton>
      </Stack>
      <Stack rowGap="10px" pt="20px">
        <Typography variant="h2" color="primary.dark">
          Links
        </Typography>
        <Link variant="navigation">Стоимость</Link>
        <Link variant="menuSubheader">Работа с ПК</Link>
        <Link variant="menuItem">Удаление вирусов</Link>
        <Link variant="articleListItem">Удаление вирусов</Link>
        <Link variant="linkButton" color="primary">
          Открытие стоматологии
        </Link>
        <Link variant="linkButton" color="primary">
          Организация удаленного доступа сотрудников компании из 200+ человек
        </Link>
        <Link variant="linkButton" color="primary">
          Внедрение системы бэкапов Veeam
        </Link>
      </Stack>
      <Stack rowGap="10px" pt="20px" sx={{ backgroundColor: 'primary.light' }}>
        <Link variant="linkButton" color="secondary">
          Открытие стоматологии
        </Link>
        <Link variant="linkButton" color="secondary">
          Организация удаленного доступа сотрудников компании из 200+ человек
        </Link>
        <Link variant="linkButton" color="secondary">
          Внедрение системы бэкапов Veeam
        </Link>
        <Link variant="linkButton" color="secondary">
          Техническое обслуживание
        </Link>
        <Link variant="linkButton" color="secondary">
          Установка системы и ПО
        </Link>
        <Link variant="linkButton" color="secondary">
          Устранение неисправностей
        </Link>
        <Link variant="linkButton" color="secondary">
          Удаление вирусов
        </Link>
      </Stack>
      {openModal && <ModalСommunication />}
    </Stack>
  );
};
