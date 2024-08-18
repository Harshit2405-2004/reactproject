import React, { useState, useEffect } from 'react';
import { useCalendar } from './useCalendar';

function Calendar() {
  const [events, setEvents] = useState([]);
  const { calendar, loading, error } = useCalendar();

  useEffect(() => {
    if (calendar) {
      setEvents(calendar.events);
    }
  }, [calendar]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Calendar</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Calendar;
