import React from 'react';
import renderer from 'react-test-renderer';

import RepositoryScreen from './RepositoryScreen';

it('renders correctly with defaults', () => {
  const button = renderer.create(<RepositoryScreen />).toJSON();
  expect(button).toMatchSnapshot();
});
