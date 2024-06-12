import { ErrorMessage, Field, Formik } from 'formik'
import { Link } from 'react-router-dom';

function Login() {
    const initialValues = {
        email:'',
        password:''
    }
  return ( 
    <Formik initialValues={initialValues} onSubmit={(values)=>{
        console.log(values);
    }}>
        {({values,handleSubmit,handleChange,handleBlur})=>(
           <div className="flex justify-center items-center min-h-screen ">
           <div className="w-7/12 m-auto  flex h-[400px] shadow-xl rounded-xl ">
           <div className=" w-1/2 bg-blue-600 rounded-tl-xl rounded-bl-xl">
            <h1 className="text-center text-3xl text-white font-bold p-4">Looks like you're new here!</h1>
            <h1 className="p-4 text-gray-300 font-mono ">"Get access to your Orders, Wishlist and Recommendations"</h1>
           </div>
           <form onSubmit={handleSubmit} className=" relative w-1/2 flex flex-col gap-5 p-5">
               <h1 className="text-center text-2xl font-bold">LOGIN</h1>

               <Field type='email' id='email' name='email' values={values.email} onChange={handleChange}  onBlur={handleBlur} placeholder='Email' className='p-1 text-center rounded-sm border-2'></Field>
               <ErrorMessage name="email" component='div' className="error"/>

               <Field type='password' id='password' name='password' values={values.password} onChange={handleChange}  onBlur={handleBlur} placeholder='Password' className='p-1 text-center rounded-sm border-2'></Field>
               <ErrorMessage name="password" component='div' className="error"/>

               <button type="submit" className="bg-blue-600 p-1 font-mono">Login</button>
               <p className="text-[12px] text-center absolute bottom-4 left-20">Are you New to Digital? please  
                   <Link to={'/auth/signup'}><span className="text-red-600 cursor-pointer"> Singup</span></Link>
               </p>
           </form>
           </div>
       </div>
        )}
    </Formik>
  )
}

export default Login