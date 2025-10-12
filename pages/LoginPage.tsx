import React from "react"
import LoginForm from "../components/ui/LoginForm"

const LoginPage = () => {
  const handleSubmit = (values: { email: string; password: string; remember: boolean }) => {
    // placeholder: replace with real auth call
    console.log("Login submitted", values)
    alert(`Signed in as ${values.email}`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Enter your credentials to access the dashboard.</p>
        </div>

        <div className="bg-white py-8 px-6 shadow rounded-lg">
          <LoginForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
