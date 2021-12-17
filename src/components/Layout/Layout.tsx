import { Profiles } from "src/components/model/Profile";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = (props: any) => {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="lg:flex lg:justify-center px-4 lg:px-64 py-8 text-gray-800 bg-gray-50">
        <main className="block p-3 lg:w-2/3 bg-gray-200 rounded-lg border border-gray-100 shadow-sm">
          {props.children}
        </main>
        <Profiles />
      </div>
      <Footer />
    </div>
  );
};
