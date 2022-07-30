import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Label, Form, FormGroup } from 'reactstrap';
import { Formik } from 'formik';
import { Input as InputIcon } from '@material-ui/icons';
import * as Yup from 'yup';
import { useMutation } from 'react-query';
import Button from '../components/Button';

import AuthImage from '../assets/images/rules.png';
import { login } from '../services/user';
import Loader from '../components/Spinner';

const Login = () => {
  const history = useHistory();
  const [error, setError] = useState('');
  const [doAuth, { isLoading }] = useMutation((values) => login(values), {
    onSuccess: () => {
      history.replace('/');
    },
    onError: (error) => {
      setError(error.message);
    },
  });
  return (
    <div className="wrapper">
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          setError('');
          doAuth(values);
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .required('Email adresa mora biti unijeta')
            .email('Neispravan format email adrese')
            .max(250, 'Email adresa mora imati najviše 250 karaktera'),
          password: Yup.string()
            .required('Lozinka mora biti unijeta')
            .min(6, 'Lozinka mora imati najmanje 6 karaktera')
            .max(250, 'Lozinka mora imati najviše 250 karaktera'),
        })}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="auth-form">
            <div>
              <h3>mTranslate app</h3>
            </div>
            <div className="center-x mb-5 mt-5">
              <div style={{ width: '150px', textAlign: 'center' }}>
                <img src={AuthImage} alt="authimage" style={{ width: '100%', resize: 'both' }} />
              </div>
            </div>
            {!isLoading && (
              <div className="d-flex flex-column align-items-center">
                <div className="auth-form__error">{error}</div>
                <FormGroup>
                  <Label for="email">Email adresa:</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    style={{ fontSize: '1.4rem' }}
                  />
                </FormGroup>
                <div className="auth-form__error">{errors.email && touched.email && errors.email}</div>
              </div>
            )}
            {!isLoading && (
              <div className="d-flex flex-column align-items-center">
                <FormGroup>
                  <Label for="password">Lozinka:</Label>
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    style={{ fontSize: '1.4rem' }}
                  />
                </FormGroup>
                <div className="auth-form__error">{errors.password && touched.password && errors.password}</div>
              </div>
            )}
            {isLoading && (
              <div className="d-flex justify-content-center my-5">
                <Loader />
              </div>
            )}
            <div className="d-flex flex-column align-items-center">
              <Button type="submit active" disabled={isLoading}>
                <div className="center-xy">
                  <span className="mr-2">Prijavi se</span>
                  <InputIcon />
                </div>
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
