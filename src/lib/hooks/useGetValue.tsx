import { useEffect, useRef, useState } from "react";
import { get, ref, child } from "firebase/database";
import { database } from "../../services/firebaseApp";

/**
 * useGetValue hook is a custom React hook that retrieves data from the Firebase
 * Realtime Database. It uses the useState and useEffect hooks to manage state and
 * fetch data from the database asynchronously.
 *
 * @returns {Object} An object containing three properties:
 *  - isLoading: A boolean indicating whether the data is being fetched.
 *  - snapshot: The data retrieved from the database.
 *  - error: An error message if there was an issue fetching the data.
 */

export default function useGetValue({
  path,
  initialLoad = true,
}: {
  path: string;
  initialLoad?: boolean;
}) {
  const [isLoading, setIsLoading] = useState(initialLoad);
  const snapshot = useRef(null);
  const error = useRef(null);

  /**
   * A function to get the data from the Firebase Realtime Database.
   * This function is called when the component mounts.
   */

  const getValue = async () => {
    try {
      const rootReference = ref(database);
      const usersReference = child(rootReference, path);
      const dbGet = await get(usersReference);

      const dbValue = dbGet.val();
      // const dbExists = dbGet.exists();

      // Update the snapshot with the data from the database
      snapshot.current = dbValue;
    } catch (error: any) {
      // If there's an error, update the error with the error message
      error.current = error.message;
    }

    // Set isLoading to false to show the UI
    setIsLoading(false);
  };

  const handleGetValue = () => setIsLoading(true);

  // Call the getValue function when the component mounts
  useEffect(() => {
    if (isLoading) {
      getValue();
    }
  }, [isLoading]);

  // Return an object containing the loading state, the data from the database, and any error that occurred
  return { isLoading, handleGetValue, snapshot: snapshot.current, error: error.current };
}
