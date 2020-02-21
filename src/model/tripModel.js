export default function(data = {}) {
  return Object.keys(data).map(k => {
    if(k === 'trip_id') {
      return { label: 'Trip Id', value: data[k] }
    }
    if(k === 'duration') {
      return { label: 'Duration', value: data[k] }
    }
    if(k === 'distance') {
      return { label: 'Distance', value: data[k] }
    }
    if(k === 'start_time') {
      return { label: 'Start Time', value: data[k] }
    }
    if(k === 'end_time') {
      return { label: 'End Time', value: data[k] }
    }
    return { label: k, value: data[k] }
  });
}