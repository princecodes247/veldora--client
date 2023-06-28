import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { verifyAuth } from "@/services/AuthService";
import { useRouter } from "next/router";
import useUser from "@/hooks/useUser";
import { Loading } from "@/components/Loading";
import { AuthContext } from "@/contexts/Auth.context";

const API_URL = "http://localhost:7000";

type AuthStatusResult = {
  isLoading: boolean;
  isAuthorized: boolean;
  username: string;
};

function withAuthHOC<P>(WrappedComponent: React.ComponentType<P>) {
  return function WithAuthStatus(props: P) {
    const { login, logout } = useContext(AuthContext);
    const router = useRouter();
    const [result, setResult] = useState<AuthStatusResult>({
      isLoading: true,
      isAuthorized: false,
      username: "",
    });
    const userRequired = true;
    const user = useUser({
      tryOnce: true,
      userRequired,
    });

    if (user.isLoading && userRequired) {
      return <Loading variant="SCREEN" />;
    }

    if (user.isError && userRequired) {
      localStorage.removeItem("token");
      logout()
      return null;
    }

    if(!user.isLoading && !user.isError) login(user.data)

    return <WrappedComponent {...props} authStatus={result} />;
  };
}

export default withAuthHOC;
