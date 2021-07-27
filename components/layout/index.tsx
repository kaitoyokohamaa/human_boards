import { VFC } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
type Props = {
  children: React.ReactNode;
};
export const Layout: VFC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
