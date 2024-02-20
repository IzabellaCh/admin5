import { useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Score } from '@/components/Score/Score';
import {
  selectRequisitions,
  selectOutcalls,
  selectFailures,
  selectPlannedOutcalls,
} from '@/redux/slices/statistic-data-slice';

export const ScoreTable = () => {
  const requisitions = useSelector(selectRequisitions);
  const outcalls = useSelector(selectOutcalls);
  const failures = useSelector(selectFailures);
  const plannedOutcalls = useSelector(selectPlannedOutcalls);

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      borderRadius="10px"
      border="1px solid"
      borderColor="primary.main"
      sx={{
        rowGap: '35px',
        width: '73%',
        padding: '34px 0 28px',
        '@media (max-width:900px)': {
          rowGap: '10px',
          width: '360px',
          padding: '14px 0 12px',
        },
      }}
    >
      <Stack direction="row" width="100%">
        <Score
          names={['заявка', 'заявки', 'заявок']}
          number={requisitions}
          width="32%"
        ></Score>
        <Score
          names={['выезд', 'выезда', 'выездов']}
          number={outcalls}
          width="35%"
          lateralBorder="1px solid"
        ></Score>
        <Score
          names={['авария', 'аварии', 'аварий']}
          number={failures}
          width="32%"
        ></Score>
      </Stack>
      <Typography
        variant="h2"
        color="secondary.main"
        sx={{
          '@media (max-width:900px)': {
            fontSize: 18,
            fontWeight: 300,
          },
        }}
      >{`Запланировано: ${plannedOutcalls} выездов`}</Typography>
    </Stack>
  );
};
