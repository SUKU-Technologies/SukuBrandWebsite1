import { useEffect } from "react";

const OdooChat = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://suku-technologies-limited1.odoo.com/im_livechat/loader/1";
    script1.defer = true;

    const script2 = document.createElement("script");
    script2.src = "https://suku-technologies-limited1.odoo.com/im_livechat/assets_embed.js";
    script2.defer = true;

    document.head.appendChild(script1);
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return null;
};

export default OdooChat;