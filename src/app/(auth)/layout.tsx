import LogoImage from "@/assets/images/content-ai-2.png";
import Image from "next/image";
export default async function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`px-[30px] flex items-center justify-between w-full bg-white h-screen`}
    >
      <div className="relative border mx-auto p-[20px] pt-[40px] flex flex-col gap-[20px] shadow-xl rounded-2xl w-[500px] h-[full] bg-white">
        <div className="absolute right-2 top-2"></div>
        <Image src={LogoImage} className="w-[80%] m-auto" alt="Logo Image" />
        {children}
      </div>
    </div>
  );
}
