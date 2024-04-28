import { MouseEventHandler, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import closeImg from "../../assets/images/icon-close-menu.svg";
import hamburgerMenuImg from "../../assets/images/icon-hamburger.svg";
import logoImg from "../../assets/images/logo.svg";

function DesktopNav() {
  return (
    <ul className="hidden gap-x-8 text-white md:flex">
      <li>
        <button type="button" className="hover:brightness-90">
          About
        </button>
      </li>
      <li>
        <button type="button" className="hover:brightness-90">
          Discover
        </button>
      </li>
      <li>
        <button type="button" className="hover:brightness-90">
          Get Started
        </button>
      </li>
    </ul>
  );
}

function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => setIsMenuOpen((state) => !state);
  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (e) =>
    e.stopPropagation();

  return (
    <>
      <button
        type="button"
        onClick={handleMenuToggle}
        aria-label="Toggle menu"
        className="min-h-fit min-w-fit md:hidden"
      >
        {isMenuOpen ? (
          <img
            src={closeImg}
            alt="Close menu"
            className="fixed right-[25px] top-[27px] z-20"
          />
        ) : (
          <motion.img
            src={hamburgerMenuImg}
            initial={{ rotate: 0 }}
            exit={{ rotate: 90 }}
            alt="Open menu"
          />
        )}
      </button>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsMenuOpen(false)}
            className="fixed left-0 top-0 z-10 h-dvh w-full bg-black/50"
          >
            <motion.nav
              initial={{ top: 0, height: 0 }}
              animate={{ top: 80, height: "auto" }}
              exit={{ top: 0, height: 0 }}
              transition={{ type: "tween", duration: 0.4 }}
              className="
              fixed left-1/2 z-50 w-5/6 -translate-x-1/2 overflow-hidden rounded-lg bg-white
              "
            >
              <ul
                className="
                font-bold [&>*:not(:last-child)]:border-b [&>li>button]:h-full [&>li>button]:w-full [&>li>button]:py-4 [&>li>button]:pl-6
                [&>li>button]:text-left
                "
              >
                <li>
                  <button type="button" onClick={handleButtonClick}>
                    About
                  </button>
                </li>
                <li>
                  <button type="button" onClick={handleButtonClick}>
                    Discover
                  </button>
                </li>
                <li>
                  <button type="button" onClick={handleButtonClick}>
                    Get Started
                  </button>
                </li>
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function AppBar() {
  return (
    <div className="absolute top-6 mx-auto flex w-full max-w-[1110px] items-center justify-between px-6 md:top-12">
      <img src={logoImg} alt="Logo" className="h-4 md:h-auto" />
      <nav>
        <DesktopNav />
        <MobileNav />
      </nav>
    </div>
  );
}

export default AppBar;
