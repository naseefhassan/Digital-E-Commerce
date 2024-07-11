import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router"
import { selectToken, setToken } from "../Redux/Jwt"

function PrivateRoute() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = useSelector(selectToken)

  useEffect(()=>{

    const localJwt = localStorage.getItem('Jwt')

    if(localJwt && ! token){
      dispatch(setToken(localJwt))
      navigate('/')
      console.log('1');
    }

    if(!localJwt && !token){
      navigate('/auth/login')
      console.log('2');
    }

  },[navigate,dispatch,token])
  return (
    <>
    {token && <Outlet/>}
    </>
  )
}

export default PrivateRoute