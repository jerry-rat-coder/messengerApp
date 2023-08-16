'use client';

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoClose } from "react-icons/io5";

interface ModalProps {
    isOpen?: boolean
    onClose: () => void
    children?: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children
}) => {
    return (
        <Transition.Root
            as={Fragment}
            show={isOpen}
            >
            <Dialog
                onClose={onClose}
                as='div'
                className='z-50 relative'
                >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <div 
                        className="
                        fixed 
                        inset-0 
                        bg-gray-500 
                        bg-opacity-75 
                        transition-opacity
                        "
                    />
                </Transition.Child>

                <div className="z-10 fixed inset-0 overflow-y-auto">
                    <div className="flex justify-center items-center min-h-full text-center p-4 sm:p-0">
                        <Transition.Child 
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel
                               className='relative transform bg-white px-4 pt-5 pb-4 transition-all text-left rounded-lg shadow-xl overflow-hidden sm:w-full sm:max-w-lg sm:p-6 sm:my-8'
                               >
                                    <div className=" hidden sm:block absolute right-0 top-0 pt-4 pr-4 z-10">
                                        <button
                                        type='button'
                                        onClick={onClose}
                                        className=" rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:outline-none"
                                        >
                                            <span className="sr-only">Close</span>
                                            <IoClose className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                    {children}
                               </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
            
        </Transition.Root>
     );
}
 
export default Modal;
