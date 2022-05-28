import {memo} from 'react';
import {Notification} from '../models';

interface Props{
  notification:Notification| undefined;
}

export const OtherNotification = memo((props:Props)=>{
  return(
    <>
      {notification ? (
        <div>
          <h3>
            {notification.}
          </h3>
        </div>
      ):(
        <div></div>
      )}
    </>
  )
});