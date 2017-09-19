import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends React.Component {

  renderField (field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return(
      <div>
        <div>
          <Link to="/" className="btn btn-primary">Go back</Link>
        </div>
        <form>
          <Field
            label="Title"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field
            label="Post Content"
            name="content"
            component={this.renderField}
          />
        </form>
      </div>
    );
  }
}

function validate (values) {
  const errors = {};
  // validate inputs from values
  if (!values.title) {
    errors.title = "Enter a title!";
  }
  // if errors is empty form will submit
  // if errors is not empty the form will not submit
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);