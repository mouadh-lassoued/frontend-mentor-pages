import Image from "next/image"
import Link from "next/link"
export default function QrCode () { 
  return (
  <div className="flex items-center justify-center h-screen bg-[hsl(212,45%,89%)] relative">
    <div className="flex-row justify-center h-100 w-70 bg-[hsl(0,0%,100%)] rounded-4xl shadow-md">
      <Image className={"p-5 rounded-4xl"} src={"/images/image-qr-code.png"} alt={"qr code"} width={300} height={250}/>
      <div className="text-center text-md font-bold">Improve your front-end skills by building projects</div>
      <div className="text-center text-xs p-2 font-thin">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</div>
    </div>
      <Link
        href="/Blog-preview-card"
        className="absolute bottom-4 right-4 bg-black text-white px-4 py-2 rounded-md"
      >
        Go to Blog Preview Card
      </Link>
  </div>
  )
}

 