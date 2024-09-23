import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { register, reset } from '../features/auth/authSlice';

const Register = () => {
  const [formData, setFormData] = useState({
    name:'',
    email: '',
    password:'',
    password2:''
  })

  const { name, email, password, password2 } = formData;

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user, isLoading, isError, isSuccess, message } = 
  useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if(isError){
      console.log("Error")
    }

    if(isSuccess || user){
      navigate('/')
    }

    dispatch(reset())

  }, [isError, isSuccess, user, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if(password !== password2){
      console.log('Passwords do not match')
    }else{
      const userData = {
        name,
        email,
        password
      }

      dispatch(register(userData))
    }
  }

  return (
    <>
    <section>
      Register
      <p>Please create an account</p>
    </section>
    <section>
      <form onSubmit={onSubmit}>
        <div className='mb-3'>
          <input 
            id='name'
            type="text" 
            value={name} 
            name='name'
            className='form-control'
            onChange={onChange} 
            placeholder='Name'
          />
        </div>
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
        <div className='mb-3'>
          <input 
            id='password2'
            type="text" 
            value={password2} 
            name='password2'
            className='form-control'
            onChange={onChange} 
            placeholder='Confirm Password'
          />
        </div>
        <div className='mb-3'>
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>

    </section>
    </>
  )
}

export default Register
