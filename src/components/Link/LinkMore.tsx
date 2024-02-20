import { useState, useEffect } from 'react';
import Link, { LinkProps } from '@mui/material/Link';
import { getNoun } from '@/utils/function';

type LinkMoreProps = LinkProps & {
  number: number;
};

export const LinkMore = ({ number, ...props }: LinkMoreProps) => {
  const [service, setService] = useState<string>('');

  useEffect(() => {
    const word = getNoun(number, 'услуга', 'услуги', 'услуг');
    setService(word);
  }, [number]);

  return <Link variant="more" {...props}>{`еще ${number} ${service} +`}</Link>;
};
