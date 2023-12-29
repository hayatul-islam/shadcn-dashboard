import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }: any) {
  const [isCheck, setIsCheck] = useState(false);
  const { user, isLoading } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (user !== null) {
      setIsCheck(true);
    }

    setTimeout(() => {
      if (!isLoading) {
        console.log(user);
        setIsCheck(true);
      }
    }, 1000);
  }, [user, isLoading]);

  if (!isCheck) {
    return;
  }

  return user && isCheck ? children : <Navigate to="/auth/login" />;
}
