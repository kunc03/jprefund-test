const formatDateTime = (dateTimeStr, options = { showTime: true }) => {
  try {
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
  } catch (error) {
    return dateTimeStr;
  }
};

const formatTimeOnly = (dateTimeStr) => {
  try {
    const date = new Date(dateTimeStr);

    const timeOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };

    const timeFormatter = new Intl.DateTimeFormat('en-US', timeOptions);

    const formattedTime = timeFormatter.format(date);

    return formattedTime;
  } catch (error) {
    return dateTimeStr;
  }
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
  try {
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
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return dateTimeStr;
  }
};

const formatMonthOnly = (dateTimeStr) => {
  try {
    const date = new Date(dateTimeStr);

    const monthOptions = {
      month: 'short', // Mengatur agar hanya bulan yang ditampilkan dalam format pendek (contoh: "Aug.")
    };

    const monthFormatter = new Intl.DateTimeFormat('en-US', monthOptions);

    const formattedMonth = monthFormatter.format(date);

    return formattedMonth;
  } catch (error) {
    return dateTimeStr;
  }
};

export {
  formatDateTime,
  getDateOnly,
  formatSecondToTime,
  formatDateSimple,
  formatTimeOnly,
  formatMonthOnly,
};
