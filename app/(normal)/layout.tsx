import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { WhatsappButton } from "@/components/common/whatsapp-button";

export default function NormalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      {/* <WhatsappButton /> */}
    </>
  );
}
