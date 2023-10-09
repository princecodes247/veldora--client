import { debounce } from "@/lib/utils";
import { useState, useCallback } from "react";

type UseValidPasswordArgs = {
  debounceTime?: number;
};

type UseValidPasswordResult = {
  password: string;
  passwordConfirmation: string;
  passwordError: string | null;
  handleUpdatePassword: (newPassword: string) => void;
  handleUpdatePasswordConfirmation: (newPasswordConfirmation: string) => void;
};

export function useValidPassword(
  args?: UseValidPasswordArgs,
): UseValidPasswordResult {
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setConfirmPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string | null>(null);

  // Debounce delay in milliseconds
  const debounceDelay = args?.debounceTime ?? 300;
  const debouncedValidation = useCallback(
    debounce((_password: string, _passwordConfirmation: string) => {
      if (_password.trim().length < 8) {
        setPasswordError("Password must be at least 8 characters 😞");
      } else if (_password.trim() !== _passwordConfirmation.trim()) {
        setPasswordError("Passwords do not match, chief 😞");
      } else {
        // Clear the error message when the password is valid
        setPasswordError(null);
      }
    }, debounceDelay),
    [],
  );

  const handleUpdatePassword = (newPassword: string) => {
    debouncedValidation(newPassword, passwordConfirmation);
    setPassword(newPassword);
  };

  const handleUpdatePasswordConfirmation = (
    newPasswordConfirmation: string,
  ) => {
    debouncedValidation(password, newPasswordConfirmation);
    setConfirmPassword(newPasswordConfirmation);
  };

  return {
    password,
    passwordConfirmation,
    passwordError,
    handleUpdatePassword,
    handleUpdatePasswordConfirmation,
  };
}
