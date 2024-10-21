import dayjs from 'dayjs';
import isYesterday from 'dayjs/plugin/isYesterday.js';
import isToday from 'dayjs/plugin/isToday.js';
import isTomorrow from 'dayjs/plugin/isTomorrow.js';
import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1711b79c-8235-440b-9e8b-9f29d678baa7", e._sentryDebugIdIdentifier = "sentry-dbid-1711b79c-8235-440b-9e8b-9f29d678baa7");
  } catch (e2) {
  }
}();
dayjs.extend(isYesterday);
dayjs.extend(isToday);
dayjs.extend(isTomorrow);
const formatUserUpcomingData = (data) => {
  const result = {};
  for (const item of data) {
    const { lesson_at } = item;
    const lessonAtDate = new Date(lesson_at);
    const monthIndex = lessonAtDate.getMonth();
    const dateIndex = lessonAtDate.getDate();
    if (result[monthIndex]) {
      const prevDateData = result[monthIndex][dateIndex];
      if (Array.isArray(prevDateData)) {
        result[monthIndex] = {
          ...result[monthIndex],
          [dateIndex]: [...prevDateData, item]
        };
      } else {
        result[monthIndex] = { ...result[monthIndex], [dateIndex]: [item] };
      }
    } else {
      result[monthIndex] = { [dateIndex]: [item] };
    }
  }
  return result;
};
const formatDate = (_selectedDate) => {
  if (!_selectedDate)
    return "";
  const selectedDate = dayjs(_selectedDate);
  if (selectedDate.isToday()) {
    return "Today";
  } else if (selectedDate.isYesterday()) {
    return "Yesterday";
  } else if (selectedDate.isTomorrow()) {
    return "Tomorrow";
  }
  return selectedDate.format("ddd, MMM D");
};

export { formatUserUpcomingData as a, formatDate as f };
//# sourceMappingURL=dashboard-f779ca70.js.map
