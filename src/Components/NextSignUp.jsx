import React from "react";
import twitter from "../assets/twitter.png";
import { FaTwitter } from "react-icons/fa6";

const NextSignUp = () => {
  return (
    <div className="w-full">
      <div className="lg:h-[600px] sm:flex sm:flex-col items-center gap-10 lg:flex-row">
        <div className="lg:w-1/2 lg:h-full w-full h-[400px]">
          <img src={twitter} alt="twitter" className="h-full w-full" />
        </div>
        <div className="flex flex-col w-full lg:w-1/2 p-4 justify-center">
          <div>
            <FaTwitter className="text-5xl text-[#1da1f2]" />
          </div>
          <h1 className="text-6xl font-bold my-8">Happening now</h1>
          <h1 className="text-3xl font-bold my-1">Join Twitter today</h1>
          <div className="flex flex-col gap-3 my-6 w-full max-w-xs sm:max-w-none">
            <div className="flex justify-center items-center border-2 rounded-full py-2 cursor-pointer w-full sm:w-[70%]">
              <img
                className="w-6 h-6 mr-2"
                src="https://s3-alpha-sig.figma.com/img/1f3b/b6be/728025b15ccc2ae88294e7237d0b4f03?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aH2RpYWOaeNXB0GsWo26IrqaIhuYuKFu7MqANvMNsqqOU4N~8nhSAoZBCXtgE8VSBgdR0UyGZ3c4kfwepcRT3ZRTgAF3aGL533N4zTTKZNaTcE~jtywXWXYwGX3SYs~xLAkmZSKN1VCE-rA6OznYeRIyUWIOmc0VdQsfFGjb~xo2GKeAa-F~6sQL4~ko8VDRbWfeTncMAt9~eHUtmw1H2p1pggdnQn1AE0fWIIfp~GID1FZZzbVrTg9we2~dtafJt8ILnZ~P4dqT1T5FpuEJJDbKoMExYQ98WPEsQD5O--ltVfzjrThollN7XTa5eINEjoUKvx4Q80cl19ZhmfYRSA__"
                alt="Google"
              />{" "}
              <span className="font-medium">Sign up with Google</span>
            </div>
            <div className="flex justify-center items-center border-2 rounded-full py-2 cursor-pointer w-full sm:w-[70%]">
              <img
                className="w-6 h-6 mr-2"
                src="https://s3-alpha-sig.figma.com/img/b899/5ae1/7720325906073458b3a96dc92f8f7eca?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gGyO6T4x24bM4nc2yWPtDRUfqhjbvpV4KTSEcCppa23UsEqJpMjk5L0TFI5lJBhATWjmCnb628T9kxIx53en4WTbQShIb~-XqpLVujBB-JcqEYTvPqBtBMMfb0m8NDN6zixU6Ty890wcSxfsSj-4YhukfReLp7i5Vb2I2UyooXqN-yGcavyDlgjlYMCL~4ZEAJp0wNyfH1hrvM03cKfN2Nf2SJAWA~Gb6xuOva2hLZZmOAbXAo5TBO6J4KcSm3td90jBHC1AiPJM5a5C-kEWI~ZznxV2JHRqBfxYc4JJVSR~1RM170dYF4VIvc~e6TpkyTiVCMFGE3~TUjhVyZlN-Q__"
                alt="Apple"
              />{" "}
              <span className="font-medium">Sign up with Apple</span>
            </div>
            <div className="flex justify-center items-center border-2 rounded-full py-2 cursor-pointer w-full sm:w-[70%]">
              <span className="font-medium">Sign up with phone or email</span>
            </div>
          </div>
          <div>
            <p className="text-sm w-full">
              By signing up you agree to the{" "}
              <span className="text-[#1da1f2] cursor-pointer">Terms of Service</span>{" "}
              and{" "}
              <span className="text-[#1da1f2] cursor-pointer">Privacy Policy</span>
              , including{" "}
              <span className="text-[#1da1f2] cursor-pointer">Cookie Use</span>.
            </p>
          </div>
          <div>
            <p className="text-base mt-3">
              Already have an account?
              <span className="text-[#1da1f2] cursor-pointer"> Log in</span>
            </p>
          </div>
        </div>
      </div>
      <div className="h-10px mt-7 gap-2 flex justify-center lg:gap-3 text-sm  lg:items-center flex-wrap">
        <span className="cursor-pointer">About</span>
        <span className="cursor-pointer">Help Center</span>
        <span className="cursor-pointer">Terms of Service</span>
        <span className="cursor-pointer">Privacy Policy</span>
        <span className="cursor-pointer">Cookie Policy</span>
        <span className="cursor-pointer">Ads info</span>
        <span className="cursor-pointer">Blog</span>
        <span className="cursor-pointer">Careers</span>
        <span className="cursor-pointer">Brand Resources</span>
        <span className="cursor-pointer">Advertising</span>
        <span className="cursor-pointer">Marketing</span>
        <span className="cursor-pointer">Twitter for Business</span>
        <span className="cursor-pointer">Developers</span>
        <span className="cursor-pointer">Directory</span>
        <span className="cursor-pointer">Settings</span>
        <span className="cursor-pointer">© 2021 Twitter, Inc.</span>
      </div>
    </div>
  );
};

export default NextSignUp;
