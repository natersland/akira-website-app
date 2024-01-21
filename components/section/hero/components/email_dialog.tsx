import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { toast } from "sonner";
import AkTypography from "@/components/typography/typography";

type Props = {
  trickerConponent: React.ReactNode;
};

const EmailDialog = (props: Props) => {
  const email = "akira.chenyavanij@gmail.com";
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast("Email address copied to clipboard!", {});
    } catch (err) {
      console.error();
      toast(`Failed to copy: ${err}`, {});
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{props.trickerConponent}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Contact Me</DialogTitle>
          <DialogDescription>
            <AkTypography
              intent={"body2"}
              color={"secondary"}
              text={
                "Interested in collaborating or learning more about my work?\nI'd love to connect! Send me a message, and let's start a conversation."
              }
            />
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input id="link" defaultValue={email} readOnly />
          </div>
          <Button
            type="submit"
            size="sm"
            className="px-3 text-onPrimary"
            onClick={copyToClipboard}
          >
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="default" className="text-onPrimary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EmailDialog;
