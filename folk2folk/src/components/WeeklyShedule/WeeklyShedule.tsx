import dayjs from 'dayjs';
import { CssBaseline, Typography, Box } from '@mui/joy';

const WeeklySchedule = () => {
  const daysOfWeek = [
    { day: 'måndag', open: '11:00', close: '18:00' },
    { day: 'tisdag', open: '11:00', close: '18:00' },
    { day: 'onsdag', open: '11:00', close: '18:00' },
    { day: 'törsdag', open: '11:00', close: '18:00' },
    { day: 'fredag', open: '11:00', close: '18:00' },
    { day: 'lördag', open: '11:00', close: '18:00' },
    { day: 'söndag', open: null, close: null },
  ];

  const currentDay = dayjs().day(); // 0 (Sunday) to 6 (Saturday)
  const currentTime = dayjs().format('HH:mm');

  return (
    <Box>
      <CssBaseline />
      {daysOfWeek.map((dayInfo, index) => {
        const isToday = currentDay === index;
        let statusMessage = '';

        if (isToday) {
          if (dayInfo.open && dayInfo.close) {
            if (currentTime < dayInfo.open) {
              statusMessage = `ska öppna kl ${dayInfo.open}`;
            } else if(currentTime > dayInfo.open && currentTime < dayInfo.close ) {
              statusMessage = `ska öppna kl ${dayInfo.close}`;
            }
          } else {
            statusMessage = 'Stängt idag';
          }
        }

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
            {isToday && <Typography component="p">{statusMessage}</Typography>}
          </Box>
        );
      })}
    </Box>
  );
};

export default WeeklySchedule;
