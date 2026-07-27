import type { ReactNode } from "react";
import type { UseFormReturn } from "react-hook-form";
import { ArrowRight } from "lucide-react";
import { WhatsappIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import type { QuoteFormValues } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NativeSelect } from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";

const fieldClassName = "mt-2 bg-white text-black";

interface QuoteContactFormProps {
  form: UseFormReturn<QuoteFormValues>;
  onSubmit: (values: QuoteFormValues) => void;
  disabled: boolean;
}

export function QuoteContactForm({ form, onSubmit, disabled }: QuoteContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full min-w-0 rounded-2xl bg-black p-5 text-white sm:p-8"
      noValidate
    >
      <p className="eyebrow text-white/45">Dados para atendimento</p>
      <h2 className="mt-5 text-3xl font-extrabold tracking-tight">
        Envie sua seleção pelo WhatsApp.
      </h2>
      <p className="mt-3 text-sm leading-6 text-white/55">
        Todos os campos são obrigatórios. Os dados e equipamentos serão reunidos
        automaticamente na mensagem.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <QuoteField label="Nome" error={errors.name?.message}>
          <Input {...register("name")} className={fieldClassName} autoComplete="name" />
        </QuoteField>
        <QuoteField label="Empresa" error={errors.company?.message}>
          <Input
            {...register("company")}
            className={fieldClassName}
            autoComplete="organization"
          />
        </QuoteField>
        <QuoteField label="E-mail" error={errors.email?.message}>
          <Input
            {...register("email")}
            type="email"
            className={fieldClassName}
            autoComplete="email"
          />
        </QuoteField>
        <QuoteField label="Telefone" error={errors.phone?.message}>
          <Input
            {...register("phone")}
            type="tel"
            className={fieldClassName}
            autoComplete="tel"
          />
        </QuoteField>
        <QuoteField label="País" error={errors.country?.message}>
          <Input
            {...register("country")}
            className={fieldClassName}
            autoComplete="country-name"
          />
        </QuoteField>
        <QuoteField label="Cidade" error={errors.city?.message}>
          <Input
            {...register("city")}
            className={fieldClassName}
            autoComplete="address-level2"
          />
        </QuoteField>
        <QuoteField label="Segmento" error={errors.segment?.message}>
          <NativeSelect
            {...register("segment")}
            className={fieldClassName}
            defaultValue=""
          >
            <option value="" disabled>
              Selecione
            </option>
            <option>Academias comerciais</option>
            <option>Condomínios</option>
            <option>Hotéis</option>
            <option>Clubes</option>
            <option>Studios</option>
            <option>Clínicas de estética</option>
            <option>Estúdios de Pilates</option>
            <option>Spas</option>
          </NativeSelect>
        </QuoteField>
        <QuoteField label="Tipo de projeto" error={errors.projectType?.message}>
          <NativeSelect
            {...register("projectType")}
            className={fieldClassName}
            defaultValue=""
          >
            <option value="" disabled>
              Selecione
            </option>
            <option>Novo projeto / Novo espaço</option>
            <option>Expansão de espaço</option>
            <option>Renovação de equipamentos</option>
            <option>Implantação de Avaliação Corporal / Scan</option>
            <option>Compra pontual</option>
          </NativeSelect>
        </QuoteField>
        <QuoteField label="Mensagem adicional" error={errors.message?.message} full>
          <Textarea
            {...register("message")}
            className={fieldClassName}
            placeholder="Conte brevemente o que você precisa."
          />
        </QuoteField>
      </div>

      <Button
        type="submit"
        variant="inverse"
        disabled={disabled || isSubmitting}
        className="mt-7 h-auto min-h-12 w-full gap-2 whitespace-normal px-4 py-3.5 text-center sm:whitespace-nowrap"
      >
        <WhatsappIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
        <span>Enviar seleção completa no WhatsApp</span>
        <ArrowRight className="shrink-0" aria-hidden="true" />
      </Button>
    </form>
  );
}

function QuoteField({
  label,
  error,
  full = false,
  children,
}: {
  label: string;
  error?: string;
  full?: boolean;
  children: ReactNode;
}) {
  return (
    <label className={cn("block w-full min-w-0", full ? "sm:col-span-2" : "")}>
      <span className="text-xs font-bold uppercase tracking-wider text-white/60">
        {label}
      </span>
      {children}
      {error && (
        <span className="mt-1.5 block text-xs text-white" role="alert">
          {error}
        </span>
      )}
    </label>
  );
}
