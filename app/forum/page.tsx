import Accordion from "@/components/accordiom";
import Menu from "@/components/menu";

export default function Forum() {
  return (
    <div className="bg-gray-900">
      <Menu />
      <div  className="flex flex-col h-[100vh] justify-center  p-[20px] text-white">
        <h2 className=" text-[30px] font-bold mx-auto">¿Preguntas Frecuentes?</h2>
        <Accordion />
      </div>
    </div>
  );
}
