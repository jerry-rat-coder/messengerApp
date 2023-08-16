'use client';


import useConversation from "@/app/hooks/useConversation";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { HiPaperAirplane, HiPhoto } from "react-icons/hi2";
import MessageInput from "./MessageInput";
import { CldUploadButton } from 'next-cloudinary'
const Form = () => {
    const { conversationId } = useConversation();

    const {
        register,
        handleSubmit,
        setValue,
        formState:{
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            message: ''
        },
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setValue('message', '', { shouldValidate: true });

        axios.post('/api/messages', { 
            ...data,
            conversationId
         }).then(res => {

         })
    }
    const handleUpload = (result: any) => {
        // console.log('图片',result.info.secure_url);
        axios.post('/api/messages', {
          image: result.info.secure_url,
          conversationId: conversationId
        })
      }

    return (  
        <div
        className="px-4 py-4 bg-white border-t flex items-center gap-2 lg:gap-4 w-full"
        >
             <CldUploadButton 
                options={{ maxFiles: 1 }} 
                onUpload={handleUpload} 
                uploadPreset="ed1g8bvu"
            >
                <HiPhoto size={30} className="text-sky-500" />
            </CldUploadButton>
            
            <form 
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-center gap-2 lg:gap-4 w-full"
            >
             <MessageInput 
             id="message"
             placeholder='Write a message'
             register={register}
             required
             errors={errors}
             />   
             <button
             type="submit"
             className=" rounded-full p-2 bg-sky-500 hover:bg-sky-600 cursor-pointer transition"
             >
                <HiPaperAirplane size={18} className="text-white" />
             </button>
            </form>   
        </div>
     );
}
 
export default Form;