"use client"
import AuthForm from '@/components/AuthForm'
import { signInSchema } from '@/lib/validation'
import React from 'react'

const page = () => {
  return (
    <AuthForm 
        type="SIGN-IN"
        schema= {signInSchema}
        defaultValues={{
            email: "",
            password: ""
        }}
        onSubmit={async () => ({ success: true })}
    />
  )
}

export default page
