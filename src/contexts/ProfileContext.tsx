"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { profileQuery } from "@/sanity/lib/queries";
import type { Profile } from "@/types/profile";

type ProfileContextValue = {
  profile: Profile | null;
  isLoading: boolean;
  error: Error | null;
};

const ProfileContext = createContext<ProfileContextValue>({
  profile: null,
  isLoading: true,
  error: null,
});

export const ProfileProvider = ({ children }: { children: React.ReactNode }) => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    client
      .fetch<Profile>(profileQuery)
      .then((data) => {
        setProfile(data);
      })
      .catch((err) => {
        setError(err instanceof Error ? err : new Error("Failed to load profile"));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <ProfileContext.Provider value={{ profile, isLoading, error }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
