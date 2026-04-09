import { MapPin, Mail, Phone, Clock, Facebook } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white" data-testid="section-contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Contact Us</h2>
            <p className="text-lg text-slate-600">
              Get in touch with our team for general inquiries or corporate accreditation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-slate-200 shadow-sm text-center pt-6">
              <CardContent>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Office Address</h3>
                <p className="text-slate-600 text-sm">17-01 Camella Terrazas, Adlas, Silang Cavite, Philippines 4118</p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm text-center pt-6">
              <CardContent>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-primary w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Email Address</h3>
                <p className="text-slate-600 text-sm">info@winnettrading.com</p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm text-center pt-6">
              <CardContent>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-primary w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Contact Numbers</h3>
                <p className="text-slate-600 text-sm">+63 921 1938343 or +63 908 0885111</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 bg-slate-50 p-6 rounded-xl border border-slate-100">
            <div className="flex items-center gap-3">
              <Clock className="text-slate-400 w-5 h-5" />
              <div>
                <p className="font-medium text-slate-900">Business Hours</p>
                <p className="text-sm text-slate-500">Monday–Friday, 8:00 AM – 5:00 PM</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-slate-200"></div>
            <div className="flex items-center gap-3">
              <Facebook className="text-blue-600 w-5 h-5" />
              <div>
                <p className="font-medium text-slate-900">Facebook</p>
                <a href="https://www.facebook.com/winnettrading" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline" data-testid="link-facebook">facebook.com/winnettrading</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
