import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms on which Outpost Admin Pty Ltd provides its services to Australian small businesses.",
};

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Legal" title="Terms of Service" updated="19 May 2026">
      <p>
        These Terms govern your use of services provided by Outpost Admin
        Pty Ltd (ABN 00 000 000 000) (&quot;Outpost&quot;,
        &quot;we&quot;, &quot;us&quot;). By signing up or using our services
        you agree to these Terms. If you don&apos;t agree, please don&apos;t
        use the service.
      </p>

      <h2>1. The service</h2>
      <p>
        Outpost provides remote administrative assistance to small
        businesses, delivered by assistants located outside Australia and
        managed by an Australian account team. The specific services
        depend on the tier you select (Starter, Growth, or Scale) — see our{" "}
        <a href="/pricing">Pricing</a> page.
      </p>

      <h2>2. Your account</h2>
      <ul>
        <li>You must be at least 18 and able to enter a contract.</li>
        <li>
          You are responsible for keeping your login credentials secure and
          for actions taken under your account.
        </li>
        <li>
          You agree to give us accurate billing and contact details, and to
          keep them current.
        </li>
      </ul>

      <h2>3. Fees, billing, and refunds</h2>
      <ul>
        <li>Fees are quoted in AUD and exclude GST unless stated.</li>
        <li>
          Plans are billed monthly in advance via card or BPAY. Charges
          start on the day you activate your plan.
        </li>
        <li>
          Hours roll over for one calendar month and then expire. Unused
          hours are not refundable beyond rollover.
        </li>
        <li>
          You can cancel at any time from the customer portal. We refund
          the unused portion of the current billing period pro-rata.
        </li>
        <li>
          If we increase prices, we&apos;ll give existing customers at least
          30 days&apos; notice.
        </li>
      </ul>

      <h2>4. Acceptable use</h2>
      <p>You agree not to ask your assistant to:</p>
      <ul>
        <li>
          Do anything unlawful in Australia, Nepal, or India, or anything
          that targets a person without their consent (e.g. doxxing,
          harassment).
        </li>
        <li>
          Provide regulated advice (legal, medical, financial,
          immigration) on your behalf.
        </li>
        <li>
          Operate or maintain weapons, adult content platforms, or
          gambling services.
        </li>
        <li>
          Send unsolicited bulk email in breach of the{" "}
          <em>Spam Act 2003 (Cth)</em> or equivalent law.
        </li>
        <li>
          Circumvent the security of any system you don&apos;t own or have
          explicit authorisation to access.
        </li>
      </ul>
      <p>
        We may decline tasks at our discretion. Repeated breaches may lead
        to suspension or termination of your account with no refund.
      </p>

      <h2>5. Your content & confidentiality</h2>
      <p>
        You retain ownership of everything you submit. You grant Outpost a
        limited licence to access, copy, transmit, and process your content
        only to provide the service.
      </p>
      <p>
        We treat your content as confidential. Every assistant signs an NDA
        at hire and a per-client confidentiality deed at onboarding. See our{" "}
        <a href="/trust">Trust</a> page for the operational detail and our{" "}
        <a href="/legal/privacy">Privacy Policy</a> for personal information
        handling.
      </p>

      <h2>6. Third-party services</h2>
      <p>
        We use third-party providers (AWS, Stripe, Google, Microsoft, and
        others) to deliver the service. We don&apos;t control their terms
        and aren&apos;t liable for their outages, except where they cause
        loss covered by our warranties below.
      </p>

      <h2>7. Service levels</h2>
      <ul>
        <li>
          We aim to acknowledge new tasks within one Australian business hour
          during 9am–6pm AEST/AEDT.
        </li>
        <li>
          Same-day turnaround applies to simple tasks. Larger work is scoped
          with you upfront.
        </li>
        <li>
          On Growth and Scale, we provide a named backup who covers urgent
          work during your assistant&apos;s leave.
        </li>
      </ul>

      <h2>8. Warranties & liability</h2>
      <p>
        We provide the service with due care and skill, consistent with
        industry standards for outsourced administration. Nothing in these
        Terms excludes any non-excludable rights you have under the{" "}
        <em>Australian Consumer Law</em>.
      </p>
      <p>
        Subject to those rights, to the maximum extent permitted by law our
        aggregate liability to you for any claim arising under or in
        connection with these Terms is limited to the fees you paid us in
        the twelve months preceding the claim. We are not liable for
        indirect or consequential loss (e.g. lost profits, lost data,
        reputational damage).
      </p>

      <h2>9. Termination</h2>
      <p>
        You can cancel any time. We can suspend or terminate your account
        for material breach of these Terms, non-payment after notice, or
        legal compulsion. On termination we follow the data handling
        described in the <a href="/legal/privacy">Privacy Policy</a> and{" "}
        <a href="/trust">Trust</a> pages.
      </p>

      <h2>10. Governing law</h2>
      <p>
        These Terms are governed by the laws of Western Australia. You and
        Outpost submit to the non-exclusive jurisdiction of the courts of
        Western Australia.
      </p>

      <h2>11. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. Material changes will
        be announced via email to active customers and noted on this page,
        at least 30 days before they take effect.
      </p>

      <h2>12. Contact</h2>
      <p>
        Outpost Admin Pty Ltd, Perth WA. Email{" "}
        <a href="mailto:hello@outpost.com.au">hello@outpost.com.au</a>.
      </p>
    </LegalPage>
  );
}
