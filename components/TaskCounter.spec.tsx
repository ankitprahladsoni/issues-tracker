import { shallow } from "enzyme";
import Milestone from "./Milestone";
import { valueFromWrapper } from "testUtils/ElementUtils";
import TaskModal from "./TaskModal";
import TaskCounter from "./TaskCounter";


it('should display "No Tasks" if there are no tasks in it', () => {
    // const wrapper = shallow((<Milestone name="firstMilestone" tasks={[]} />);
    // expect(valueFromWrapper(wrapper, 'task-count')).toEqual('No Tasks');
  });
  
  it('should show total and completed task counter', () => {
    // const tasks: TaskModal[] = [];
    // const wrapper = shallow(<Milestone name="firstMilestone" tasks={tasks} />);
    // expect(wrapper.find(TaskCounter));
  });