import bearImage from '../../../public/assets/icons/companies/image_bear.png';
import nHImage from '../../../public/assets/icons/companies/image_nh.png';
import remosImage from '../../../public/assets/icons/companies/image_remos.png';
import jupiterImage from '../../../public/assets/icons/companies/image_jupiter.png';

type TCompaniesLogoLine = string[];

export const COMPATIES_LOGO: TCompaniesLogoLine[] = [
  [bearImage.src, nHImage.src],
  [jupiterImage.src, remosImage.src],
  [bearImage.src, nHImage.src],
];
