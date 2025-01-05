import { useForm, SubmitHandler } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import feed from '../assets/Feed.png';

type LoginInputs = {
  email: string;
  password: string;
};

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    console.log(data);
    toast.success("Login Successful");
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        {/* Logo and Title */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex">
            <img src={feed} alt="Logo" className="h-8 w-8 mb-2" />
            <h1 className="text-2xl font-bold text-[#073C47]">fettyInventory</h1>
          </div>
          
          <h2 className="text-2xl font-bold mt-2">Login</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email or Username</label>
            <input
              {...register('email', { required: "Please enter your email" })}
              type="email"
              placeholder="Enter email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#073C47] focus:ring-[#073C47]"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              {...register('password', {
                required: "Please enter your password",
                minLength: {
                  value: 5,
                  message: "Password must be at least 5 characters"
                }
              })}
              type="password"
              placeholder="Enter password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#073C47] focus:ring-[#073C47]"
            />
            
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
            )}
          </div>

          {/* Forgot Password */}
          <div className="flex justify-start text-sm">
            <a href="#" className="text-[#073C47] hover:underline">Forgot Password? <span className="font-bold">Click here</span></a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#073C47] text-white py-2 px-4 rounded-md hover:bg-[#052C34] transition-colors"
          >
            Login
          </button>
        </form>

        {/* Toast Notifications */}
        <Toaster position="top-right" />
      </div>
    </div>
  );
}

export default Login;
