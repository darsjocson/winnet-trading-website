import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { FileText, Loader2 } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required").transform((v) => v.trim()),
  companyName: z.string().min(2, "Company/Agency name is required").transform((v) => v.trim()),
  email: z.string().email("Invalid email address").transform((v) => v.trim()),
  mobile: z.string().min(10, "Valid mobile number is required").transform((v) => v.trim()),
  productNeeded: z.string().min(2, "Please specify the product/service needed").transform((v) => v.trim()),
  quantity: z.string().min(1, "Quantity is required").transform((v) => v.trim()),
  details: z.string().min(10, "Please provide some project details").transform((v) => v.trim()),
  deliveryLocation: z.string().min(2, "Delivery location is required").transform((v) => v.trim()),
  timeline: z.string().min(2, "Please specify your required timeline").transform((v) => v.trim()),
});

type FormValues = z.infer<typeof formSchema>;

export default function RFQForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      mobile: "",
      productNeeded: "",
      quantity: "",
      details: "",
      deliveryLocation: "",
      timeline: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      toast({
        title: "RFQ Submitted Successfully",
        description: "RFQ submitted successfully. We will contact you shortly.",
        variant: "default",
      });
      form.reset();
    } catch (err) {
      const message = err instanceof Error ? err.message : "An unexpected error occurred. Please try again or contact us directly.";
      toast({
        title: "Submission Failed",
        description: message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="rfq" className="py-20 bg-slate-50 border-t border-slate-200" data-testid="section-rfq">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="bg-primary px-8 py-6 flex items-center gap-4 text-white">
            <FileText className="w-8 h-8 opacity-80" />
            <div>
              <h2 className="text-2xl font-bold">Request for Quotation</h2>
              <p className="text-primary-foreground/80 text-sm">Fill out the form below for formal pricing and availability.</p>
            </div>
          </div>

          <div className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-rfq">

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Juan Dela Cruz" data-testid="input-fullname" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company / Agency Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Department of Health" data-testid="input-companyname" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="procurement@agency.gov.ph" data-testid="input-email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+63 900 000 0000" data-testid="input-mobile" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="productNeeded"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Product / Service Needed</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Office Desks, Desktop Computers" data-testid="input-productneeded" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="quantity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Quantity</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. 50 units" data-testid="input-quantity" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="details"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project / Requirement Details</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Please provide specifications, brand preferences, or any other relevant details..."
                          className="min-h-[120px] resize-y"
                          data-testid="input-details"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="deliveryLocation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Delivery Location</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Quezon City" data-testid="input-deliverylocation" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="timeline"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Timeline</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Needed by next week" data-testid="input-timeline" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="pt-4 flex justify-end">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-10 bg-secondary hover:bg-secondary/90 text-white text-base shadow-md h-12 disabled:opacity-70"
                    data-testid="button-submit-rfq"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Submit RFQ"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
