import { Profiles } from "src/components/model/Profile";
import { Footer } from "src/components/Layout/Footer";
import { Header } from "src/components/Layout/Header";

export const Layout = (props: any) => {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="lg:flex lg:justify-center lg:px-64 text-gray-800 my-6">
        <main className="block lg:mr-4 lg:w-2/3 py-6 bg-gray-200 rounded-lg border border-gray-100 shadow-sm">
          {props.children}
        </main>
        <Profiles />
      </div>
      <Footer />
    </div>
  );
};
