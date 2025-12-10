import { UI_CONSTANTS } from '../constants/colors'

export default function SignIn() {
  return (
    <div className="pt-16 min-h-screen" style={{ backgroundColor: UI_CONSTANTS.WHITE }}>
      <div className="max-w-md mx-auto px-4 py-20">
        <div className="text-center mb-8">
          <h1 style={{ color: UI_CONSTANTS.DARK }} className="text-3xl font-bold mb-4">
            Welcome back
          </h1>
          <p style={{ color: UI_CONSTANTS.DARK }} className="opacity-70">
            Sign in to your KIAQ account
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label style={{ color: UI_CONSTANTS.DARK }} className="block text-sm font-medium mb-2">
              Email address
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label style={{ color: UI_CONSTANTS.DARK }} className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span style={{ color: UI_CONSTANTS.DARK }} className="text-sm">Remember me</span>
            </label>
            <a href="#" style={{ color: UI_CONSTANTS.PRIMARY }} className="text-sm hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            style={{ backgroundColor: UI_CONSTANTS.PRIMARY, color: UI_CONSTANTS.WHITE }}
            className="w-full py-3 rounded-lg font-semibold hover:opacity-90"
          >
            Sign In
          </button>
        </form>

        <div className="text-center mt-8">
          <p style={{ color: UI_CONSTANTS.DARK }} className="opacity-70">
            Don't have an account?{' '}
            <a href="#" style={{ color: UI_CONSTANTS.PRIMARY }} className="font-semibold hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}