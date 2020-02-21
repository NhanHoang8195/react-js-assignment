import React from 'react';

function timeFormatter(cell) {
  const date = new Date(cell);
  if (isNaN(date.valueOf())) {
    return "Invalid date";
  }
  const h = date.getHours();
  const minutes = date.getMinutes();
  const s = date.getSeconds();
  const y = date.getFullYear();
  const month = date.getMonth();
  const d = date.getDate();
  return (<div>
    <p className="time-formatted">Time: {h}:{minutes}:{s}</p>
    <p className="time-formatted">Date: {d}/{month}/{y}</p>
  </div>);
}

export const TRIPS_TABLE = [
  { dataField: 'trip_id', text: 'Trip Id' },
  { dataField: 'duration', text: 'Duration' },
  { dataField: 'distance', text: 'Distance' },
  // { dataField: 'start_time', text: 'Start Time', formatter: timeFormatter },
  { dataField: 'end_time', text: 'End Time', formatter: timeFormatter },
];