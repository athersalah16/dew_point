import BaseSection from "../components/BaseSection";
import HowCanWeHelp from "./HowCanWeHelp";
import RequestQuoteForm from "./RequestQuoteForm";
import GetInTouch from "./GetInTouch";
import ChatOnWhatsappButton from "./ChatOnWhatsappButton";

function ContactSection() {
  return (
    <BaseSection title="contact" sectionID="contact">
      <div className="flex flex-col gap-6 ">
        <div>
          {" "}
          <h1 className="text-2xl lg:text-3xl   text-center font-bold text-blue-900 ">
            Let’s Build Better Solutions Together
          </h1>
        </div>{" "}
        <div className="w-full flex mx-auto flex-col lg:flex-row gap-12 px-12  lg:justify-between ">
          <div className="flex flex-col gap-6">
            <HowCanWeHelp />
           <div className="w-full border-b border-blue-950 text-2xl"/>
            <GetInTouch className="text-gray-400 hover:text-blue-950 hover:font-semibold" />
             <ChatOnWhatsappButton />
          </div>
          <RequestQuoteForm />
        </div>
      </div>
    </BaseSection>
  );
}

export default ContactSection;
