import { Button } from "../ui/button";

export function SiteHeader({ children }: { children: React.ReactNode }) {
  return (
    <header className="border-grid sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center">
          <div className="flex flex-1 items-center lg:justify-start gap-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none"></div>
            {children}
            {/* <nav className="flex items-center gap-0.5">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 px-0 bg-white"
              ></Button>
            </nav> */}
          </div>
        </div>
      </div>
    </header>
  );
}
