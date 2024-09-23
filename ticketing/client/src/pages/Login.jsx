import { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from '../features/auth/authSlice';


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password:''
  })

  const { email, password} = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message} = 
  useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if(isError){
      console.log("Error")
    }

    if(isSuccess || user){
      navigate('/tickets')
    }

    // dispatch(reset())

  }, [isError, isSuccess, user, message, navigate, dispatch])


  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if(!password){
      console.log('Passwords do not match')
    }else{
      const userData = {
        email,
        password
      }

      dispatch(login(userData))
    }
  }

  return (
    <>
    <section>
      Login
      <p>Please login to your account</p>
    </section>
    <section>
      <form onSubmit={onSubmit}>
        <div className='mb-3'>
          <input 
            id='email'
            type="text" 
            value={email} 
            name='email'
            className='form-control'
            onChange={onChange} 
            placeholder='Email'
          />
        </div>
        <div className='mb-3'>
          <input 
            id='password'
            type="text" 
            value={password} 
            name='password'
            className='form-control'
            onChange={onChange} 
            placeholder='Password'
          />
        </div>
        <div>
          <button className="btn btn-primary mb-3">Submit</button>
        </div>
      </form>
    </section>
    </>
  )
}

export default Login
