import NotFoundSection from "@/components/not-found"; // Adjust the import path based on your project structure
import Header from "@/components/ui/header";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-white">
      <Header />

      <main className="grow">
        <NotFoundSection />
      </main>
    </div>
  );
};

export default NotFoundPage;
