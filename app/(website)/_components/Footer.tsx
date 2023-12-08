import Logo from "@/components/shared-components/logo";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <div className="fixed bottom-0 w-full  p-4 border-t shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        {/* <Logo /> */}
        <div></div>
        <div className="md:block md:w-auto flex items-center justify-between w-full space-x-4">
          <Button size="sm" variant="ghost">
            Privacy Policy{" "}
          </Button>
          <Button size="sm" variant="ghost">
            Terms Of Service{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}
