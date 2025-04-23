"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

import { ReactNode } from "react";

export function ThemeProvider({
  children,
  ...props
}: {
  children: ReactNode;
  [key: string]: unknown;
}) {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
