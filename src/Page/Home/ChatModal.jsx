import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";

export default function ChatModal({ open, setOpen }) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" initialFocus={cancelButtonRef} onClose={setOpen}>
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </Transition.Child>

        {/* Modal Container */}
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full justify-center items-center p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-6 scale-95"
              enterTo="opacity-100 translate-y-0 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 scale-100"
              leaveTo="opacity-0 translate-y-6 scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-white text-gray-800 shadow-xl transition-all w-full max-w-md mx-auto">
                <div className="p-6">

                  {/* Close Icon */}
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
                    aria-label="Close"
                  >
                    <AiOutlineClose className="w-6 h-6" />
                  </button>

                  {/* Title */}
                  <div className="text-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Contact Our Support</h2>
                    <p className="text-sm text-gray-500 mt-1">
                      Choose a contact method below. We're quick to respond.
                    </p>
                  </div>

                  {/* Contact Options */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Phone */}
                    <a
                      href="tel:+32456359468"
                      className="flex flex-col items-center bg-blue-50 hover:bg-blue-100 rounded-xl p-4 transition text-center"
                    >
                      <div className="bg-blue-600 text-white p-3 rounded-full mb-2">
                        <FiPhone className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">Call</span>
                    </a>

                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/32456359468"
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-col items-center bg-green-50 hover:bg-green-100 rounded-xl p-4 transition text-center"
                    >
                      <div className="bg-green-500 text-white p-3 rounded-full mb-2">
                        <IoLogoWhatsapp className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">WhatsApp</span>
                    </a>
                  </div>

                  {/* Footer */}
                  <div className="mt-6 text-center text-xs text-gray-400 border-t pt-4">
                    Available during business hours. Expect a reply within minutes.
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
