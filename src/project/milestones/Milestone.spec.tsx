import { shallow } from 'enzyme';
import React from 'react';
import { valueFromWrapper } from 'testUtils/ElementUtils';
import ProgressIndicator from 'components/ProgressIndicator';
import IssuesCounter from 'components/IssuesCounter';
import Milestone from './Milestone';
import Status from '../Status';
import { createMilestoneProps } from './MilestoneTestUtil';

describe('Milestone', () => {
  const title = 'First milestone';
  let props: any = createMilestoneProps({ title });
  const wrapper = shallow(<Milestone {...props} />);

  it('should display the title of milestone', () => {
    expect(valueFromWrapper(wrapper, 'milestone-title')).toEqual(title);
  });

  it('should have a IssuesCounter component', () => {
    expect(wrapper.find(IssuesCounter).length).toBe(1);
  });

  it('should have a ProgressIndicator component', () => {
    expect(wrapper.find(ProgressIndicator).length).toBe(1);
  });

  it('should show expected end time of the milestone', () => {
    expect(valueFromWrapper(wrapper, 'date')).toBe('Due on Sun Jan 20 2019');
  });

  describe('with no closed issues', () => {
    it('should calculate percentage as 0', () => {
      props = createMilestoneProps({});

      const instance = getInstanceForWrapper(props);
      expect(instance.issuesCompletionPercent()).toBe(0);
    });
  });

  describe('with 50% closed issues', () => {
    it('should calculate percentage as 50', () => {
      props = createMilestoneProps({
        openIssues: 1,
        closedIssues: 1,
      });

      const instance = getInstanceForWrapper(props);
      expect(instance.issuesCompletionPercent()).toBe(50);
    });
  });
});

describe('Closed milestone', () => {
  const props: any = createMilestoneProps({
    status: Status.Closed,
    closedAt: new Date('Sat, 01 Feb 2020 05:00:00 GMT'),
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
