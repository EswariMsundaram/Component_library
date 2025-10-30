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
  showEmail?: boolean;
  showRole?: boolean;
  onEdit?: (userId: string) => void;
  children?: React.ReactNode;
}

function UserProfileCard(props: UserProfileCardProps) {
  
  const { user, showEmail, showRole, onEdit} = props; // extracting values from props
  const userEmail=showEmail ? user.email : 'User E-mail not available';
  const userRole= showRole ? user.role :'User Role not available';

  return (
    <div className="grid grid-cols-2 gap-4 p-2 m-2 w-100 h-50 rounded-lg bg-white">
      <div className="mt-2 h-20 w-30 rounded-full">
        <img src={user.avatarUrl} />
      </div>
      <div className="flex flex-col justify-center pr-4">
        <div className="text-lg text-center color-black m-2 font-bold ">
          {user.name}
        </div>{" "}
        {/* fetching the user name from parent user */}
        <div className="text-sm pb-2">{userEmail}</div>
        <div className="text-sm pb-2">{userRole}</div>
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
