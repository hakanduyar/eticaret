"use client";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

import { register } from "module";
import AuthContainer from "../containers/AuthContainer";
import Heading from "../general/Heading";
import Input from "../general/Input";
import { error } from "console";
import Button from "../general/Button";
import Link from "next/link";

const RegisterClient = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <AuthContainer>
      <div className="w-full my-6 md:w-[500px] p-3 shadow-lg rounded-md">
        <Heading text="Register" center />
        <Input
          placeholder="Ad"
          type="text"
          id="name"
          register={register}
          errors={errors}
          required
        />
        <Input
          placeholder="Email"
          type="text"
          id="email"
          register={register}
          errors={errors}
          required
        />
        <Input
          placeholder="Parola"
          type="password"
          id="password"
          register={register}
          errors={errors}
          required
        />
        <Button text="Kayıt Ol" outline onClick={handleSubmit(onSubmit)} />
        <div className="text-center my-2 text-sm">
          Zaten Hesabın Varsa{" "}
          <Link className="underline" href="login">
            giriş yap{" "}
          </Link>
        </div>
        <div className="text-center my-2 font-bold text-lg">OR</div>

        <Button
          text="Google ile Üye Ol"
          icon={FcGoogle}
          outline
          onClick={() => {}}
        />
      </div>
    </AuthContainer>
  );
};

export default RegisterClient;
