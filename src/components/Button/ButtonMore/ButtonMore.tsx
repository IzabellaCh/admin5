import Button, { ButtonProps } from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type ButtonMoreProps = ButtonProps & {
  text: string;
};

export const ButtonMore = ({ text, ...props }: ButtonMoreProps) => {
  return (
    <Button
      variant="more"
      endIcon={<ArrowForwardIosIcon />}
      {...props}
      disableRipple
    >
      {text}
    </Button>
  );
};
