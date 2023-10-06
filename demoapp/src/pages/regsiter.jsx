import { useFormik } from "formik";

import * as yup from 'yup';
import { profileSchema } from "../utils/profileSchema";
export const Register = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            confirmPassword: ''
        },
        validationSchema: profileSchema,
        onSubmit: values => {
            console.log(values);
        },

    })
    const handleChange =(e)=>{
        console.log("I am called");
        formik.handleChange(e);
    }
    return (
        <form>
            <div class="row mb-3">
                <label for="username" class="col-sm-2 col-form-label">Enter Username</label>
                <div class="col-sm-3 " >
                    <input type="text" class="form-control" id="username"
                        onChange={handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.username}
                        name="username" />
                    {formik.touched.username && formik.errors.username ?
                     (<div class="text-danger">
                        {formik.errors.username}
                    </div>) : null}
                </div>


            </div>

            <div class="row mb-3">
                <label for="password" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-3">
                    <input type="password" class="form-control" id="password"
                        name="password"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.password} />
                    {formik.touched.password && formik.errors.password ? (<div class="text-danger">
                        {formik.errors.password}
                    </div>) : null}
                </div>
            </div>
            <div class="row mb-3">
                <label for="confirmPassword" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-3">
                    <input type="password" class="form-control" id="confirmPassword"
                        name="confirmPassword"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword} />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (<div class="text-danger">
                        {formik.errors.confirmPassword}
                    </div>) : null}
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-sm-3">
                    <button onClick={formik.handleSubmit} className="btn btn-success">Sign In</button>
                </div>
            </div>
            <h6>{JSON.stringify(formik.errors)}</h6>
        </form>

    )
};

