import Status from '../Status';
export function createIssueProps<T>(props: T) {
  return {
    status: Status.Open,
    ...props,
  };
}
