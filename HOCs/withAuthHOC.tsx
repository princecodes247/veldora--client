import React, { useState, useEffect } from "react";
import axios from "axios";
import { verifyAuth } from "@/services/AuthService";
import { useRouter } from "next/router";
import useUser from "@/hooks/useUser";
import { Loading } from "@/components/Loading";

const API_URL = "http://localhost:7000";

type AuthStatusResult = {
  isLoading: boolean;
  isAuthorized: boolean;
  username: string;
};

function withAuthHOC<P>(WrappedComponent: React.ComponentType<P>) {
  return function WithAuthStatus(props: P) {
    const router = useRouter();
    const [result, setResult] = useState<AuthStatusResult>({
      isLoading: true,
      isAuthorized: false,
      username: "",
    });
    const userRequired = true
    const user = useUser({
      tryOnce: true,
      userRequired,
    });

    if (user.isLoading && userRequired) {
      return <Loading />;
    }

    if (user.isError && userRequired) {
      localStorage.removeItem("token");
      router.push("/login");
      return null;
    }

    return <WrappedComponent {...props} authStatus={result} />;
  };
}

export default withAuthHOC;
