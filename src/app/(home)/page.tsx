import { Button } from "@/components/ui/button";
import { Book, User } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-12 flex items-center justify-center h-[70dvh]">
      <div className="space-y-4 max-w-xl shadow-md rounded-xl flex flex-col items-center p-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
        <h1 className="inline-flex items-center gap-2 text-2xl font-medium font-sans rounded-full px-4 py-1">
          - NIKODE -
        </h1>

        <p className="text-lg text-center text-muted-foreground">
          اینجا جاییه که آموزش‌ها با زبانی روان، پروژه‌محور و به‌روز ارائه می‌شن
          تا بتونید از قدم‌های اول تا مراحل پیشرفته همراهی بشید.
        </p>

        <div className="flex gap-4">
          <Button asChild variant={"secondary"}>
            <Link target="_blank" href={"https://alireza-nikzad.ir"}>
              <User /> درباره من
            </Link>
          </Button>

          <Button asChild>
            <Link href={"/docs"}>
              <Book /> شروع آموزش
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
