import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:7000";

type AuthStatusResult = {
  isLoading: boolean;
  isAuthorized: boolean;
  username: string;
};

export function useAuthStatus(): AuthStatusResult {
  const [result, setResult] = useState<AuthStatusResult>({
    isLoading: true,
    isAuthorized: false,
    username: "",
  });

  useEffect(() => {
    let cancelRequest = false;
    const authToken = localStorage.getItem("psg_auth_token");
    axios
      .post<{ authStatus: string; identifier: string }>(
        `${API_URL}/auth`,
        null,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        },
      )
      .then((response) => {
        if (cancelRequest) {
          return;
        }
        const { authStatus, identifier } = response.data;
        if (authStatus === "success") {
          setResult({
            isLoading: false,
            isAuthorized: true,
            username: identifier,
          });
        } else {
          setResult({
            isLoading: false,
            isAuthorized: false,
            username: "",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        setResult({
          isLoading: false,
          isAuthorized: false,
          username: "",
        });
      });

    return () => {
      cancelRequest = true;
    };
  }, []);

  return result;
}
