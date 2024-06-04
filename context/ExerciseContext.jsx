import { useState } from "react";
import { createContext } from "react";

export const ExerciseContext = createContext();

export function ExerciseProvider({ children }) {
  const [bookmarks, setBookmarks] = useState([]);

  const addToBookmarks = (exercise) => {
    const found = bookmarks.find((item) => item.id === exercise.id);
    if (!found) {
      setBookmarks([...bookmarks, { ...exercise, isMarked: true }]);
    } else {
      setBookmarks([...bookmarks, { ...exercise, isMarked: false }]);
      const filtred = bookmarks.filter((i) => i.id !== exercise.id);
      setBookmarks(filtred);
    }
  };

  return (
    <ExerciseContext.Provider value={{ bookmarks, addToBookmarks }}>
      {children}
    </ExerciseContext.Provider>
  );
}
