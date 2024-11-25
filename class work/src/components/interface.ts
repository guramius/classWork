export default interface UserInfoProps {
    id?:number;
    user?:string;
    isTrue?:boolean;
}

// export default interface ButtonProps {
//     lable?:string;
//     wtfClick: () => void;
// }

export default interface InputProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Corrected React.ChangeEvent
}