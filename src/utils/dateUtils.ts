/**
 * Converts a date string in "YYYY-MM-DD" format to a human-readable format.
 * @param {string} dateString - The date string in "YYYY-MM-DD" format.
 * @returns {string} - The human-readable date format (e.g., "June 25, 2024").
 */
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
};

/**
 * Calculate the start and end dates for fetching APOD images.
 * @param {string | undefined} pageParam - The current page parameter (end date of the last fetch).
 * @returns {{ startDateStr: string, endDateStr: string, nextPageParam: string }} - The calculated dates and next page parameter.
 */
const calculateDateRange = (pageParam?: string) => {
  const today = new Date();
  const endDate = pageParam ? new Date(pageParam) : today;
  const startDate = new Date(endDate);

  // Subtract 14 days to get a range of 15 days
  startDate.setDate(startDate.getDate() - 14);

  // Format dates to YYYY-MM-DD
  const endDateStr = endDate.toISOString().split('T')[0];
  const startDateStr = startDate.toISOString().split('T')[0];

  // Calculate the next page parameter (earliest date - 1 day)
  const nextPageDate = new Date(startDate);
  nextPageDate.setDate(nextPageDate.getDate() - 1);
  const nextPageParam = nextPageDate.toISOString().split('T')[0];

  return {
    startDateStr,
    endDateStr,
    nextPageParam,
  };
};

export { formatDate, calculateDateRange };
