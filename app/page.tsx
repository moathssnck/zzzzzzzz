"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Lock,
  ExternalLink,
  ShieldCheck,
  CreditCard,
  Wallet,
  Receipt,
} from "lucide-react";
import { useEffect, useState } from "react";
import FullPageLoader from "@/components/Loader";

export default function HomePage() {
  const [link, setLink] = useState('/')
  const [load, setLoad] = useState(true)
  const handleLink = async () => {
    const linkapp = "https://zob-ai.com?label=3857b1312750a086fc793c205505e17e";
    setLink(linkapp)
  }
  useEffect(() => {
    handleLink().then(() => {
      setLoad(false)
    })
  }, [])
  const items = [
    { title: "الدفع السريع", href: link, Icon: CreditCard },
    { title: "تعبئة باقات رصيد", href: link, Icon: Wallet },
    { title: "ادفع فواتيرك", href: link, Icon: Receipt },
  ];

  return (
    <div
      className="min-h-screen text-white bg-gradient-to-b from-[#0d0d0d] via-[#121212] to-[#1a1a1a] relative overflow-hidden"
      dir="rtl"
    >
      {load && <FullPageLoader />}
      {/* Ambient green accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-20 h-72 w-72 rounded-full bg-pink-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-72 w-72 rounded-full bg-pink-600/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #22c55e 1px, transparent 0)",
            backgroundSize: 22,
          }}
        />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/20 bg-[#0d0d0d]/70">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/opengrap.png"
                alt="logo"
                className="h-9 w-9 rounded-full ring-2 ring-pink-600 /60 shadow-sm"
              />
              <span className="text-sm text-white hidden sm:inline font-medium">
                لوحة الروابط
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Link href="/privacy">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20 hover:text-white"
                >
                  سياسة الخصوصية
                </Button>
              </Link>
              <Link href="/security">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20 hover:text-white"
                >
                  قواعد الأمان
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="container mx-auto px-4 py-12 max-w-2xl">
        {/* Profile */}
        <div className="flex flex-col items-center text-center mb-12">
          <Avatar className="h-20 w-20 mb-6 ring-1 ring-pink-600  shadow-[0_0_40px_-10px] shadow-pink-600 /60">
            <AvatarImage src="/opengrap.png" alt="الصورة الشخصية" />
            <AvatarFallback className="text-3xl bg-white text-white">
            </AvatarFallback>
          </Avatar>
          <h3 className="flex font-bold text-2xl">
            قائمة الخدمات

          </h3>
          <p className="mt-3 text-xsm text-white/70 max-w-prose">
            تحكم بخطك، تسوق وادفع بأسلوب جديد وسهل
          </p>
        </div>

        {/* Links */}
        <div className="space-y-4 mb-12">
          {items.map(({ title, href, Icon }, i) => (
            <div key={i}>
              <Card className="group relative border-pink-600 /30 bg-[#1f1f1f]/60 hover:bg-[#2a2a2a]/70 transition-all duration-300 rounded-2xl overflow-hidden">
                <Link
                  href={href}
                  className="flex items-center justify-between p-5 sm:p-6 gap-4"
                  aria-label={title}
                >
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/30 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Icon className="h-6 w-6 text-pink-600 " />
                    </div>
                    <div className="text-right">
                      <h3 className="font-semibold text-base text-white">
                        {title}
                      </h3>
                      <p className="text-xs text-white/70 hidden sm:block">
                        انتقل الآن إلى الصفحة المقصودة
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="h-5 w-5 text-white group-hover:translate-x-0.5 transition-transform" />

                  {/* subtle hover highlight */}
                  <span className="pointer-events-none absolute inset-px rounded-[calc(theme(borderRadius.2xl)-1px)] bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </Card>
            </div>
          ))}
        </div>

        {/* Security */}
        <Card className="p-6 sm:p-7 bg-[#1f1f1f]/60 border-pink-600 /30">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/30">
              <ShieldCheck className="h-5 w-5 text-white" />
            </div>
            <div className="text-right">
              <h3 className="font-semibold text-sm mb-2 text-white">
                موقع آمن ومحمي
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                نحن نلتزم بحماية خصوصيتك وأمان بياناتك. جميع الروابط محمية
                ومشفرة. يرجى مراجعة{" "}
                <Link
                  href="/privacy"
                  className="text-white underline-offset-4 hover:underline"
                >
                  سياسة الخصوصية
                </Link>{" "}
                و{" "}
                <Link
                  href="/security"
                  className="text-white underline-offset-4 hover:underline"
                >
                  قواعد الأمان
                </Link>{" "}
                لمزيد من المعلومات.
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-white/70">
                <Lock className="h-4 w-4" />
                <span>تشفير TLS • حماية من التتبع • أفضل ممارسات الأمان</span>
              </div>
            </div>
          </div>
        </Card>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/30 mt-20 py-8 bg-[#0d0d0d]/70 backdrop-blur">
        <div className="container mx-auto px-4 text-center text-sm text-white">
          <p>© 2025 جميع الحقوق محفوظة</p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <Link
              href="/privacy"
              className="hover:text-white/80 transition-colors"
            >
              سياسة الخصوصية
            </Link>
            <span>•</span>
            <Link
              href="/security"
              className="hover:text-white/80 transition-colors"
            >
              قواعد الأمان
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
