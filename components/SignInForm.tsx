"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./ui/input-otp";

const SignInForm: React.FC<SignInFormProps> = ({ ...props }) => {
  const [loading, setLoading] = React.useState(false);
  const otpLength = 5;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const router = useRouter();

  async function handleChange(password: string) {
    try {
      if (loading) return;
      setLoading(true);
      form.clearErrors("password");
      if (!password || password.length !== otpLength) return;

      const result = await signIn("credentials", {
        password: password,
        redirect: false,
      });

      if (result?.error) {
        throw new Error();
      }

      router.push("/investors");
      router.refresh();
    } catch (error) {
      form.setError("password", {
        message: "Invalid password code",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form {...props}>
        <FormField
          control={form.control}
          name={"password"}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">
                Enter your 5-digit password code
              </FormLabel>
              <FormControl>
                <InputOTP
                  pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                  maxLength={otpLength}
                  type="password"
                  {...field}
                  onChange={handleChange}
                >
                  <InputOTPGroup className="gap-4">
                    {[...Array(otpLength)].map((_, index) => (
                      <InputOTPSlot
                        className={`h-12 w-12 rounded-xl border border-white/35 bg-white/10 backdrop-blur-md md:h-24 md:w-24 ${form.getFieldState("password").invalid ? "border-red-600" : ""}`}
                        key={index}
                        index={index}
                      />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

interface SignInFormProps extends React.HTMLAttributes<HTMLFormElement> {
  className?: string;
}

const formSchema = z.object({
  password: z.string().min(5).max(5),
});

export default SignInForm;
