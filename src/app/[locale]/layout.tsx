import type { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Header from "~/component/Header";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      // enableColorScheme
    >
      <Header />
      <main>{children}</main>
    </NextThemesProvider>
  );
}
