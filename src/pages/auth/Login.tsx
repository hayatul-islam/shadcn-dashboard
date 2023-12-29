import { toast } from "@/components/ui/use-toast";
import { useLoginMutation } from "@/features/auth/authApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading, isSuccess, isError, data }] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    login({ email, password });
  };

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: data?.message,
      });
      navigate(`/auth/email-verification?email=${email}`);
    }
    if (isError) {
      toast({
        title: "Something went wrong!",
      });
    }
  }, [isSuccess, isError]);

  return (
    <div className="h-screen bg-white">
      <div className="mx-auto max-w-[360px] pt-[96px]">
        <div className="mb-[32px] text-center">
          <img className="mx-auto mb-[64px] h-[40px]" src={logo} alt="logo" />
          <h4 className="mb-[12px] text-[30px] font-semibold leading-[38px] text-[#101828]">
            Log in for Admin
          </h4>
          <p className="text-[#475467]">
            Welcome back! Please enter your details.
          </p>
        </div>
        {/* ------- Form start ------- */}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            className="w-full rounded-t-lg border-[1px] border-[#D0D5DD] p-[10px_14px] placeholder:text-[#667085] focus:outline-none"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="mb-[24px] w-full rounded-b-lg border-[1px] border-t-0 border-[#D0D5DD] p-[10px_14px] placeholder:text-[#667085] focus:outline-none"
            placeholder="••••••••"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className={`${
              isLoading && "opacity-50"
            } w-full rounded-lg border-[1px] border-primary bg-primary py-[10px] font-semibold text-white`}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
