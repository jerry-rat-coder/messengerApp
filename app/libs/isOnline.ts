import useActiveList from "../hooks/useActive";

export default function isOnline(email: string) {
    const { members } = useActiveList();

    return {
        isActive: members.some((memberEmail) => {
            return memberEmail === email;
        }),
        members
    }
}