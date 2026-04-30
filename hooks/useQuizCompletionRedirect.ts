import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { StorageKeys } from "@/data/storage";
import { useRouter } from "next/navigation";

/**
 * Redirects to the given path if quiz is complete.
 *
 * Note: This hook does not know if the storage updates.
 */
export function useQuizCompletionRedirect(to: string) {
  const router = useRouter();
  const [quizResults] = useLocalStorage<QuizResults>(StorageKeys.QuizResults);

  React.useEffect(() => {
    if (quizResults) {
      router.push(to);
    }
  }, [router, to, quizResults]);
}
