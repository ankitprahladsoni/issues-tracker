import React from 'react';
import Milestone from './Milestone';
import { shallow } from 'enzyme';
import { valueFromWrapper } from 'testUtils/ElementUtils';
import TaskCounter from './TaskCounter';
import ProgressIndicator from './ProgressIndicator';

const navigateFn = jest.fn();
const createTestProps = (props: Object) => ({
  navigation: {
    navigate: navigateFn,
  },
  tasks: [],
  dueDate: '01/01/2020',
  closed: false,
  ...props,
});

describe('Milestone', () => {
  const milestoneName = 'First milestone';
  const props: any = createTestProps({ name: milestoneName });
  const wrapper = shallow(<Milestone {...props} />);

  it('should display the name of milestone', () => {
    expect(valueFromWrapper(wrapper, 'milestone-name')).toEqual(milestoneName);
  });

  it('should have a TaskCounter component', () => {
    expect(wrapper.find(TaskCounter).length).toBe(1);
  });

  it('should have a ProgressIndicator component', () => {
    expect(wrapper.find(ProgressIndicator).length).toBe(1);
  });

  it('should show expected end time of the milestone', () => {
    expect(valueFromWrapper(wrapper, 'date')).toBe('Due by 01/01/2020');
  });

  it("should display it's tasks when clicked on it", () => {
    wrapper.props().onPress();
    expect(navigateFn).toHaveBeenCalledWith('Task', { name: 'Task 1' });
  });
});

describe('Closed milestone', () => {
  const props: any = createTestProps({
    closed: true,
    closedDate: '02/01/2020',
  });
  const wrapper = shallow(<Milestone {...props} />);

  it('should show completed date', () => {
    expect(valueFromWrapper(wrapper, 'date')).toBe('Closed on 02/01/2020');
  });
});
