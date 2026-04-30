import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { StorageKeys } from "@/data/storage";
import { useRouter } from "next/navigation";

/**
 * Redirects to the given path if quiz is complete.
 */
export function useQuizCompletionRedirect(to: string) {
  const router = useRouter();
  const [value] = useLocalStorage<QuizResults>(StorageKeys.QuizResults);

  React.useEffect(() => {
    if (value) {
      router.push(to);
    }
  }, [router, to, value]);
}
