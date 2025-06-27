"use client";

import { LogoIcon, GoogleIcon } from "@/components/common/ui/LogoIcons";
import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="h-screen flex items-center justify-center p-8 flex-col md:flex-row gap-8 ">
      <div className="hidden lg:flex w-1/2 items-center justify-center">
        <LogoIcon size={200} />
      </div>
      <div className="lg:w-1/2 flex flex-col gap-4">
        <SignUp.Root>
          <SignUp.Step name="start" className="flex flex-col gap-4 relative">
            <Clerk.Loading>
              {(isGlobalLoading) => (
                <>
                  <Clerk.Connection
                    name="google"
                    className="bg-white rounded-full p-2 text-black w-72 flex items-center justify-center gap-2 font-bold disabled:opacity-50"
                  >
                    <GoogleIcon />
                    Sign in with Google
                  </Clerk.Connection>

                  <div className="flex flex-col gap-4">
                    {/* Divider */}
                    <div className="w-72 flex items-center gap-4">
                      <div className="h-px bg-borderGray flex-grow"></div>
                      {/* <span className="text-textGrayLight text-sm">or</span> */}
                      {/* <div className="h-px bg-borderGray flex-grow"></div> */}
                    </div>

                    {/* Username Field */}
                    <Clerk.Field
                      name="username"
                      className="flex flex-col gap-2"
                    >
                      <Clerk.Input
                        className="py-2 px-6 rounded-full text-black w-72 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                        placeholder="Username"
                      />
                      <Clerk.FieldError className="text-red-300 text-sm" />
                    </Clerk.Field>

                    {/* Email Field */}
                    <Clerk.Field
                      name="emailAddress"
                      className="flex flex-col gap-2"
                    >
                      <Clerk.Input
                        className="py-2 px-6 rounded-full text-black w-72 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                        placeholder="E-mail"
                      />
                      <Clerk.FieldError className="text-red-300 text-sm" />
                    </Clerk.Field>

                    {/* Password Field */}
                    <Clerk.Field
                      name="password"
                      className="flex flex-col gap-2"
                    >
                      <Clerk.Input
                        className="py-2 px-6 rounded-full text-black w-72 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                        placeholder="Password"
                      />
                      <Clerk.FieldError className="text-red-300 text-sm" />
                    </Clerk.Field>

                    <SignUp.Captcha />

                    {/* Sign Up Button */}
                    <SignUp.Action
                      submit
                      className="bg-inputGray rounded-full p-2 text-white font-bold w-72 text-center hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Clerk.Loading>
                        {(isLoading) => (
                          <div className="flex items-center justify-center gap-2">
                            {isLoading && (
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            )}
                            {isLoading ? "Creating account..." : "Sign up"}
                          </div>
                        )}
                      </Clerk.Loading>
                    </SignUp.Action>
                  </div>
                </>
              )}
            </Clerk.Loading>
          </SignUp.Step>

          <SignUp.Step name="continue" className="flex flex-col gap-4">
            <Clerk.Field name="username">
              <Clerk.Input
                placeholder="username"
                className="py-2 px-6 rounded-full text-black w-72 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <Clerk.FieldError className="text-red-300 text-sm" />
            </Clerk.Field>

            <SignUp.Action
              submit
              className="w-72 text-center text-inputGray underline hover:text-opacity-80 transition-colors disabled:opacity-50"
            >
              <Clerk.Loading>
                {(isLoading) => (
                  <div className="flex items-center justify-center gap-2">
                    {isLoading && (
                      <div className="w-3 h-3 border border-inputGray border-t-transparent rounded-full animate-spin"></div>
                    )}
                    {isLoading ? "Processing..." : "Continue"}
                  </div>
                )}
              </Clerk.Loading>
            </SignUp.Action>
          </SignUp.Step>

          <SignUp.Step name="verifications">
            <SignUp.Strategy name="email_code">
              <h1 className="text-sm mb-2">Check your e-mail</h1>
              <Clerk.Field name="code" className="flex flex-col gap-4">
                <Clerk.Input
                  placeholder="Verification code"
                  className="py-2 px-6 rounded-full text-black w-72 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <Clerk.FieldError className="text-red-300 text-sm" />
              </Clerk.Field>
              <SignUp.Action
                submit
                className="mt-2 underline text-iconBlue text-sm hover:text-opacity-80 transition-colors disabled:opacity-50"
              >
                <Clerk.Loading>
                  {(isLoading) => (
                    <span className="flex items-center justify-center gap-1">
                      {isLoading && (
                        <div className="w-3 h-3 border border-iconBlue border-t-transparent rounded-full animate-spin"></div>
                      )}
                      {isLoading ? "Verifying..." : "Verify"}
                    </span>
                  )}
                </Clerk.Loading>
              </SignUp.Action>
            </SignUp.Strategy>
          </SignUp.Step>

         
          

          {/* Divider */}
          <div className="w-72 flex items-center gap-4">
            <div className="h-px bg-borderGray flex-grow"></div>
            <span className="text-textGrayLight">or</span>
            <div className="h-px bg-borderGray flex-grow"></div>
          </div>

          {/* Sign In Link */}
          <Link
            href="/sign-in"
            className="bg-inputGray rounded-full p-2 text-white font-bold w-72 text-center hover:bg-opacity-90 transition-colors"
          >
            Already have an account?
          </Link>
        </SignUp.Root>
      </div>
    </div>
  );
};

export default SignUpPage;
