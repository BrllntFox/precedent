import { FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";


import { ReactNode } from "react";

import Meta from "./meta";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import NavigationMenuDemo from "./NavMenu/navmenu";

export default function Layout({
  meta,
  children,
}: {
  meta?: {
    title?: string;
    description?: string;
    image?: string;
  };
  children: ReactNode;
}) {
  const { data: session, status } = useSession();
  const { SignInModal, setShowSignInModal } = useSignInModal();
  

  return (
    <>
      <Meta {...meta} />
      
      <NavigationMenuDemo />
      <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
      
      
      <main className="flex w-full flex-col items-center justify-center py-32">
        {children}
      </main>~
      <div className="absolute w-full border-t border-gray-200 bg-white py-5 text-center">
        <p className="text-gray-500">
          Cái này thử tiếng Việt{" "}
          <a
            className="font-medium text-gray-800 underline transition-colors"
            href="https://twitter.com/steventey"
            target="_blank"
            rel="noopener noreferrer"
          >
            Steven Tey
          </a>
        </p>
      </div>
    </>
  );
}
