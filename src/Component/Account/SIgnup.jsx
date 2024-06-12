import { ErrorMessage, Field, Formik } from "formik"

function SIgnup() {
    const initialValues={
        username:'',
        email:'',
        password:''
    }
    
  return (
    <Formik initialValues={initialValues} onSubmit={(values)=>{
        console.log(values,'hlo');
    }}>
        {({values, handleChange, handleBlur,handleSubmit})=>(
            <form onSubmit={handleSubmit}>
                <Field type='text' id='username' name='username' values={values.username} onChange={handleChange}  onBlur={handleBlur} placeholder='Username' className='p-1 text-center'></Field>
                <ErrorMessage name="username" component='div' className="error"/>

                <Field type='email' id='email' name='email' values={values.email} onChange={handleChange}  onBlur={handleBlur} placeholder='Email' className='p-1 text-center'></Field>
                <ErrorMessage name="email" component='div' className="error"/>

                <Field type='password' id='password' name='password' values={values.password} onChange={handleChange}  onBlur={handleBlur} placeholder='Password' className='p-1 text-center'></Field>
                <ErrorMessage name="password" component='div' className="error"/>

                <button type="submit">Signup</button>
            </form>
        )}
    </Formik>
  )
}

export default SIgnup