'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { changeOpenModal } from '@/redux/slices/modal-condition-slice';

export const useNewRouteToCloseModal = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeOpenModal(null));
  }, [pathname, dispatch]);
};
