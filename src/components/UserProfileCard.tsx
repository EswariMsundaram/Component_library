

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}
 
export interface UserProfileCardProps {
  user: User;
  showEmail?: boolean|string;
  showRole?: boolean|string;
  onEdit?: (userId: string) => void;
  children?: React.ReactNode;
}

function UserProfileCard(props:UserProfileCardProps){
   const{user,showEmail,showRole,onEdit}=props;
   

    return(

        <div className="flex flex-col  p-2 m-2 w-100  h-60 rounded-lg bg-white md:flex-row md:items-center">
            <img className="relative m-2 mx-0 my-0 block h-20 w-30 object-cover rounded-full sm:mx-0 sm:shrink-0" src={user.avatarUrl}/>
            <div className="flex flex-col m-2 justify-center items-center"> 
  
                <div className="text-lg color-black font-bold pb-2 pl-2">{user.name}</div>
                <div className="text-sm pb-2 pl-2">{showEmail}</div>
                <div className="text-sm pb-4  pl-2">{showRole}</div>
          
              <button onClick= {()=>onEdit && onEdit(user.id)} 
              className="absolute bottom-25 left-50 rounded-lg p-2 bg-blue-500 md:items-center text-white hover:text-gray-700 self-center md:self-start w-85 mx-auto md:mx-0">
                     Edit
              </button>
             
            </div> 
        </div>
    );
}

export default UserProfileCard;