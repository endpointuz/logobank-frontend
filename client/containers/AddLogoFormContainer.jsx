import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Section, Alert } from '../components/simple';
import * as actions from '../actions';

const { SectionCell } = Section;

const mapStateToProps = state => ({
  categories: state.categories.list,
  notification: state.notification,
});

const actionsCreators = {
  logoCreate: actions.logoCreate,
  hideAlert: actions.hideAlert,
};

const InputFile = props => (
  <input type="file" className="input-file" onChange={(e) => {
    e.preventDefault();
    const { input } = props;
    const files = [...e.target.files];
    input.onChange(files);
  }} />
);

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Обязательное поле';
  }
  return errors;
};

const renderField = ({
  input,
  type,
  meta: { touched, error },
}) => (
  <>
    <input {...input} type={type} className="addlogo-input" />
    {
      touched
        && (error && <span className="error">{error}</span>)
    }
  </>
);

const AddLogoFormContainer = (props) => {
  const {
    handleSubmit, pristine, submitting, logoCreate, reset, notification, hideAlert,
  } = props;

  const createLogo = async (values) => {
    await logoCreate(values);
    reset();
  };

  return (
    <section className="addlogo">
      <Alert
        {...notification}
        handleClose={hideAlert}
      />
      <Section>
        <SectionCell lg={12}>
          <div className="addlogo-form">
            <form onSubmit={handleSubmit(createLogo)}>
              <Section>
                <SectionCell lg={4}>
                  <label htmlFor="name">Название компании*</label>
                  <Field
                    name="name"
                    id="name"
                    component={renderField}
                    type="text"
                    placeholder="Название компании"
                  />
                </SectionCell>
                <SectionCell lg={4}>
                  <label htmlFor="description">Краткое описание</label>
                  <Field name="description" id="description" className="addlogo-textarea" component="textarea" placeholder="Описание компании или логотипа" />
                </SectionCell>
                <SectionCell lg={4}>
                  <label htmlFor="cdr">Файл .CDR, .AI или .PDF</label>
                  <Field name="files.logo_upload" id="cdr" component={InputFile} type="file" />
                </SectionCell>
              </Section>
              <Section>
                <SectionCell lg={12}>
                  <div className="addlogo-submit">
                    <button type="submit" disabled={pristine || submitting} className="addlogo-submit-button">
                      Submit
                    </button>
                  </div>
                </SectionCell>
              </Section>
            </form>
          </div>
        </SectionCell>
      </Section>
    </section>
  );
};

export default connect(mapStateToProps, actionsCreators)(reduxForm({
  form: 'addlogo',
  validate,
})(AddLogoFormContainer));
