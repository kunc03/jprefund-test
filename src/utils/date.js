const formatDateTime = (dateTimeStr, options = { showTime: true }) => {
  const date = new Date(dateTimeStr);

  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  };

  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };

  const dateFormatter = new Intl.DateTimeFormat('en-US', dateOptions);
  const timeFormatter = new Intl.DateTimeFormat('en-US', timeOptions);

  const formattedDate = dateFormatter.format(date);
  const formattedTime = timeFormatter.format(date);

  const formattedDateParts = formattedDate.split(' ');
  const day = formattedDateParts[1].replace(',', '');
  const month = formattedDateParts[0];
  const year = formattedDateParts[2];

  const finalFormattedDate = `${year} ${month} ${day}`;

  if (options.showTime) {
    return `${finalFormattedDate} at ${formattedTime}`;
  }

  return formattedDate;
};

const getDateOnly = (dateTimeStr) => {
  return dateTimeStr.split('T')[0];
};

const formatSecondToTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};

const formatDateSimple = (dateTimeStr) => {
  const date = new Date(dateTimeStr);

  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  const dateFormatter = new Intl.DateTimeFormat('en-US', options);
  const formattedDate = dateFormatter.format(date);

  const parts = formattedDate.split(' ');
  const month = parts[0];
  const day = parts[1].replace(',', '');
  const year = parts[2];

  return `${year} ${month}. ${day}`;
};

export { formatDateTime, getDateOnly, formatSecondToTime, formatDateSimple };
