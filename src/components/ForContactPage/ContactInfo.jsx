import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const contactData = [
  {
    id: "address",
    title: "Our Address",
    content: (
      <>
        <p className="font-semibold">Ghana</p>
        <p>21 King Tackie Ave, Hilla Limann Hw, North Rid</p>
        <p className="font-semibold mt-2">Sierra Leone</p>
        <p>48 Liverpool Street Freetown, Sierra Leone</p>
      </>
    ),
    icon: <MapPin size={22} strokeWidth={3} />,
  },
  {
    id: "email",
    title: "Send E-mail",
    content: "support@sukutechnologies.com",
    icon: <Mail size={22} strokeWidth={3} />,
  },
  {
    id: "phone",
    title: "Our Phone",
    content: (
      <>
        <p className="font-semibold">Ghana</p>
        <p>+233 24 256 4188</p>
        <p>+233 302 903 220</p>
        <p className="font-semibold mt-2">Sierra Leone</p>
        <p>+232 73 860 666</p>
      </>
    ),
    icon: <Phone size={22} strokeWidth={3} />,
  },
];

const ContactInfo = () => {
  return (
    <div className="bg-white py-20 px-4 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {contactData.map(({ id, title, content, icon }) => (
          <div
            key={id}
            className="group relative cursor-pointer border border-blue-400 rounded-md p-6 overflow-hidden transition-all duration-300"
          >
            {/* Sliding blue background */}
            <div className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />

            {/* Content */}
            <div className="relative z-10 flex items-start gap-4">
              {/* Icon wrapper */}
              <div className="w-12 aspect-square flex items-center justify-center rounded-full border border-blue-400 bg-white transition-colors duration-300">
                <span className="text-blue-600 group-hover:text-blue-600 transition-colors duration-300">
                  {icon}
                </span>
              </div>

              {/* Text */}
              <div className="text-gray-800 group-hover:text-white transition-colors duration-300 text-sm">
                <p className="font-semibold">{title}</p>
                <div>{content}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
