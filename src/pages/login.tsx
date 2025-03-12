import FormLogin from "../components/fragments/FormLogin";
import AuthLayout from "../components/layouts/AuthLayouts";
import { Fragment } from "react";
import React from "react";

const LoginPage = () => {
    return (
        <Fragment>
            <div className="bg-gradient-to-b from-[#a28bc7] to-[#d4cbe7]">
                <div className="justify-center min-h-screen items-center grid md:grid-cols-2 md:gap-4 lg:mx-32 ">
                    <div className="w-0 md:w-full">
                        <img src="/image/foto-2.jpg" alt=""
                        className="md:w-[340px] md:h-[520px] lg:w-[430px] rounded-xl"/>
                    </div>
                    <AuthLayout>
                        <p className='text-lg text-center font-normal font-roboto mb-12'>Selamat Datang Kembali di IGNIT!</p> 
                        <FormLogin/>
                    </AuthLayout>
                </div>
            </div>
        </Fragment>
    )
}

export default LoginPage;