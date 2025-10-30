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
import { Input } from "./ui/input";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export function Modal({ service, index }: any) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="link"
          className={`${
            index % 3 === 1 ? "text-[#9d5a4d]" : "text-[#F5F2ED]"
          } w-full cursor-pointer py-3 text-2xl font-bold font-body flex items-center justify-center rounded-lg rounded-tr-4xl transition-all duration-300 hover:brightness-110 ${
            index % 3 === 0
              ? "bg-[#9d5a4d]"
              : index % 3 === 1
              ? "bg-[#e6dad1]"
              : "bg-[#9d5a4d]"
          }`}
        >
          {service.price}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Payment Details </DialogTitle>
          <DialogDescription>
            {service.extraText ? service.extraText : 'Copy the details below to pay, after payment click on proceed to share transaction reciept and info on your booking with us or simply chat us via Watsapp' }
          </DialogDescription>
        </DialogHeader>
        <div>
          <h2 className="font-bold">Service Summary</h2>
          <div className="flex items-center justify-between text-2xl">
            <div><span className="pr-2">{service.image}</span><span>{service.name}</span></div>
            <p>{service.price}</p>
          </div>
          <div className="grid gap-2 py-3">
            <p className="font-bold">Account Details</p>
            <div className="flex gap-2">
              <span>Name:</span>
              <span>Joyful Suobo Betuna</span>
            </div>
            <div className="flex gap-2">
              <span>Bank:</span>
              <span>Paycom/Opay</span>
            </div>
            <div className="flex gap-2">
              <span>Account:</span>
              <span>
                <Input id="link" defaultValue="9065602994" readOnly />
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span>Or Chat for quick response</span>
            <Link
              href="https://wa.me/2349065602994?text=Hello%20Reelihana,%20I%20would%20like%20to%20know%20more%20about%20your%20services%20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp
                size={40}
                className="text-green-600 transition-all duration-300 hover:scale-110"
              />
            </Link>
          </div>
        </div>
        <DialogFooter className="sm:justify-start md:justify-between">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button variant='link'><Link href={index % 3 === 0 ? 'https://forms.gle/UDuESRjdGzzALWXb6' : index % 3 === 1 ? 'https://forms.gle/qPK7kVjVWYNWP9C28' : 'https://forms.gle/XahvyCffsQFVu9eA7'}>Proceed</Link></Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
