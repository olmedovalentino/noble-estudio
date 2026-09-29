export function EditorialIntro() {
  return (
    <section className="py-24 md:py-36 max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        <div className="lg:col-span-4">
          <span className="text-[10px] uppercase tracking-[0.28em] text-[#7E7A73] font-medium block">
            01 / Manifiesto
          </span>
          <h2 className="text-xs uppercase tracking-[0.2em] text-[#141413] mt-2 font-semibold">
            Espacio & Materialidad
          </h2>
        </div>

        <div className="lg:col-span-8 space-y-8">
          <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#141413] leading-snug font-normal text-balance">
            “No diseñamos piezas aisladas, sino diálogos entre la luz, la
            arquitectura de los ambientes y el tacto natural de la madera
            genuina.”
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 text-xs md:text-sm text-[#7E7A73] font-light leading-relaxed">
            <p>
              Cada creación se produce en nuestro taller propio a partir de
              maderas estacionadas con rigurosos controles de humedad. El
              tiempo que dedicamos al ensamble manual y al pulido de cada arista
              se traduce en una presencia atemporal en el hogar.
            </p>
            <p>
              Prescindimos de excesos formales y artificios superficiales. La
              autenticidad de los materiales nobles habla por sí misma,
              ofreciendo muebles duraderos concebidos para convivir por
              generaciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
