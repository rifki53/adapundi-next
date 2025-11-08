"use client"; // Diperlukan untuk state dan event handling

import { useState, useRef, Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function ModalVideo({
  videoUrl,
  buttonText = "Tonton Video",
  videoWidth = 1920,
  videoHeight = 1080,
}: any) {
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef<any>(null);

  // Efek untuk memutar video secara otomatis saat modal terbuka
  useEffect(() => {
    if (modalOpen && videoRef.current) {
      videoRef.current.play();
    }
  }, [modalOpen]);

  return (
    <div>
      {/* Tombol untuk membuka modal */}
      <button
        onClick={() => setModalOpen(true)}
        className="btn bg-white text-gray-800 rounded-xl text-sm font-bold hover:bg-gray-100 transition-colors"
        aria-label={`Tonton video: ${buttonText}`}
      >
        <span className="text-gray-900 text-sm font-bold">{buttonText}</span>
      </button>

      {/* Definisi Modal menggunakan Headless UI */}
      <Transition show={modalOpen} as={Fragment}>
        <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>
          {/* Backdrop atau Overlay Modal */}
          <Transition.Child
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 z-[99999] bg-black/70"
              aria-hidden="true"
            />
          </Transition.Child>

          {/* Konten Dialog Modal */}
          <Transition.Child
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 scale-75"
            enterTo="opacity-100 scale-100"
            leave="transition ease-out duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-75"
          >
            <div className="fixed inset-0 z-[99999] flex items-center justify-center px-4 py-6 sm:px-6">
              <div className="mx-auto flex h-full max-w-6xl items-center">
                <Dialog.Panel className="aspect-video max-h-full w-full overflow-hidden rounded-2xl bg-black shadow-2xl">
                  <video
                    ref={videoRef}
                    width={videoWidth}
                    height={videoHeight}
                    loop
                    controls
                    autoPlay // autoPlay direkomendasikan bersamaan dengan `controls`
                  >
                    <source src={videoUrl} type="video/mp4" />
                    Browser Anda tidak mendukung tag video.
                  </video>
                </Dialog.Panel>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
}
