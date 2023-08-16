'use client';

import Modal from "./Modal";
import Image from "next/image";
interface ImageModalProps {
    src?: string
    isOpen: boolean
    onClose: () => void
}

const ImageModal:React.FC<ImageModalProps> = ({
    src,
    isOpen,
    onClose
}) => {
    if(!src){
        return null;
    }
    return ( 
        <Modal
        isOpen={isOpen}
        onClose={onClose}
        >
            <div className="w-[640px] h-[640px]">
                <Image 
                src={src}
                alt='Image'
                className="object-cover"
                fill
                />
            </div>
        </Modal>
     );
}
 
export default ImageModal;