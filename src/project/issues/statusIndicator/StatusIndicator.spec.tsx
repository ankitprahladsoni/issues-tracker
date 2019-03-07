import { getStatusColor } from './StatusIndicator';
import Status from 'src/project/Status';

it.each`
  color       | status
  ${'red'}    | ${Status.Open}
  ${'orange'} | ${Status.InProgress}
  ${'green'}  | ${Status.Closed}
`('should have $color band if status is $status', ({ color, status }) => {
  expect(getStatusColor(status)).toEqual(color);
});
