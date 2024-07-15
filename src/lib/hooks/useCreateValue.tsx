import { useRef, useState } from "react";
import { database } from "../../services/firebaseApp";
import { child, push, ref } from "firebase/database";

/**
 * This hook is used to create a new value in the Firebase Realtime Database.
 * When the pushValue function is called, it sets the isLoading state to true to show a loading UI.
 * It then tries to push the value to the specified path in the database.
 * If successful, it sets the success state to true. If there's an error, it sets the error state with the error message.
 * Finally, it sets isLoading back to false to show the UI.
 */
export default function useCreateValue() {
  const [isLoading, setIsLoading] = useState(false);
  const error = useRef(null);
  const success = useRef(false);

  /**
   * This function is called to push the value to the specified path in the database.
   * It takes two arguments: the value to push and the path to push it to.
   */
  const pushValue = async (value: any, path: string) => {
    setIsLoading(true);
    try {
      const rootReference = ref(database); // get a reference to the root of the database
      const dbPath = child(rootReference, path); // get a reference to the specified path in the database
      const dbPush = await push(dbPath, value);
      success.current = true;
    } catch (pushError: any) {
      // if there's an error, set the error state with the error message
      error.current = pushError.message;
      console.log({ pushError });
      
    }
    setIsLoading(false);
  };

  return {
    isLoading, // return the isLoading state
    error: error.current, // return the error state
    success: success.current, // return the success state
    pushValue // return the pushValue function
  }
}

