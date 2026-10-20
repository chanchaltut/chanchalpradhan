import { faqs } from "@/data/site";
import { Reveal } from "./reveal";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="mt-24">
      <Reveal>
        <h2 id="faq-heading" className="label mb-3">
          Frequently Asked
        </h2>
        <div className="divide-y divide-line border-y border-line">
          {faqs.map((f, i) => (
            <details key={f.q} name="faq" open={i === 0} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[14px] font-medium text-fg [&::-webkit-details-marker]:hidden">
                <h3>{f.q}</h3>
                <span
                  aria-hidden
                  className="relative size-3 shrink-0 text-muted before:absolute before:left-0 before:top-1/2 before:h-px before:w-3 before:bg-current after:absolute after:left-1/2 after:top-0 after:h-3 after:w-px after:bg-current after:transition-transform group-open:after:scale-y-0"
                />
              </summary>
              <p className="mt-2.5 max-w-2xl pr-6 text-[13.5px] font-[450] leading-[1.75] text-body sm:text-[14px]">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
