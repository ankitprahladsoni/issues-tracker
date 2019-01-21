import Status from '../Status';
export function createMilestoneProps<T>(props: T) {
  return {
    dueDate: '01/01/2020',
    status: Status.Open,
    openIssues: 0,
    closedIssues: 0,
    dueOn: new Date('Mon, 20 Jan 2020'),
    ...props,
  };
}
