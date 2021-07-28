import { VFC } from "react";
import { Header } from "/components/layout/header";
import { Footer } from "/components/layout/footer";
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
