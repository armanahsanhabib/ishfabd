import { hindSiliguri } from "@/app/fonts";

const Footer = () => {
  return (
    <footer
      className={`${hindSiliguri.className} footer mt-16 bg-gray-800 text-slate-100`}
    >
      <div className="container mx-auto flex justify-between px-2 py-8 sm:px-4 md:px-8">
        <div className="left">
          <h3 className="text-2xl font-bold">
            <span className="text-yellow-500">ইশফাবিডি</span>.কম
          </h3>
          <p className="text-sm text-slate-200">
            বাংলাদেশের সর্ববৃহৎ ড্রাই ফ্রুটস শপ।
          </p>
          <p className="mt-2 text-slate-400">
            কপিরাইট @২০২৪ সর্বস্বত্ব সংরক্ষিত!
          </p>
        </div>
        <ul className="right grid max-w-[800px] flex-grow grid-cols-3 grid-rows-5 gap-5 hover:*:underline">
          <li>
            <a href="link1">Link text 1</a>
          </li>
          <li>
            <a href="link2">Link text 2</a>
          </li>
          <li>
            <a href="link3">Link text 3</a>
          </li>
          <li>
            <a href="link4">Link text 4</a>
          </li>
          <li>
            <a href="link5">Link text 5</a>
          </li>
          <li>
            <a href="link6">Link text 6</a>
          </li>
          <li>
            <a href="link7">Link text 7</a>
          </li>
          <li>
            <a href="link8">Link text 8</a>
          </li>
          <li>
            <a href="link9">Link text 9</a>
          </li>
          <li>
            <a href="link10">Link text 10</a>
          </li>
          <li>
            <a href="link11">Link text 11</a>
          </li>
          <li>
            <a href="link12">Link text 12</a>
          </li>
          <li>
            <a href="link13">Link text 13</a>
          </li>
          <li>
            <a href="link14">Link text 14</a>
          </li>
          <li>
            <a href="link15">Link text 15</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
