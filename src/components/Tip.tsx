import React from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Tip = () => {
  return (
    <div>
      <Dialog>
        <span className="bg-white text-black font-extrabold rounded-md p-1 px-2">
          <DialogTrigger>A Quick Tip</DialogTrigger>
        </span>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <span className="text-white">A Quick Tip!</span>
            </DialogTitle>
            <DialogDescription>
              <span className="font-extrabold">Tip</span>:{" "}
              <span>
                set your browser&apos;s default home page to be{" "}
                <Link
                  href="https://speedlinks.vercel.app"
                  // target="_blank"
                  className="underline offset-2"
                >
                  https://speedlinks.vercel.app
                </Link>{" "}
                for this page to open by default.
              </span>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Tip;
