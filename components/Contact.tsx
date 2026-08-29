"use client";

import { useState } from "react";
import { Linkedin, Github, Mail, Send, Loader2, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import Wiggle from "./Wiggle";


// 1. Go to https://web3forms.com and enter your email — it emails you a free Access Key instantly (no signup form, no card).
// 2. Copy that key and paste it below, replacing YOUR_ACCESS_KEY_HERE.
// 3. Every message submitted on the site will now land directly in that email inbox.
const WEB3FORMS_ACCESS_KEY = "1a7f6b96-859c-4d9c-8f91-b3d82d812b27";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const resetIfDone = () => {
    if (status === "sent" || status === "error") setStatus("idle");
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio message from ${name}`,
          from_name: name,
          email,
          message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section id="contact" className="max-w-[1200px] mx-auto px-6 py-14">
        <Reveal>
          <div className="relative max-w-xl mx-auto bg-card border-2 border-ink rounded-2xl shadow-brut-lg p-9 md:p-12">
            <Wiggle as="h2" className="font-display text-5xl mb-4">
              Let&apos;s talk.
            </Wiggle>
            <p className="text-muted text-[15px] leading-relaxed mb-8 max-w-sm">
              Got a project in mind, an opportunity to share, or just want to
              say hi? Drop a line below — I read everything that lands here.
            </p>

            <form onSubmit={onSubmit} className="space-y-4 mb-8">
              <input
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  resetIfDone();
                }}
                placeholder="Your name"
                className="w-full px-4 py-3 bg-cream border-2 border-ink rounded-lg text-sm outline-none focus:border-coral transition-colors"
              />
              <input
                required
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  resetIfDone();
                }}
                placeholder="Your email"
                className="w-full px-4 py-3 bg-cream border-2 border-ink rounded-lg text-sm outline-none focus:border-coral transition-colors"
              />
              <textarea
                required
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  resetIfDone();
                }}
                placeholder="What's on your mind?"
                rows={4}
                className="w-full px-4 py-3 bg-cream border-2 border-ink rounded-lg text-sm outline-none focus:border-coral transition-colors resize-none"
              />

              <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-4">
                  <a href="https://www.linkedin.com/in/kashishhverma/" className="hover:text-coral transition-colors" aria-label="LinkedIn">
                    <Linkedin size={19} />
                  </a>
                  <a href="https://github.com/KashishhVerma" className="hover:text-coral transition-colors" aria-label="GitHub">
                    <Github size={19} />
                  </a>
                  <a
                    href="mailto:kashishverma2304@gmail.com"
                    className="hover:text-coral transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={19} />
                  </a>
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-ink rounded-full font-medium text-sm shadow-brut-sm hover:-translate-y-1 hover:shadow-brut active:translate-y-0 active:bg-yellow transition-all disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      Sending <Loader2 size={14} className="animate-spin" />
                    </>
                  ) : status === "sent" ? (
                    <>
                      Sent <CheckCircle2 size={14} />
                    </>
                  ) : (
                    <>
                      Send <Send size={14} />
                    </>
                  )}
                </button>
              </div>

              {status === "sent" && (
                <p className="text-teal text-sm">Thanks! Your message just landed in my inbox 💌</p>
              )}
              {status === "error" && (
                <p className="text-coral text-sm">
                  Something went wrong — make sure the Web3Forms access key is set up (see comment in Contact.tsx).
                </p>
              )}
            </form>

            <p className="font-hand text-2xl text-right text-coral">Kashish Verma</p>
          </div>
        </Reveal>
      </section>
      <footer className="text-center py-8 px-6 text-xs text-muted">
        Kashish Verma © 2026 — Built with care.
      </footer>
    </>
  );
}
