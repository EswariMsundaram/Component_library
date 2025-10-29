
import React from 'react';


export type AlertType = 'success' | 'error' | 'warning' | 'info';
 
export interface AlertBoxProps {
  type: AlertType;
  message: string;
  onClose?: () => void;
  children?: React.ReactNode;
}

function AlertBox({type, message, onClose,children}:AlertBoxProps){
    const alertStyles = {
                success: 'bg-green-100 border-green-500 text-green-700',
                error: 'bg-red-100 border-red-500 text-red-700',
                warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
                info: 'bg-blue-100 border-blue-500 text-blue-700'
            };
    return(
        <div className='flex flex-cols items-center'>
            <div className={ `p-4 border-l-4 w-125 ${alertStyles[type]}`}>
                <div className="flex relative">
                    <p>{message}</p>
                        {onClose && (
                    <button  onClick={onClose} className="absolute top-0 right-0  text-red-500 hover:text-gray-700"
                    > X
                    </button>)}
                </div>
                {children}
            </div>
        </div>
    );
}
export default AlertBox;