"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { X } from "lucide-react"; // Menggunakan ikon dari lucide-react

interface ModalPdfViewProps {
  isOpen: boolean;
  onClose: () => void;
  pdfFile: string;
  title?: string;
}

const ModalPdfView = ({
  isOpen,
  onClose,
  pdfFile,
  title = "",
}: ModalPdfViewProps) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose}>
        {/* Latar belakang modal */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 z-[99998] bg-black/70" aria-hidden="true" />
        </Transition.Child>

        {/* Konten modal */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-75"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-75"
        >
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6">
            <Dialog.Panel className="relative flex flex-col max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-2xl">
              {/* Header */}
              <div className="bg-custom-green3 px-6 py-4 flex justify-between items-center flex-shrink-0">
                <Dialog.Title className="text-sm font-medium font-inter text-gray-900">
                  {title}
                </Dialog.Title>
                <button
                  onClick={onClose}
                  className="text-gray-700 hover:text-gray-900 focus:outline-none"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
              </div>

              {/* PDF Viewer */}
              <div className="flex-grow">
                <iframe
                  src={`${pdfFile}#toolbar=0&navpanes=0&scrollbar=0`}
                  className="w-full h-full"
                  frameBorder="0"
                  title={title || "PDF Viewer"}
                ></iframe>
              </div>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default ModalPdfView;
