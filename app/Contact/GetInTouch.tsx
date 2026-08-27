import { Mail, Phone ,MapPin} from "lucide-react";
import { contactInfo } from "../company_data/contactInfo";

function GetInTouch({className = ""}: {className?: string}) {
  
  const iconMap = { Mail, Phone, MapPin };
  return (
    <div className={`px-4`}>
      <h1 className="text-2xl font-bold text-blue-950">Get In Touch</h1>
       <div className="flex flex-col gap-1">
        {contactInfo.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];

          return (
            <div key={item.text} className="flex items-center gap-3">
              <Icon className={"inline-block text-blue-900"} />
              <p className={` py-1  transition-colors duration-300 cursor-pointer ${className}`}>{item.text}</p>
            </div>
          );
        })}
      </div>
     
    </div>
  );
}

export default GetInTouch;
