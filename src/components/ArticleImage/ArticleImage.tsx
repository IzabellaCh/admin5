import Box from '@mui/material/Box';
import defaultImage from '../../../public/assets/icons/about-us-page/image_about_us_second.jpg';

type ArticleImageProps = {
  src?: string;
};

export const ArticleImage = ({ src }: ArticleImageProps) => (
  <Box
    id="article-image"
    width="100%"
    sx={{
      backgroundImage: src ? `url(${src})` : `url(${defaultImage.src})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      borderRadius: '10px',
      height: '637px',
      mb: '77px',
      '@media (max-width:1080px)': {
        height: '500px',
      },
      '@media (max-width:900px)': {
        height: '400px',
      },
      '@media (max-width:600px)': {
        mb: '56px',
        height: '293px',
      },
    }}
  ></Box>
);
