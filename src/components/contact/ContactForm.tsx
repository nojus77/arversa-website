"use client";

import { useState, useCallback, type FormEvent, type ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SERVICES } from "@/lib/data/services";

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  honeypot: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

const INITIAL_FORM: FormData = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
  honeypot: "",
};

const SERVICE_OPTIONS = [...SERVICES.map((s) => s.title), "Kita"];

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (data.name.trim().length < 2) {
    errors.name = "Vardas turi būti bent 2 simbolių";
  }

  if (data.phone.replace(/\s/g, "").length < 8) {
    errors.phone = "Įveskite teisingą telefono numerį";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    errors.email = "Įveskite teisingą el. pašto adresą";
  }

  if (!data.service) {
    errors.service = "Pasirinkite paslaugą";
  }

  if (data.message.trim().length < 10) {
    errors.message = "Žinutė turi būti bent 10 simbolių";
  }

  return errors;
}

export function ContactForm(): React.ReactElement {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = useCallback(
    (
      e: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors],
  );

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const validationErrors = validateForm(form);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      setStatus("submitting");
      setErrors({});

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        setStatus("success");
        setForm(INITIAL_FORM);

        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      } catch {
        setStatus("error");
      }
    },
    [form],
  );

  const inputClasses = (field: keyof FormErrors): string =>
    cn(
      "w-full rounded-lg border px-4 py-3.5 text-charcoal bg-white",
      "placeholder:text-subtle",
      "transition-colors duration-200",
      "focus:outline-none focus:border-amber focus:ring-2 focus:ring-amber/20",
      errors[field] ? "border-red-400" : "border-border",
    );

  return (
    <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-border">
      <h3 className="font-heading text-2xl text-charcoal mb-2">
        Parašykite mums
      </h3>
      <p className="text-body mb-6">
        Užpildykite formą ir mes susisieksime su jumis per 24 valandas.
      </p>

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center py-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.1,
              }}
              className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4"
            >
              <Check className="w-8 h-8 text-green-600" />
            </motion.div>
            <p className="text-lg font-medium text-charcoal">
              Žinutė išsiųsta!
            </p>
            <p className="text-body mt-1">
              Susisieksime su jumis artimiausiu metu.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            noValidate
          >
            {/* Honeypot - hidden from users */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <input
                type="text"
                name="honeypot"
                tabIndex={-1}
                autoComplete="off"
                value={form.honeypot}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-charcoal mb-1.5"
                >
                  Vardas
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jūsų vardas"
                  className={inputClasses("name")}
                  required
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Phone & Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-charcoal mb-1.5"
                  >
                    Telefonas
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+370 600 00 000"
                    className={inputClasses("phone")}
                    required
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-charcoal mb-1.5"
                  >
                    El. paštas
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jusu@email.lt"
                    className={inputClasses("email")}
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-charcoal mb-1.5"
                >
                  Paslauga
                </label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={cn(
                    inputClasses("service"),
                    !form.service && "text-subtle",
                  )}
                  required
                >
                  <option value="" disabled>
                    Pasirinkite paslaugą
                  </option>
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">{errors.service}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-charcoal mb-1.5"
                >
                  Žinutė
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Apibūdinkite savo poreikius..."
                  rows={5}
                  className={cn(inputClasses("message"), "resize-none")}
                  required
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Error message */}
              {status === "error" && (
                <p className="text-red-500 text-sm">
                  Klaida. Bandykite dar kartą.
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className={cn(
                  "w-full sm:w-auto inline-flex items-center justify-center gap-2",
                  "rounded-lg font-medium px-7 py-3.5 text-base",
                  "bg-amber text-charcoal",
                  "hover:bg-amber-light hover:shadow-lg hover:shadow-amber/20",
                  "hover:scale-[1.02] active:scale-[0.98]",
                  "transition-all duration-300 ease-out",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2",
                  "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
                )}
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Siunčiama...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Siųsti žinutę
                  </>
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
