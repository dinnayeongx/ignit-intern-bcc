import FormLogin from "../components/fragments/formLogin.tsx";
import AuthLayout from "../components/fragments/authLayouts";
import { Fragment } from "react";
import React from "react";

const LoginPage = () => {
    return (
        <Fragment>
            <div className="bg-gradient-to-b from-[#a28bc7] to-[#d4cbe7]">
                <div className="justify-center min-h-screen items-center grid md:grid-cols-2 md:gap-2 lg:mx-auto md:px-[110px]">
                    <div className="w-0 md:w-full">
                        <img src="/image/foto-2.jpg" alt=""
                        className="md:w-[340px] md:h-[545px] lg:w-[465px] rounded-xl mx-auto flex"/>
                    </div>
                    <AuthLayout>
                        <p className='text-lg text-center font-normal font-roboto mb-12'>Selamat Datang Kembali di IGNIT!</p> 
                        <FormLogin />
                    </AuthLayout>
                </div>
            </div>
        </Fragment>
    )
}

export default LoginPage;