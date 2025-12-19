import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Lock,
  Key,
  AlertTriangle,
  CheckCircle2,
  FileCheck,
  Shield,
} from "lucide-react";

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
            <img src="/ww.jpeg" alt="logo" className="h-6 w-6 text-primary rounded-full" />
            </div>
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowRight className="h-4 w-4 ml-2" />
                العودة للرئيسية
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
            <Lock className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-balance">
            قواعد الأمان والحماية
          </h1>
          <p className="text-lg text-muted-foreground text-pretty">
            التزامنا بحماية بياناتك وضمان أمان حسابك
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <Card className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">التزامنا بالأمان</h2>
                <p className="text-foreground/80 leading-relaxed">
                  نحن نأخذ أمان بياناتك على محمل الجد. تم تصميم منصتنا بأحدث
                  معايير الأمان لحماية معلوماتك الشخصية وضمان خصوصيتك. نستخدم
                  تقنيات متقدمة ونتبع أفضل الممارسات في مجال أمن المعلومات
                  لحماية حسابك وبياناتك من أي تهديدات محتملة.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <Lock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  التشفير وحماية البيانات
                </h2>
                <div className="space-y-4 text-foreground/80">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      تشفير البيانات أثناء النقل
                    </h3>
                    <p className="leading-relaxed">
                      جميع البيانات المنقولة بين جهازك وخوادمنا محمية باستخدام
                      بروتوكول TLS 1.3 (Transport Layer Security)، وهو أحدث
                      معيار للتشفير. هذا يضمن أن بياناتك لا يمكن اعتراضها أو
                      قراءتها من قبل أطراف ثالثة.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      تشفير البيانات المخزنة
                    </h3>
                    <p className="leading-relaxed">
                      يتم تشفير جميع البيانات الحساسة المخزنة في قواعد بياناتنا
                      باستخدام خوارزميات تشفير قوية (AES-256). كلمات المرور يتم
                      تجزئتها باستخدام خوارزمية bcrypt مع salt فريد لكل مستخدم.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      البنية التحتية الآمنة
                    </h3>
                    <ul className="list-disc list-inside space-y-2 mr-4">
                      <li>خوادم محمية في مراكز بيانات معتمدة</li>
                      <li>جدران حماية متقدمة (Firewalls)</li>
                      <li>أنظمة كشف ومنع التسلل (IDS/IPS)</li>
                      <li>مراقبة أمنية على مدار الساعة</li>
                      <li>نسخ احتياطية مشفرة يومياً</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <Key className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">أمان الحساب</h2>
                <div className="space-y-4 text-foreground/80">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      كلمات المرور القوية
                    </h3>
                    <p className="leading-relaxed mb-2">
                      نوصي بشدة باستخدام كلمات مرور قوية تتضمن:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mr-4">
                      <li>12 حرفاً على الأقل</li>
                      <li>مزيج من الأحرف الكبيرة والصغيرة</li>
                      <li>أرقام ورموز خاصة</li>
                      <li>تجنب استخدام معلومات شخصية واضحة</li>
                      <li>عدم إعادة استخدام كلمات المرور من مواقع أخرى</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      المصادقة الثنائية (2FA)
                    </h3>
                    <p className="leading-relaxed">
                      نوفر خيار المصادقة الثنائية لإضافة طبقة أمان إضافية
                      لحسابك. عند تفعيل هذه الميزة، ستحتاج إلى إدخال رمز تحقق
                      بالإضافة إلى كلمة المرور عند تسجيل الدخول. ننصح بشدة
                      بتفعيل هذه الميزة.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      إدارة الجلسات
                    </h3>
                    <ul className="list-disc list-inside space-y-2 mr-4">
                      <li>انتهاء تلقائي للجلسات بعد فترة من عدم النشاط</li>
                      <li>إمكانية تسجيل الخروج من جميع الأجهزة</li>
                      <li>إشعارات عند تسجيل الدخول من جهاز جديد</li>
                      <li>سجل نشاط الحساب</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  الحماية من التهديدات
                </h2>
                <div className="space-y-4 text-foreground/80">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      الحماية من الهجمات الإلكترونية
                    </h3>
                    <ul className="list-disc list-inside space-y-2 mr-4">
                      <li>حماية من هجمات DDoS (رفض الخدمة الموزع)</li>
                      <li>منع هجمات SQL Injection و XSS</li>
                      <li>حماية من هجمات CSRF (تزوير الطلبات عبر المواقع)</li>
                      <li>تحديد معدل الطلبات (Rate Limiting) لمنع الإساءة</li>
                      <li>فحص دوري للثغرات الأمنية</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      الحماية من الاحتيال
                    </h3>
                    <ul className="list-disc list-inside space-y-2 mr-4">
                      <li>كشف الأنشطة المشبوهة تلقائياً</li>
                      <li>تحليل سلوك المستخدم للكشف عن الحسابات المخترقة</li>
                      <li>حظر محاولات تسجيل الدخول المتكررة الفاشلة</li>
                      <li>التحقق من عناوين IP المشبوهة</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      الحماية من البريد المزعج والتصيد
                    </h3>
                    <p className="leading-relaxed">
                      نستخدم أنظمة متقدمة لفلترة البريد المزعج والكشف عن محاولات
                      التصيد الاحتيالي. لن نطلب منك أبداً إرسال كلمة المرور أو
                      معلومات حساسة عبر البريد الإلكتروني.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  أفضل الممارسات للمستخدمين
                </h2>
                <div className="space-y-3 text-foreground/80">
                  <p className="leading-relaxed">
                    لحماية حسابك، يرجى اتباع هذه الإرشادات:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>لا تشارك كلمة المرور مع أي شخص</li>
                    <li>استخدم كلمة مرور فريدة لكل موقع</li>
                    <li>فعّل المصادقة الثنائية</li>
                    <li>قم بتحديث كلمة المرور بانتظام</li>
                    <li>تحقق من عنوان URL قبل إدخال بياناتك</li>
                    <li>لا تسجل الدخول من أجهزة أو شبكات عامة غير موثوقة</li>
                    <li>قم بتسجيل الخروج بعد الانتهاء من استخدام الموقع</li>
                    <li>حافظ على تحديث متصفحك ونظام التشغيل</li>
                    <li>استخدم برنامج مكافحة فيروسات موثوق</li>
                    <li>كن حذراً من رسائل البريد الإلكتروني المشبوهة</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <FileCheck className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">الامتثال والشهادات</h2>
                <div className="space-y-3 text-foreground/80">
                  <p className="leading-relaxed">
                    نلتزم بالمعايير والقوانين الدولية لحماية البيانات:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>اللائحة العامة لحماية البيانات (GDPR)</li>
                    <li>قانون خصوصية المستهلك في كاليفورنيا (CCPA)</li>
                    <li>معايير ISO 27001 لأمن المعلومات</li>
                    <li>معايير PCI DSS لأمان بيانات الدفع</li>
                    <li>قوانين حماية البيانات المحلية</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    نخضع لعمليات تدقيق أمنية منتظمة من قبل جهات خارجية مستقلة
                    لضمان الامتثال المستمر لأعلى معايير الأمان.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-destructive/10 border-destructive/20">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4 text-destructive">
                  الإبلاغ عن مشكلة أمنية
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  إذا اكتشفت ثغرة أمنية أو مشكلة في نظامنا، نرجو منك الإبلاغ
                  عنها فوراً. نحن نقدر جهود الباحثين الأمنيين ونلتزم بالتعامل مع
                  جميع التقارير بجدية وسرية.
                </p>
                <div className="space-y-2 text-foreground/80">
                  <p>
                    <strong>البريد الإلكتروني الأمني:</strong>{" "}
                    security@linkbioappz.com
                  </p>
                  <p>
                    <strong>وقت الاستجابة:</strong> خلال 24 ساعة
                  </p>
                  <p className="text-sm mt-4">
                    يرجى عدم الإفصاح العلني عن الثغرة حتى نتمكن من معالجتها.
                    سنقوم بإبلاغك بالتقدم المحرز وإصدار تحديث أمني في أقرب وقت
                    ممكن.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-primary/5 border-primary/20">
            <h2 className="text-2xl font-bold mb-4">التحديثات الأمنية</h2>
            <p className="text-foreground/80 leading-relaxed">
              نقوم بتحديث أنظمتنا الأمنية بانتظام لمواجهة التهديدات الجديدة.
              سيتم إخطارك بأي تغييرات مهمة في سياسات الأمان أو في حالة حدوث أي
              خرق أمني قد يؤثر على حسابك. نوصي بمراجعة هذه الصفحة بشكل دوري
              للبقاء على اطلاع بأحدث ممارسات الأمان.
            </p>
          </Card>

          <Card className="p-8 bg-muted/50">
            <h2 className="text-2xl font-bold mb-4">تواصل معنا</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              لأي استفسارات أو مخاوف تتعلق بالأمان، يرجى التواصل معنا:
            </p>
            <div className="space-y-2 text-foreground/80">
              <p>
                <strong>ساعات العمل:</strong> على مدار الساعة طوال أيام الأسبوع
              </p>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Link href="/">
            <Button size="lg" className="gap-2">
              <ArrowRight className="h-5 w-5" />
              العودة إلى الصفحة الرئيسية
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 جميع الحقوق محفوظة</p>
        </div>
      </footer>
    </div>
  );
}