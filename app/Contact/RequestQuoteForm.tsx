"use client";
import { useRef, useState } from "react";
import { getTheData } from "../utils/getFormData";
import { validateForm } from "../utils/validateData";
import emailjs from "@emailjs/browser";

function RequestQuoteForm() {
  const [error, setError] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   

    const data = getTheData(formRef);

    const validationError = validateForm(data);
    if (validationError) {
      setError(validationError);
      return;
    }
    setLoading(true);

    setError("");
    setSuccess(false);
    const RFQData = {
      name: data?.name,
      company_name: data?.company_name,
      email: data?.email,
      phone: data?.phone,
      message: data?.project_requirements,
      subject: data?.subject,
    };
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      RFQData,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
    );

    if (response.status === 200) {
      setLoading(false);
      formRef.current?.reset();
      setSuccess(true);
      return;
    }
  };

  const textStyle = `outline-none border text-black border-gray-300 rounded-md py-2 px-4 focus:ring-2  focus:ring-blue-500 ${error ? "focus:ring-red-500 border-red-500 focus:ring-2 " : ""}`;
  return (
    <div className="w-full lg:w-[600px] bg-gray-100 p-8 rounded-lg shadow-md">
      <h1 className="text-blue-950 pb-2 text-2xl font-bold text-center">
        {" "}
        Request a Quote{" "}
      </h1>
      {error && <p className="text-2xl text-center text-red-500">{error}</p>}
      {success && (
        <p className="text-2xl text-center text-green-500">
          Request submitted successfully!
        </p>
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <div className="w-full  flex-1 flex flex-col lg:flex-row lg:justify-between px-4 gap-3">
          <input
            type="text"
            name="name"
            placeholder="Enter your full name: "
            className={textStyle}
          />
          <input
            type="text"
            name="company_name"
            placeholder="Company Name: "
            className={textStyle}
          />
        </div>
        <div className="w-full flex flex-col lg:flex-row lg:justify-between px-4 gap-3">
          <input
            type="text"
            name="email"
            placeholder="Email: "
            className={textStyle}
          />
          <input
            type="text"
            name="phone"
            placeholder=" Phone Number: "
            className={textStyle}
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder=" What are you looking for? "
          className={textStyle}
        />

        <textarea
          name="project_requirements"
          placeholder=" Describe your project requirements: "
          className={textStyle}
          rows={4}
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className={`bg-blue-600 flex flex-row gap-3 justify-center items-center text-white py-2 px-4 rounded-md hover:bg-blue-800 focus:outline-none cursor-pointer  ${loading && "opacity-50 cursor-not-allowed"}`}
        >
          {loading && (
            <div className="animate-spin border w-5 h-5  rounded-full border-blue-900" />
          )}
          {loading ? "Sending" : "Send message"}
        </button>
      </form>
    </div>
  );
}

export default RequestQuoteForm;
