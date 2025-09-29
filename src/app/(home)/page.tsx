// import NikodeLogo from "@/components/nikode-logo";
import { Button } from "@/components/ui/button";
import YogaDev from "@/components/yoga-dev";
import { Book, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen fixed w-full  flex items-center justify-center p-6">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Hero section */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold  mb-6 leading-tight">
            NIKODE
          </h1>

          <YogaDev />

          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8">
            <span className="font-semibold">یکبار یاد بگیر</span>، برای همیشه
            بساز
          </p>
        </div>

        {/* Main content card */}
        <div className=" shadow-xl rounded-3xl p-8 md:p-12 max-w-2xl mx-auto">
          {/* <div className="mb-8 flex items-center justify-center">
            <NikodeLogo />
          </div> */}

          <p className="text-lg md:text-xl  leading-relaxed mb-10">
            درس‌های کوچک ما، تمرینات دنیای واقعی، و فلسفه بدون محدودیت ما به شما
            کمک می‌کند تا سایت‌های دسترسی‌پذیر را{" "}
            <span className="font-bold ">سریع</span> بسازید.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group transition-all duration-300 hover:shadow-lg"
            >
              <Link target="_blank" href="https://alireza-nikzad.ir">
                <User className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                درباره من
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="shadow-lg bg-[#C799C7] hover:bg-[#C799C7]/90 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-black"
            >
              <Link href="/docs">
                <Book className="w-5 h-5 mr-2" />
                شروع آموزش
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
