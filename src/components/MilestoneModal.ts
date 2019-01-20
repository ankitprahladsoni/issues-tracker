import TaskModal from './TaskModal';

export default class MilestoneModal {
  closed: boolean;
  name: string;
  tasks: TaskModal[];
  dueDate: string;

  constructor(
    closed: boolean,
    name: string,
    tasks: TaskModal[],
    dueDate: string
  ) {
    this.closed = closed;
    this.name = name;
    this.tasks = tasks;
    this.dueDate = dueDate;
  }
}
