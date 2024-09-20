import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-12">Contact Us</h1>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-16 lg:gap-24 relative">
        <div className="flex-1 max-w-sm">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Mail className="mr-2" /> Email Us
          </h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Email us at{" "}
                <span className="font-bold underline">rajscape@gmail.com</span>
              </label>
            </div>
          </form>
        </div>
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2"></div>
        <div className="flex-1 max-w-sm">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Phone className="mr-2" /> Call Us
          </h2>
          <p className="mb-6 text-lg">
            We're available Monday to Friday, 9am to 5pm.
          </p>
          <p className="text-2xl font-semibold mb-6">+1 (224) 558-8478</p>
        </div>
      </div>
    </div>
  );
}
