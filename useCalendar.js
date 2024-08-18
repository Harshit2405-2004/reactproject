import { useState, useEffect } from 'react';

const useCalendar = () => {
  const [calendar, setCalendar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCalendar = async () => {
      try {
        const response = await fetch('https://example.com/calendar');
        const data = await response.json();
        setCalendar(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCalendar();
  }, []);

  return { calendar, loading, error };
};

export default useCalendar;
