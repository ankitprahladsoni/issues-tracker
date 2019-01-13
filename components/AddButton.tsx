import React from 'react';

export interface AddButtonProps {}

export interface AddButtonState {}

export default class AddButton extends React.Component<
  AddButtonProps,
  AddButtonState
> {
  constructor(props: AddButtonProps) {
    super(props);

    this.state = {};
  }

  render() {
    return <div />;
  }
}
