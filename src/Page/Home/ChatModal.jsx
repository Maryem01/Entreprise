import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiFillCloseCircle, AiOutlineMessage } from "react-icons/ai";
import { FaFacebookMessenger, FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function ChatModal({ open, setOpen }) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/80 transition-opacity" />
        </Transition.Child>

        {/* Modal Container */}
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full justify-center items-center p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-500"
              enterFrom="opacity-0 translate-y-10 scale-95"
              enterTo="opacity-100 translate-y-0 scale-100"
              leave="ease-in duration-300"
              leaveFrom="opacity-100 translate-y-0 scale-100"
              leaveTo="opacity-0 translate-y-10 scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-xl bg-slate-900 text-white shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="px-6 pt-6 pb-4 sm:p-6">
                  {/* Close Icon */}
                  <AiFillCloseCircle
                    className="text-white hover:text-red-500 absolute top-4 right-4 text-3xl cursor-pointer transition-all duration-200"
                    onClick={() => setOpen(false)}
                  />

                  {/* Title */}
                  <div className="text-center mb-4">
                    <h2 className="text-2xl font-bold text-amber-400">Hayder Live Support</h2>
                    <p className="text-sm text-gray-300 mt-2">
                      Select your preferred contact method below:
                    </p>
                  </div>

                  {/* Contact Options */}
                  <div className="grid grid-cols-2 gap-6 py-6">
                    <Transition.Child
                      as={Fragment}
                      enter="transition ease-out duration-700"
                      enterFrom="opacity-0 scale-75"
                      enterTo="opacity-100 scale-100"
                    >
                      <a href="tel:+32456359468" className="flex flex-col items-center gap-3">
                        <AiOutlineMessage className="bg-white text-red-500 p-3 rounded-full w-14 h-14 shadow hover:scale-110 transition-all duration-200" />
                        <span className="text-sm">Live Call</span>
                      </a>
                    </Transition.Child>

                    <Transition.Child
                      as={Fragment}
                      enter="transition ease-out duration-700 delay-100"
                      enterFrom="opacity-0 scale-75"
                      enterTo="opacity-100 scale-100"
                    >
                     <a
  href="https://wa.me/32456359468"
  target="_blank"
  rel="noreferrer"
  className="flex flex-col items-center gap-3"
>
  <IoLogoWhatsapp className="bg-white text-green-500 p-3 rounded-full w-14 h-14 shadow hover:scale-110 transition" />
  <span className="text-sm text-white">WhatsApp</span>
</a>

                    </Transition.Child>
                  </div>

                  {/* Footer */}
                  <div className="text-center pt-4 border-t border-gray-700">
                    <p className="text-xs text-gray-400">
                      We respond within minutes during working hours.
                    </p>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
