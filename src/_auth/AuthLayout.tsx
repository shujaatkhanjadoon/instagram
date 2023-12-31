import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = ()=> {
    const isAuthenticated = false
    return(
        <>
        {isAuthenticated ? (
            <Navigate to='/' />
        ) : (
            <>
            <section className="flex flex-1 justify-center items-center py-10 flex-col">
                <Outlet />
            </section>
            <img
            src='/assets/images/side-img.svg'
            alt='bg-image'
            className="hidden md:block object-cover h-screen w-1/2 bg-no-repeat"
             />
            </>
        )
        }
        </>
    )
}

export default AuthLayout