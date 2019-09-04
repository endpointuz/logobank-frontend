import React from 'react';

import Input from './Input';
import SearchInput from './SearchInput';

class Form extends React.Component {
  constructor(props) {
    super(props);
    const textInputsList = React.Children
      .toArray(props.children)
      .filter(el => el.props.type === 'text')
      .reduce((acc, el) => ({
        ...acc,
        [el.props.name]: {
          value: el.props.defaultValue || '',
        },
      }), {});

    this.state = {
      fields: {
        ...textInputsList,
      },
    };
  }

  handleInputChange = (e) => {
    const { target } = e;
    const { change } = this.props;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const fieldName = target.name;
    change({ fieldName, value });
    this.setState({
      fields: {
        ...this.state.fields,
        [fieldName]: { value },
      },
    });
  }

  handleSubmit = (e) => {
    const { onSubmit, children } = this.props;
    const textInputsList = React.Children
      .toArray(children)
      .filter(el => el.props.type === 'text')
      .reduce((acc, el) => ({
        ...acc,
        [el.props.name]: {
          value: el.props.defaultValue || '',
        },
      }), {});
    e.preventDefault();
    onSubmit(this.state.fields);
    this.setState({ fields: textInputsList });
  }

  render() {
    const {
      children, className, onSubmit, change, ...rest
    } = this.props;

    const userClasses = className || '';
    const wrappedChildren = React.Children
      .map(
        children,
        child => React
          .cloneElement(child, {
            onChange: this.handleInputChange,
            value: this.state.fields[child.props.name],
          }),
      );

    return (
      <form className={`mcs-form ${userClasses}`} {...rest} onSubmit={this.handleSubmit}>
        {wrappedChildren}
      </form>
    );
  }
}

Form.Input = Input;
Form.SearchInput = SearchInput;

export default Form;
