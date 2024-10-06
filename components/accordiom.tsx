

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion"; // Asegúrate de que la ruta sea correcta

export default function AccordionComponent() {
  // Datos para las secciones del acordeón
  const sections = [
    {
      title: "Sección 1: Información general",
      content: "Esta es la información detallada de la sección 1. Puedes agregar todo el contenido que necesites aquí."
    },
    {
      title: "Sección 2: Detalles técnicos",
      content: "En esta sección puedes mostrar detalles técnicos o cualquier otro contenido adicional."
    },
    {
      title: "Sección 3: Contacto y ayuda",
      content: "Aquí puedes poner información de contacto o ayuda adicional para los usuarios."
    }
  ];

  return (
    <div className="w-[60%] mx-auto my-8"> {/* Estilos para centrar el acordeón y limitar el ancho */}
      <Accordion type="single" collapsible>
        {sections.map((section, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className='text-[30px]'>{section.title}</AccordionTrigger>
            <AccordionContent>{section.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}