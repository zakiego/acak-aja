import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useState } from "react";

import Layout from "~/components/Layout";

export default function Saran() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const messageHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("Loading");

    const { error } = await fetch(
      "https://api-zakiego.vercel.app/api/telegram/acak-aja",
      {
        body: JSON.stringify({ message }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      },
    ).then((resp) => resp.json());

    setMessage("");
    if (!error) setStatus("Done");

    openModal();
  };

  return (
    <Layout title="Saran">
      <div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto backdrop-blur-lg"
            onClose={closeModal}
          >
            <div className="min-h-screen px-11 text-center md:px-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Pesan terkirim
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Semoga harimu menyenangkan! 🥳
                    </p>
                  </div>

                  <div className="mt-4">
                    <Link href="/">
                      <a>
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-sky-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Got it, thanks!
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
        <div>
          <form onSubmit={submitHandler}>
            <div className="mt-3">
              <div>
                <textarea
                  rows={8}
                  value={message}
                  className="input-primary"
                  placeholder="Tulis saran kamu di sini"
                  onChange={messageHandler}
                ></textarea>

                <div className="mt-6 flex justify-center">
                  {status == "Loading" ? (
                    <button
                      type="button"
                      disabled={true}
                      className="button-submit inline-flex cursor-not-allowed items-center transition duration-150 ease-in-out"
                    >
                      <svg
                        className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </button>
                  ) : (
                    <button className="button-submit">Kirim Saran 🚀</button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
