import { debounce } from "@/lib/utils";
import { useState, useEffect, useCallback } from "react";

type UseValidEmailArgs = {
  debounceTime?: number;
};

type UseValidEmailResult = {
  email: string;
  isValidEmail: boolean | null;
  handleUpdateEmail: (inputValue: string) => void;
};

export function useValidEmail(args?: UseValidEmailArgs): UseValidEmailResult {
  const [email, setEmail] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean | null>(null);

  // Debounce delay in milliseconds
  const debounceDelay = args?.debounceTime ?? 300;
  const debouncedValidation = useCallback(
    debounce((inputValue: string) => {
      if (inputValue.trim().length === 0) {
        setIsValidEmail(null);
        return;
      }
      // Regular expression for email validation
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      setIsValidEmail(emailRegex.test(inputValue));
    }, debounceDelay),
    [],
  );

  const handleUpdateEmail = (inputValue: string) => {
    setEmail(inputValue);
    debouncedValidation(inputValue);
  };

  return { email, isValidEmail, handleUpdateEmail };
}
