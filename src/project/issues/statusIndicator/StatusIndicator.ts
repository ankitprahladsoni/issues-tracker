import Status from 'src/project/Status';

export const getStatusColor = (status: Status) => {
  switch (status) {
    case Status.Open:
      return 'red';
    case Status.InProgress:
      return 'orange';
    case Status.Closed:
      return 'green';
  }
};
