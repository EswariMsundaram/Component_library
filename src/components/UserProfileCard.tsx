import { Children } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}

export interface UserProfileCardProps {
  user: User;
  showEmail?: boolean | string;
  showRole?: boolean | string;
  onEdit?: (userId: string) => void;
  children?: React.ReactNode;
}

function UserProfileCard(props: UserProfileCardProps) {
  const { user, showEmail, showRole, onEdit} = props; // extracting values from props

  return (
    <div className="grid grid-cols-2 gap-4 p-2 m-2 w-100 h-60 rounded-lg bg-white">
      <div className="mt-2 h-20 w-30 rounded-full">
        <img src={user.avatarUrl} />
      </div>
      <div className="flex flex-col justify-center pr-6">
        <div className="text-lg text-center color-black m-2 font-bold p-2">
          {user.name}
        </div>{" "}
        {/* fetching the user name from parent user */}
        <div className="text-sm pb-2">{showEmail}</div>
        <div className="text-sm pb-4">{showRole}</div>
      </div>
      <div className="col-span-2 p-2  mb-4 rounded-lg bg-blue-500 md:items-center text-white 
            hover:text-gray-700 self-center w-90 ">
        <button
          onClick={() => onEdit && onEdit(user.id)} // fetching user id by click event
          className=" "
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default UserProfileCard;
