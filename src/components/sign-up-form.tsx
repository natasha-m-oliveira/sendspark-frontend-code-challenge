'use client'

import Button from '@/components/button'
import Input from '@/components/input'
import { Formik, Field, Form } from 'formik'
import * as yup from 'yup'
import { ErrorMessage } from './error-message'

const signUpSchema = yup.object().shape({
  firstName: yup.string().max(120).required().label('first name'),
  lastName: yup.string().max(120).required().label('last name'),
  company: yup.string().max(120).required(),
  jobTitle: yup.string().max(120).optional().label('job title'),
  workEmail: yup.string().email().required().label('word email'),
  password: yup
    .string()
    .min(8)
    .max(120)
    .matches(/[A-Z]/, 'password must have at least 1 uppercase letter')
    .matches(/[0-9]/, 'password must have at least 1 digit')
    .required(),
})

const signUpFormInitialValues: yup.InferType<typeof signUpSchema> = {
  firstName: '',
  lastName: '',
  company: '',
  jobTitle: '',
  workEmail: '',
  password: '',
}

export function SignUpForm() {
  async function handleSignUp(values: yup.InferType<typeof signUpSchema>) {
    console.log(values)
  }

  return (
    <Formik
      initialValues={signUpFormInitialValues}
      validationSchema={signUpSchema}
      onSubmit={handleSignUp}
    >
      {({ errors, touched }) => (
        <Form className="mt-10 grid md:grid-cols-2 gap-y-4 gap-x-2 md:min-w-[580px]">
          <div>
            <label htmlFor="firstName">First name</label>
            <Field
              as={Input}
              error={touched.firstName && errors.firstName ? 'true' : 'false'}
              id="firstName"
              name="firstName"
              className="mt-2"
            />
            {touched.firstName && errors.firstName && (
              <ErrorMessage>{errors.firstName}</ErrorMessage>
            )}
          </div>

          <div>
            <label htmlFor="lastName">Last name</label>
            <Field
              as={Input}
              error={touched.lastName && errors.lastName ? 'true' : 'false'}
              id="lastName"
              name="lastName"
              className="mt-2"
            />
            {touched.lastName && errors.lastName && (
              <ErrorMessage>{errors.lastName}</ErrorMessage>
            )}
          </div>

          <div className="col-span-full">
            <label htmlFor="company">Company</label>
            <Field
              as={Input}
              error={touched.company && errors.company ? 'true' : 'false'}
              id="company"
              name="company"
              className="mt-2"
            />
            {touched.company && errors.company && (
              <ErrorMessage>{errors.company}</ErrorMessage>
            )}
          </div>

          <div className="col-span-full">
            <label htmlFor="jobTitle">Job title (optional)</label>
            <Field
              as={Input}
              error={touched.jobTitle && errors.jobTitle ? 'true' : 'false'}
              id="jobTitle"
              name="jobTitle"
              className="mt-2"
            />
            {touched.jobTitle && errors.jobTitle && (
              <ErrorMessage>{errors.jobTitle}</ErrorMessage>
            )}
          </div>

          <div className="col-span-full">
            <label htmlFor="workEmail">Work Email</label>
            <Field
              as={Input}
              error={touched.workEmail && errors.workEmail ? 'true' : 'false'}
              id="workEmail"
              name="workEmail"
              className="mt-2"
            />
            {touched.workEmail && errors.workEmail && (
              <ErrorMessage>{errors.workEmail}</ErrorMessage>
            )}
          </div>

          <div className="col-span-full">
            <label htmlFor="password">Create Password</label>
            <Field
              as={Input}
              type="password"
              error={touched.password && errors.password ? 'true' : 'false'}
              id="password"
              name="password"
              className="mt-2"
            />
            {touched.password && errors.password && (
              <ErrorMessage>{errors.password}</ErrorMessage>
            )}
          </div>

          <Button type="submit" className="col-span-full">
            Continue
          </Button>
        </Form>
      )}
    </Formik>
  )
}
