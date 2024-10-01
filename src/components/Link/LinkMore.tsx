import { useState, useEffect } from 'react';
import { LinkProps } from '@mui/material/Link';
import { getNoun } from '@/utils/function';
import { CustomLink } from '@/components/Link/CustomLink';

type LinkMoreProps = LinkProps & {
  number: number;
};

export const LinkMore = ({ number, ...props }: LinkMoreProps) => {
  const [service, setService] = useState<string>('');

  useEffect(() => {
    const word = getNoun(number, 'услуга', 'услуги', 'услуг');
    setService(word);
  }, [number]);

  return (
    <CustomLink
      variant="more"
      {...props}
    >{`еще ${number} ${service} +`}</CustomLink>
  );
};
