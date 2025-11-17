import Image from "next/image"
import localFont from "next/font/local"

const FigtreeLight = localFont({
  src:"../fonts/Figtree-VariableFont_wght.ttf"
})

export default function BlogPreviewPage () {
  return (
    <div className="bg-[hsl(47,88%,63%)] h-screen w-screen flex items-center justify-center">
      <div className="bg-[hsl(0,0%,7%)] h-100 w-75 rounded-2xl">
      <div className="bg-[hsl(0,0%,100%)] h-100 w-75 rounded-2xl m-[-5] border-2 p-5">
        <Image className="rounded-xl " src={"/images/Blog-preview-card/illustration-article.svg"} alt={"random cool illustration"} width={265} height={0}/>
        <div className={`bg-[hsl(47,88%,63%)] m-5 ml-0 w-17 ${FigtreeLight.className} p-1 rounded-sm font-black text-xs flex items-center justify-center`}>Learning</div>
        <div className={`${FigtreeLight.className} text-xs`}>Published 17 Nov 2025</div>
        <div className={`font-black text-lg pt-3 ${FigtreeLight.className} hover:text-[hsl(47,88%,63%)] duration-200 cursor-pointer`}>HTML & CSS foundations</div>
        <div className={`${FigtreeLight.className} p-1 pl-0 text-xs font-thin text-[hsl(0,0%,42%)]`}>These languages are the backbone of every website, defining structure, content, and presentation.</div>
        <div className="flex p-3 pl-0">
          <Image src={"/images/Blog-preview-card/image-avatar.webp"} alt={"avatar image"} width={20} height={0}/>
          <div className={`pl-1 pt-1 font-black text-xs ${FigtreeLight.className}`}>Greg Hooper</div>
          </div>

      </div>
      </div>
    </div>
  )
}