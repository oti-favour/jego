import FormEnquiryButton from "@/components/FormEnquiryButton";
import GoBack from "@/components/GoBack";
import SignInForm from "@/components/SignInForm";
import { Caption, DynamicHeading } from "@/components/Typography";

function SignIn() {
  return (
    <div className="min-h-svh w-full bg-black">
      <div className="flex h-full min-h-svh w-full flex-col bg-ray bg-cover bg-right bg-no-repeat">
        <div className="flex h-full min-h-svh w-full flex-col lg:container">
          <GoBack href="/" className="mt-8 text-white lg:mt-12" />
          <div className="grid h-full w-full flex-1 place-items-center text-white">
            <div className="flex h-full flex-col items-center justify-around">
              <div className="flex h-full flex-col items-center justify-center">
                <Caption>welcome to the</Caption>
                <DynamicHeading
                  level="h1"
                  className="max-w-screen-sm text-center normal-case text-white lg:max-w-screen-lg"
                >
                  JéGO{" "}
                  <span className="uppercase text-brightTurquoise">
                    INVESTOR{" "}
                  </span>
                  PORTAL
                </DynamicHeading>
                <div className="mt-12">
                  <SignInForm />
                </div>
              </div>
              <div className="basis-1/4">
                <FormEnquiryButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
