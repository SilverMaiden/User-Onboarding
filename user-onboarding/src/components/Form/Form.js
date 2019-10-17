import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import UserCard from '../UserCard/UserCard';


const UserForm = ({ values, handleChange, status }) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
    if (status) {
        setUsers([...users, status]);
    }
    }, [status]);
    return (
        <div className="container">
            <Form className="form-flex">
                <p>ENTER YOUR NAME:</p>
                <Field
                    className="input"
                    type="text"
                    name="name"
                    placeholder="name"
                />
                <p>ENTER YOUR EMAIL:</p>
                <Field
                    className="input"
                    type="text"
                    name="email"
                    placeholder="email"
                />
                <p>CREATE YOUR PASSWORD:</p>
                <Field
                    className="input"
                    type={values.showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="password"
                />
                <br />
                <Field
                    component="select"
                    className="input"
                    placeholder="role"
                    name="role">
                        <option value="" label="Select a role" />
                        <option value="Software Developer" label="Software Engineer" />
                        <option value="UX Designer" label="UX Designer" />
                        <option value="Data Science" label="Data Science" />
                    </Field>
                <p>(Check if you're excited for the project!)</p>
                <Field
                    type="checkbox"
                    name="excited"
                    value="excited about project"
                />
                <br />

                <button type="submit">Submit</button>


            </Form>
            <UserCard users={users} />
        </div>
    );
};

const FormikUserForm = withFormik({
    mapPropsToValues({name, email, password, role, excited}) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            role: role || '',
            excited: excited || '',

        };
    }
    ,validationSchema: Yup.object().shape({
        name: Yup.string().required('you silly!'),
        email: Yup.string().required(),
        password: Yup.string().required(),
    }),
    handleSubmit(values, { setStatus, resetForm }) {
        console.log("yaaay it worked!");
        axios
            .post("https://reqres.in/api/users", values)
            .then(res => {
                setStatus(res.data);
                {console.log(res.data.password)}
                {console.log(res.data)}
                resetForm();
            })
            .catch(err => console.log(err.response));



    },




})(UserForm);

export default FormikUserForm;
