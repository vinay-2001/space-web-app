import React from "react";
import { useEffect } from "react";
import {useForm} from 'react-hook-form'
import {Form,Button} from 'react-bootstrap'
import {MdLogin} from 'react-icons/md';
import { useSelector,useDispatch } from "react-redux";
import { userLogin } from "../slices/userSlice";
import { Navigate } from "react-router-dom";
import {useNavigate} from "react-router-dom"

function Login(){
    let navigate = useNavigate();
    const{
        register,handleSubmit,formState:{errors}
    }=useForm();
    let {userObj,isError,isLoading,isSuccess,errMsg}=useSelector((state)=>state.user);
    let dispatch=useDispatch();
    const onFormSubmit=(userCredentialsObject)=>{
        console.log(userCredentialsObject)
        if (userCredentialsObject.userType === 'user') {
            dispatch(userLogin(userCredentialsObject));
        }
        if (userCredentialsObject.userType === "admin") {
            alert("Admin devoloplment in progress...");
            // dispatch(userLogin(userCredentialsObject));
          }
        // navigate("/afterlogin")
    };
    useEffect(() => {
        if (isSuccess) {
          navigate("/afterlogin");
        }
      }, [isSuccess, isError]);

    return(
        <div>
            <p className="display-2 text-center text-primary">Login</p>
            <div className="row  ">
                <div className="col-12 col-sm-8 col-md-6  mx-auto">
                <Form onSubmit={handleSubmit(onFormSubmit)}>
                    <Form.Group className="mb-3">
                    <Form.Label>Select type of User</Form.Label> <br />
                    {/* user type */}
                    <Form.Check inline type="radio" id="user">
                        <Form.Check.Input
                        type="radio"
                        value="user"
                        {...register("userType", { required: true })}
                        />
                        <Form.Check.Label>User</Form.Check.Label>
                    </Form.Check>
                    <Form.Check inline type="radio" id="admin">
                        <Form.Check.Input
                        type="radio"
                        value="admin"
                        {...register("userType", { required: true })}
                        />
                        <Form.Check.Label>Admin</Form.Check.Label>
                    </Form.Check>
                    </Form.Group>
                    {/* username */}
                    <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Username"
                        {...register("username", { required: true })}
                    />
                    {/* validation error message for username */}
                    {errors.username && (
                        <p className="text-danger">* Username is required</p>
                    )}
                    </Form.Group>

                    {/* password */}
                    <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        {...register("password", { required: true })}
                    />
                    {/* validation error message for password */}
                    {errors.password && (
                        <p className="text-danger">* Password is required</p>
                    )}
                    </Form.Group>

                    <Button variant="secondary" type="submit">
                    Login
                    </Button>
                </Form>
                </div>
            </div>
        </div>
    )
}
export default Login;