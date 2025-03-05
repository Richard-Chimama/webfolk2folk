import dayjs from 'dayjs';
import { CssBaseline, Typography, Box } from '@mui/joy';

const WeeklySchedule = () => {
  const daysOfWeek = [
    { day: 'måndag', open: '12:00', close: '18:00' },
    { day: 'tisdag', open: '12:00', close: '18:00' },
    { day: 'onsdag', open: '12:00', close: '18:00' },
    { day: 'törsdag', open: '12:00', close: '18:00' },
    { day: 'fredag', open: '12:00', close: '18:00' },
    { day: 'lördag', open: '12:00', close: '18:00' },
    { day: 'söndag', open: '14:00', close: '18:00' },
  ];

  const currentDay = dayjs().day(); // 0 (Sunday) to 6 (Saturday)

  return (
    <Box>
      <CssBaseline />
      {daysOfWeek.map((dayInfo, index) => {
        const isToday = currentDay === (index+1);
       

        return (
          <Box
            key={dayInfo.day}
            sx={{
              pb: 1,
              backgroundColor: isToday ? 'primary.main' : 'background.paper',
              color: isToday ? 'white' : 'text.primary',
              display:'flex',
              gap: 2,
            }}
          >
            <Typography component="h6">
              {dayInfo.day}
            </Typography>
            <Typography component="p">
              {dayInfo.open && dayInfo.close ? `öppet från ${dayInfo.open} till ${dayInfo.close}` : 'stäng'}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default WeeklySchedule;
