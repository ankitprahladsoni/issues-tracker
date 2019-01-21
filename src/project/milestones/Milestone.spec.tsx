import { shallow } from 'enzyme';
import React from 'react';
import { valueFromWrapper } from 'testUtils/ElementUtils';
import ProgressIndicator from 'components/ProgressIndicator';
import IssuesCounter from 'components/IssuesCounter';
import Milestone from './Milestone';
import State from '../State';

function createTestProps<T>(props: T) {
  return {
    dueDate: '01/01/2020',
    state: State.Open,
    openIssues: 0,
    closedIssues: 0,
    dueOn: new Date('Mon, 21 Jan 2019 00:30:14 GMT'),
    ...props,
  };
}

describe('Milestone', () => {
  const title = 'First milestone';
  let props: any = createTestProps({ title });
  const wrapper = shallow(<Milestone {...props} />);

  it('should display the title of milestone', () => {
    expect(valueFromWrapper(wrapper, 'milestone-title')).toEqual(title);
  });

  it('should have a TaskCounter component', () => {
    expect(wrapper.find(IssuesCounter).length).toBe(1);
  });

  it('should have a ProgressIndicator component', () => {
    expect(wrapper.find(ProgressIndicator).length).toBe(1);
  });

  it('should show expected end time of the milestone', () => {
    expect(valueFromWrapper(wrapper, 'date')).toBe('Due on Sun Jan 20 2019');
  });

  describe('with no closed tasks', () => {
    it('should calculate percentage as 0', () => {
      props = createTestProps({});

      const instance = getInstanceForWrapper(props);
      expect(instance.taskCompletionPercent()).toBe(0);
    });
  });

  describe('with 50% closed tasks', () => {
    it('should calculate percentage as 50', () => {
      props = createTestProps({
        openIssues: 1,
        closedIssues: 1,
      });

      const instance = getInstanceForWrapper(props);
      expect(instance.taskCompletionPercent()).toBe(50);
    });
  });
});

describe('Closed milestone', () => {
  const props: any = createTestProps({
    state: State.Closed,
    closedAt: new Date('02/01/2020'),
  });
  const wrapper = shallow(<Milestone {...props} />);

  it('should show completed date', () => {
    expect(valueFromWrapper(wrapper, 'date')).toBe(
      'Closed at Sat, 01 Feb 2020 05:00:00 GMT'
    );
  });
});

function getInstanceForWrapper(props: any) {
  const wrapper = shallow(<Milestone {...props} />);
  return wrapper.instance() as Milestone;
}
