"use client";

import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
type variant = "LOGIN" | "REGISTER";
const AuthForm = () => {
  const [variant, setVariant] = useState<variant>("LOGIN");
  const [loading, setLoading] = useState(false);
  const toogleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);
    if (variant === "REGISTER") {
      // Axiox
    } else {
      //  NextAuth }
    }
    const socialAction = (action: string) => {
      setLoading(true);
    };
    return <div>AuthForm</div>;
  };
};

export default AuthForm;
