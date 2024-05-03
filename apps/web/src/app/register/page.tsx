"use client"

import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import useRegister from '@/hooks/api/auth/useRegister';
import { useFormik } from 'formik';
import { validationSchema } from "./validationSchema";

const Register = () => {
  const { register } = useRegister();

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        fullName: '',
        email: '',
        password: '',
      },

      validationSchema,
      onSubmit: (values) => { 
        register(values)
      }, 
    });

  return (
    <main className="container mx-auto px-4">
      <div className="mt-16 flex justify-center">
        <Card className="w-[350px] ">
          <CardHeader className="space-y-4">
            <CardTitle className="text-center text-2xl ">
              Welcome to Blog Hub
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">

                <FormInput
                  name="fullName"
                  type="text"
                  label="Full Name"
                  placeholder="Example Name"
                  error={errors.fullName}
                  isError={!!touched.fullName && !!errors.fullName}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  value={values.fullName}
                />

                <FormInput
                  name="email"
                  error={errors.email}
                  isError={!!touched.email && !!errors.email}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  placeholder="example@mail.com"
                  type="email"
                  label="Email"
                  value={values.email}
                />

                <FormInput
                  name="password"
                  error={errors.password}
                  isError={!!touched.password && !!errors.password}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  placeholder="password"
                  type="password"
                  label="Password"
                  value={values.password}
                />

                <Button type="submit" className=" mt-6 w-full text-white">
                  Register
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Register;