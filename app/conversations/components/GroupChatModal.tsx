'use client';

import Button from "@/app/components/Button";
import Input from "@/app/components/Inputs/Intput";
import Select from "@/app/components/Inputs/Select";
import Modal from "@/app/components/modals/Modal";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

interface GroupChatModalProps {
    isOpen?: boolean
    onClose: () => void
    users: User[]
}

const GroupChatModal: React.FC<GroupChatModalProps> = ({
    isOpen,
    onClose,
    users
}) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);


    const { 
        register,
        setValue,
        watch,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            members: []
        }
    });

    const members = watch('members');

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('/api/conversation', {
            ...data,
            isGroup: true
        })
        .then(() => {
            router.refresh();
            onClose();
        })
        .catch(() => toast.error('Something went wrond!'))
        .finally(() => {
            setIsLoading(false);
        })
    }
    return ( 
        <Modal
        isOpen={isOpen}
        onClose={onClose}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2
                        className="
                        text-base 
                        font-semibold 
                        leading-7 
                        text-gray-900
                      "
                        >
                            Create a group chat
                        </h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                        Create a chat with more than 2 people.
                        </p>
                        <div className="mt-8 flex flex-col gap-y-8">
                            <Input
                                disabled={isLoading}
                                label="Name" 
                                id="name" 
                                errors={errors} 
                                required 
                                register={register}
                            />
                            <Select 
                            disabled={isLoading}
                            value={members}
                            label="Members"
                            options={users.map((user) => ({
                                value: user.id,
                                label: user.name
                            }))}
                            onChange={(value) => setValue('members',value, {
                                shouldValidate: true
                            } )}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <div className="flex gap-2">
                        <Button
                        disabled={isLoading}
                        secondary
                        onClick={onClose}
                        >
                            cancel
                        </Button>
                        <Button
                        type="submit"
                        disabled={isLoading}
                        >
                            Create
                        </Button>
                    </div>
                </div>
            </form>
        </Modal>
     );
}
 
export default GroupChatModal;