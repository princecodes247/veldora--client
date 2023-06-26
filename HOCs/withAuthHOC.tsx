import React, { useState, useEffect } from "react";
import axios from "axios";
import { verifyAuth } from "@/services/AuthService";

const API_URL = "http://localhost:7000";

type AuthStatusResult = {
  isLoading: boolean;
  isAuthorized: boolean;
  username: string;
};

function withAuthHOC<P>(WrappedComponent: React.ComponentType<P>) {
  return function WithAuthStatus(props: P) {
    const [result, setResult] = useState<AuthStatusResult>({
      isLoading: true,
      isAuthorized: false,
      username: "",
    });

    useEffect(() => {
      let cancelRequest = false;
      const authToken = localStorage.getItem("psg_auth_token");
      verifyAuth()
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

    return <WrappedComponent {...props} authStatus={result} />;
  };
}

export default withAuthHOC;
