import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import VerificationInput from "react-verification-input";
// import { useOtpVerificationMutation } from "../../features/auth/authApi";

import { toast } from "@/components/ui/use-toast";
import { useOtpVerificationMutation } from "@/features/auth/authApi";
import { MailIcon } from "lucide-react";
import logo from "../../assets/logo.png";

const EmailVerification = () => {
  const [otpCode, setOtpCode] = useState("");

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const email = query.get("email");
  const navigate = useNavigate();

  const [otpVerification, { isLoading, data, isSuccess, isError, error }] =
    useOtpVerificationMutation();

  const handleSubmit = () => {
    otpVerification({ otpCode });
  };

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: data?.message,
      });
      navigate("/");
    }
    if (isError) {
      toast({
        title: error?.data?.message,
      });
    }
  }, [isSuccess, isError]);

  return (
    <div className="h-screen overflow-y-scroll bg-white pb-10">
      <div className="mx-auto max-w-[360px] pt-[96px]">
        <div className="mb-[32px] text-center">
          <img className="mx-auto mb-[32px] h-[40px]" src={logo} alt="logo" />
          <div className="mb-[24px] flex justify-center">
            <MailIcon />
          </div>
          <h4 className="mb-[12px] text-[30px] font-semibold leading-[38px] text-[#101828]">
            Check your email
          </h4>
          <p className="text-[#475467]">
            We sent a code authentication to {email}
          </p>
        </div>
        {/*------- Form Start ------- */}
        <div>
          <VerificationInput
            length={4}
            validChars="0-9"
            placeholder=""
            autoFocus
            onChange={(val: any) => setOtpCode(val)}
            classNames={{
              container: "container mb-[64px]",
              character:
                "w-[80px] h-[80px] text-[48px] leading-[80px] text-primary rounded-[8px] border-[2px] border-primary",
              characterInactive: "bg-transparent",
              characterSelected:
                "mb-0 outline-[#E8DEFB] border-[2px] border-primary",
            }}
          />
          <button
            onClick={handleSubmit}
            className={`${
              isLoading && "opacity-50"
            } my-[32px] block w-full rounded-lg border-[1px] border-primary bg-primary py-[10px] font-semibold text-white`}
            disabled={isLoading || otpCode?.length < 4}
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
          <div className="text-center">
            <p className="mb-[32px] text-[14px] leading-[20px] text-[#475467]">
              Didn’t receive the email?{" "}
              <button className="font-semibold text-primary">
                Click to resend
              </button>
            </p>
            <div className="flex justify-center">
              <Link to="/auth/login">
                <button className="flex items-center justify-center text-[14px] font-semibold leading-[20px] text-[#475467]">
                  Back to log in
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
