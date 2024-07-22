var insertInterval = function (intervals, newInterval) {
  let output = [];
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][1] < newInterval[0]) {
      output.push(intervals[i]);
    } else if (intervals[i][0] > newInterval[1]) {
      output.push(newInterval);
      newInterval = intervals[i]
    }else {
        newInterval = [
            Math.min(intervals[i][0], newInterval[0]),
            Math.max(intervals[i][1], newInterval[1])
        ]
    }
  }
 
  return output;
};
