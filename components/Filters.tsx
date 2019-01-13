import React from 'react';

export interface FiltersProps {}

export interface FiltersState {}

export default class Filters extends React.Component<
  FiltersProps,
  FiltersState
> {
  constructor(props: FiltersProps) {
    super(props);

    this.state = {};
  }

  render() {
    return <div />;
  }
}
