"use client";

import { GoogleIcon, LogoIcon } from "@/components/common/icons/LogoIcons";
import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="h-screen flex items-center justify-center p-8 flex-col md:flex-row gap-8 ">
      {/* LOGO */}
      <div className=" hidden lg:flex w-1/2 items-center justify-center">
        <LogoIcon size={200} />
      </div>
      {/* FORM */}
      <div className=" lg:w-1/2 flex flex-col gap-4">
        <SignIn.Root>

          {/* LOGIN WITH GOOGLE */}
          <Clerk.Connection
            name="google"
            className="bg-white rounded-full p-2 text-black w-72 flex items-center justify-center gap-2 font-bold disabled:opacity-50"
          >
            <GoogleIcon />
            Sign in with Google
          </Clerk.Connection>

          {/* LOGIN WITH CREDENTIALS */}
          <SignIn.Step name="start">
            <Clerk.Field name="identifier" className="flex flex-col gap-2">
              <Clerk.Input
                placeholder="john@gmail.com"
                className="py-2 px-6 rounded-full text-black w-72 placeholder:text-sm"
              />
              <Clerk.FieldError className="text-red-300 text-sm" />
            </Clerk.Field>
            <SignIn.Action
              submit
                className="mt-4 bg-inputGray rounded-full p-2 text-white font-bold w-72 text-center hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Clerk.Loading>
                {(isLoading) => (
                  <div className="flex items-center justify-center gap-2">
                    {isLoading && (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    )}
                    {isLoading ? "Checking..." : "Continue"}
                  </div>
                )}
              </Clerk.Loading>
            </SignIn.Action>
          </SignIn.Step>

          {/* VERIFICATIONS */}
          <SignIn.Step name="verifications">
            <SignIn.Strategy name="password">
              <Clerk.Field name="password" className="flex flex-col gap-2">
                <Clerk.Input
                  placeholder="password"
                  className="py-2 px-6 rounded-full text-black w-72 placeholder:text-sm"
                />
                <Clerk.FieldError className="text-red-300 text-sm" />
              </Clerk.Field>
              <div className="flex flex-col gap-2">
                <SignIn.Action
                  submit
                    className="mt-4 bg-inputGray rounded-full p-2 text-white font-bold w-72 text-center hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Clerk.Loading>
                    {(isLoading) => (
                      <div className="flex items-center justify-center gap-2">
                        {isLoading && (
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        )}
                        {isLoading ? "Signing in..." : "Continue"}
                      </div>
                    )}
                  </Clerk.Loading>
                </SignIn.Action>
                <SignIn.Action
                  navigate="forgot-password"
                  className="mt-2 text-sm underline w-72 text-center "
                >
                  Forgot Password?
                </SignIn.Action>
              </div>
            </SignIn.Strategy>
            <SignIn.Strategy name="reset_password_email_code">
              <p className="text-sm mb-2">
                We sent a code to <SignIn.SafeIdentifier />.
              </p>

              <Clerk.Field name="code" className="flex flex-col gap-2">
                <Clerk.Input
                  className="py-2 px-6 rounded-full text-black w-72 placeholder:text-sm"
                  placeholder="Verification Code"
                />
                <Clerk.FieldError className="text-red-300 text-sm" />
              </Clerk.Field>

              <SignIn.Action
                submit
                  className="mt-4 bg-inputGray rounded-full p-2 text-white font-bold w-72 text-center hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Clerk.Loading>
                  {(isLoading) => (
                    <div className="flex items-center justify-center gap-2">
                      {isLoading && (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      )}
                      {isLoading ? "Verifying..." : "Continue"}
                    </div>
                  )}
                </Clerk.Loading>
              </SignIn.Action>
            </SignIn.Strategy>
          </SignIn.Step>

          {/* FORGOT PASSWORD */}
          <SignIn.Step
            name="forgot-password"
            className="flex justify-between w-72 text-sm"
          >
            <SignIn.SupportedStrategy name="reset_password_email_code">
              <Clerk.Loading>
                {(isLoading) => (
                  <span className="underline text-iconBlue flex items-center gap-1">
                    {isLoading && (
                      <div className="w-3 h-3 border border-iconBlue border-t-transparent rounded-full animate-spin"></div>
                    )}
                    {isLoading ? "Sending..." : "Reset password"}
                  </span>
                )}
              </Clerk.Loading>
            </SignIn.SupportedStrategy>

            <SignIn.Action navigate="previous" className="underline">
              Go back
            </SignIn.Action>
          </SignIn.Step>

          {/* RESET PASSWORD */}
          <SignIn.Step name="reset-password">
            <h1>Reset your password</h1>

            <Clerk.Field name="password">
              <Clerk.Label>New password</Clerk.Label>
              <Clerk.Input />
              <Clerk.FieldError />
            </Clerk.Field>

            <Clerk.Field name="confirmPassword">
              <Clerk.Label>Confirm password</Clerk.Label>
              <Clerk.Input />
              <Clerk.FieldError />
            </Clerk.Field>

            <SignIn.Action submit>
              <Clerk.Loading>
                {(isLoading) => (
                  <div className="flex items-center justify-center gap-2">
                    {isLoading && (
                      <div className="w-4 h-4 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
                    )}
                    {isLoading ? "Resetting..." : "Reset password"}
                  </div>
                )}
              </Clerk.Loading>
            </SignIn.Action>
          </SignIn.Step>

          {/* OR SIGN UP */}
          <div className="w-72 flex items-center gap-4">
            <div className="h-px bg-borderGray flex-grow"></div>
            <span className="text-textGrayLight">or</span>
            <div className="h-px bg-borderGray flex-grow"></div>
          </div>
          <Link
            href="/sign-up"
            className="bg-inputGray rounded-full p-2 text-white font-bold w-72 text-center"
          >
            Create Account
          </Link>

        </SignIn.Root>
      </div>
    </div>
  );
}