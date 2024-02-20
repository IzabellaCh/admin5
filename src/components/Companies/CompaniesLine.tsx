import { CompanyContainer } from './CompanyContainer';

type CompaniesLineProps = {
  lineInfo: string[];
  index: number;
  cardSize: string;
};

export const CompaniesLine = ({ lineInfo, index }: CompaniesLineProps) => {
  return (
    <>
      {index % 2 === 0 && <CompanyContainer />}
      {lineInfo.map((company: string, index: number) => (
        <CompanyContainer key={index} data={company} />
      ))}
      {index % 2 !== 0 && <CompanyContainer />}
    </>
  );
};
