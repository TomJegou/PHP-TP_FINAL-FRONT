"use client";

import { useEffect, useRef } from "react";
import HomeButton from "../home-button";

export default function SignOutAction({ deleteTokens }: { deleteTokens: Function }) {
  const deleteTokensRef = useRef(deleteTokens);

  useEffect(() => {
    deleteTokensRef.current = deleteTokens;
  });

  useEffect(() => {
    deleteTokensRef.current();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <HomeButton />
      <p className="text-6xl text-azure">
        Vous êtes déconnecté vous pouvez retourner sur la page d'accueil
      </p>
    </div>
  );
}