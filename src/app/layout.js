import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Inter } from "next/font/google";
import "./globals.css";
import SiderBar from "./components/siderbar/SiderBar";
import BootStrapComponent from "./components/BootStrapComponent";
import Header from "./components/siderbar/Header/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Adau Transaction Manager",
  description: "One Software to manage all your business transactions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container-fluid mt-2">
          <Header></Header>
          <div className="d-flex full-height mt-2">
            <div className="p-2 flex-shrink-0  border rounded border-opacity-10">
              <div className="wrapper">
                <SiderBar></SiderBar>
              </div>
            </div>

            <div className="p-2 flex-grow-1 border rounded border-opacity-10">
              <div className="container">{children}</div>
            </div>
          </div>
        </div>
        <BootStrapComponent></BootStrapComponent>
      </body>
    </html>
  );
}
