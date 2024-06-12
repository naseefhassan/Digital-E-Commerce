import { ErrorMessage, Field, Formik } from 'formik'

function Login() {
    const initialValues = {
        email:'',
        password:''
    }
  return ( 
    <Formik initialValues={initialValues} onSubmit={(values)=>{
        console.log(values);
    }}>
        {({values,handleSubmit,handleChange})=>(
            <form onSubmit={handleSubmit}>
                <Field type='email' id='email' name='email' values={values.email} onChange={handleChange} placeholder='Email' className='text-center p-1'></Field>
                <ErrorMessage name='email' component='div' className='error'/>

                <Field type='password' id='password' name='password' values={values.password} onChange={handleChange} placeholder='Password' className='text-center p-1'></Field>
                <ErrorMessage name='password' component='div' className='error'/>

                <button type='submit'>Login</button>
            </form>
        )}
    </Formik>
  )
}

export default Login