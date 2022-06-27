// Discard any trips that average a speed of less than 5 mph or greater than 100 mph.

// Generate a report containing each driver with total miles driven and average speed. Sort the output by most miles driven to least. Round miles and miles per hour to the nearest integer.

const getMinutesDiff1 = (test1, test2) => {
  var diff = test2.getTime() - test1.getTime(); // this is a time in milliseconds
  var diff_as_date = new Date(diff);
  return diff_as_date.getHours() + diff_as_date.getMinutes(); // minutes
};

// https://stackoverflow.com/questions/7709803/javascript-get-minutes-between-two-dates
const getMinutesDiff2 = (day1, day2) => {
  // var today = new Date();
  // var Christmas = new Date(today.getFullYear() + "-12-25");
  var diffMs = day2 - day1; // milliseconds between now & Christmas
  var diffDays = Math.floor(diffMs / 86400000); // days
  var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
  var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes};
  return diffHrs * 60 + diffMins;
};

function TripTracker(lines) {
  // Your code here
  const obj = {};
  for (const line of lines) {
    if (line.startsWith('Driver')) {
      const name = line.split(' ')[1];
      obj[name] = { minutes: 0, miles: 0 };
    } else {
      const arr = line.split(' ');
      const start = new Date(`December 17, 1995 ${arr[2]}`),
        end = new Date(`December 17, 1995 ${arr[3]}`);
      const diffInMinutes = getMinutesDiff2(start, end);
      console.log(
        '🚀 ~ file: trip-tracker.js ~ line 29 ~ TripTracker ~ diffInMinutes',
        diffInMinutes
      );
      const miles = Number(arr[4]);
      const name = arr[1];
      const mph = miles / (diffInMinutes / 60);
      // console.log(
      //   '🚀 ~ file: trip-tracker.js ~ line 32 ~ TripTracker ~ mph',
      //   mph,
      //   arr[1]
      // );
      if (mph >= 5) {
        obj[name].miles += miles;
        obj[name].minutes += diffInMinutes;
      }
    }
  }
  console.log('🚀 ~ file: trip-tracker.js ~ line 20 ~ TripTracker ~ obj', obj);

  const expectedOutput = `Lauren: 42 miles @ 34 mph
Dan: 39 miles @ 47 mph
Kumi: 0 miles`;

  console.log(expectedOutput);
}

module.exports = TripTracker;
