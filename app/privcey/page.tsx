import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Eye,
  Database,
  UserCheck,
  Bell,
  Shield,
} from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
            <img src="/ww.jpeg" alt="logo" className="h-6 w-6 text-white rounded-full" />

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
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gray-900/10 mb-6">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-white">
            سياسة الخصوصية
          </h1>
          <p className="text-lg text-white text-pretty">
            آخر تحديث نوفمبر 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <Card className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <Eye className="h-6 w-6 text-white mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">المقدمة</h2>
                <p className="text-white/80 leading-relaxed">
                  نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح سياسة
                  الخصوصية هذه كيفية جمع واستخدام وحماية المعلومات التي تقدمها
                  عند استخدام موقعنا الإلكتروني. نحن نتعامل مع بياناتك بأقصى
                  درجات الأمان والشفافية.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <Database className="h-6 w-6 text-white mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  البيانات التي نجمعها
                </h2>
                <div className="space-y-4 text-white/80">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      المعلومات الشخصية
                    </h3>
                    <ul className="list-disc list-inside space-y-2 mr-4">
                      <li>الاسم الكامل</li>
                      <li>عنوان البريد الإلكتروني</li>
                      <li>رقم الهاتف (اختياري)</li>
                      <li>الصورة الشخصية (اختياري)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      معلومات الاستخدام
                    </h3>
                    <ul className="list-disc list-inside space-y-2 mr-4">
                      <li>عنوان IP الخاص بك</li>
                      <li>نوع المتصفح والجهاز</li>
                      <li>الصفحات التي تزورها</li>
                      <li>وقت وتاريخ الزيارة</li>
                      <li>مدة البقاء في الموقع</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      ملفات تعريف الارتباط (Cookies)
                    </h3>
                    <p className="leading-relaxed">
                      نستخدم ملفات تعريف الارتباط لتحسين تجربتك على الموقع.
                      يمكنك التحكم في هذه الملفات من خلال إعدادات المتصفح الخاص
                      بك. ملفات تعريف الارتباط تساعدنا في فهم كيفية استخدامك
                      للموقع وتحسين خدماتنا.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <UserCheck className="h-6 w-6 text-white mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">كيف نستخدم بياناتك</h2>
                <div className="space-y-3 text-white/80">
                  <p className="leading-relaxed">
                    نستخدم المعلومات التي نجمعها للأغراض التالية:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>توفير وصيانة خدماتنا</li>
                    <li>تحسين وتخصيص تجربة المستخدم</li>
                    <li>التواصل معك بشأن التحديثات والإشعارات</li>
                    <li>تحليل استخدام الموقع لتحسين الأداء</li>
                    <li>حماية الموقع من الاحتيال والأنشطة الضارة</li>
                    <li>الامتثال للمتطلبات القانونية</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    نحن لا نبيع أو نشارك بياناتك الشخصية مع أطراف ثالثة لأغراض
                    تسويقية دون موافقتك الصريحة.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <Shield className="h-6 w-6 text-white mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">حماية البيانات</h2>
                <div className="space-y-3 text-white/80">
                  <p className="leading-relaxed">
                    نتخذ إجراءات أمنية صارمة لحماية بياناتك الشخصية من الوصول
                    غير المصرح به أو التعديل أو الإفصاح أو التدمير:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>تشفير البيانات باستخدام بروتوكول SSL/TLS</li>
                    <li>تخزين آمن على خوادم محمية</li>
                    <li>مراقبة مستمرة للأنشطة المشبوهة</li>
                    <li>تحديثات أمنية منتظمة</li>
                    <li>وصول محدود للموظفين المصرح لهم فقط</li>
                    <li>نسخ احتياطية منتظمة للبيانات</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <Bell className="h-6 w-6 text-white mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">حقوقك</h2>
                <div className="space-y-3 text-white/80">
                  <p className="leading-relaxed">لديك الحق في:</p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>الوصول إلى بياناتك الشخصية</li>
                    <li>تصحيح البيانات غير الدقيقة</li>
                    <li>حذف بياناتك (الحق في النسيان)</li>
                    <li>تقييد معالجة بياناتك</li>
                    <li>نقل بياناتك إلى خدمة أخرى</li>
                    <li>الاعتراض على معالجة بياناتك</li>
                    <li>سحب موافقتك في أي وقت</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    للاستفسارات أو لممارسة حقوقك، يرجى التواصل معنا عبر البريد
                    الإلكتروني:
                    <span className="text-white font-semibold">
                      {" "}
                      info@e.gov.kw
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-white/5 border-white/20">
            <h2 className="text-2xl font-bold mb-4">التحديثات على السياسة</h2>
            <p className="text-white/80 leading-relaxed">
              قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنقوم بإخطارك بأي
              تغييرات عن طريق نشر السياسة الجديدة على هذه الصفحة وتحديث تاريخ
              &quot;آخر تحديث&quot; في الأعلى. ننصحك بمراجعة هذه الصفحة بشكل دوري للبقاء
              على اطلاع بكيفية حماية معلوماتك.
            </p>
          </Card>

          <Card className="p-8 bg-muted/50">
            <h2 className="text-2xl font-bold mb-4">تواصل معنا</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              إذا كان لديك أي أسئلة أو استفسارات حول سياسة الخصوصية هذه، يرجى
              التواصل معنا:
            </p>
            <div className="space-y-2 text-white/80">
              <p>
                <strong>البريد الإلكتروني:</strong> privacy@e.gov.kw
              </p>
              <p>
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
        <div className="container mx-auto px-4 text-center text-sm text-muted-white">
          <p>© 2025 جميع الحقوق محفوظة</p>
        </div>
      </footer>
    </div>
  );
}