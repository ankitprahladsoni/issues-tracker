import React from 'react';

export interface OpenCloseProps {}

export interface OpenCloseState {}

export default class OpenClose extends React.Component<
  OpenCloseProps,
  OpenCloseState
> {
  constructor(props: OpenCloseProps) {
    super(props);

    this.state = {};
  }

  render() {
    return <div />;
  }
}
