import { shallow } from 'enzyme';
import React from 'react';
import { valueFromWrapper } from 'testUtils/ElementUtils';
import Milestone from './Milestone';
import ProgressIndicator from '../../components/ProgressIndicator';
import TaskCounter from '../../components/TaskCounter';

function createTestProps<T>(props: T) {
  return {
    closed: false,
    dueDate: '01/01/2020',
    tasks: [],
    ...props,
  };
}

describe('Milestone', () => {
  const milestoneName = 'First milestone';
  let props: any = createTestProps({ name: milestoneName });
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

  describe('with no closed tasks', () => {
    it('should calculate percentage as 0', () => {
      props = createTestProps({
        tasks: [{ closed: false }],
      });

      const instance = getInstanceForWrapper(props);
      expect(instance.taskCompletionPercent()).toBe(0);
    });
  });

  describe('with 50% closed tasks', () => {
    it('should calculate percentage as 50', () => {
      props = createTestProps({
        tasks: [{ closed: false }, { closed: true }],
      });

      const instance = getInstanceForWrapper(props);
      expect(instance.taskCompletionPercent()).toBe(50);
    });
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

function getInstanceForWrapper(props: any) {
  const wrapper = shallow(<Milestone {...props} />);
  return wrapper.instance() as Milestone;
}
