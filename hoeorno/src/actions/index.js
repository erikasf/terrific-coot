import { HOE_NAME } from '../constants;'

  export const hoeName = (text)=>{
    const action = {
      type:HOE_NAME,
      text
    }
    console.log('action in hoeName', action);
    return action;
  }
