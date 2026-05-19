import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Outpost Admin Pty Ltd collects, uses, stores, and discloses personal information under the Australian Privacy Principles.",
};

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy" updated="19 May 2026">
      <p>
        Outpost Admin Pty Ltd (ABN 00 000 000 000) (&quot;Outpost&quot;,
        &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to
        protecting your personal information. This policy explains how we
        handle personal information in line with the{" "}
        <em>Privacy Act 1988 (Cth)</em> and the Australian Privacy Principles
        (APPs).
      </p>

      <h2>1. What we collect</h2>
      <p>
        We collect only the information needed to run our service. Depending
        on how you interact with us, that may include:
      </p>
      <ul>
        <li>
          <strong>Identity & contact:</strong> name, business name, email,
          phone, billing address.
        </li>
        <li>
          <strong>Account data:</strong> login credentials, role,
          authorisations you grant to your assistant.
        </li>
        <li>
          <strong>Task content:</strong> any documents, emails, calendar
          events, or notes you provide for your assistant to action.
        </li>
        <li>
          <strong>Usage data:</strong> server logs, IP address, browser
          metadata, audit trails of actions taken on your account.
        </li>
        <li>
          <strong>Payment data:</strong> billing details processed by our
          payment provider (Stripe). We do not store full card numbers.
        </li>
      </ul>

      <h2>2. How we collect it</h2>
      <p>
        We collect personal information directly from you when you sign up,
        submit tasks, contact us, or use our services. We also collect
        information automatically through cookies and analytics on this
        website (see Section 8).
      </p>

      <h2>3. Why we collect it</h2>
      <ul>
        <li>To provide and improve our services.</li>
        <li>To match you with an assistant and complete the work you ask.</li>
        <li>To bill you and meet our tax / accounting obligations.</li>
        <li>To send service updates and respond to support requests.</li>
        <li>To detect, prevent, and respond to fraud or security incidents.</li>
      </ul>

      <h2>4. Who can see it</h2>
      <p>
        Inside Outpost: your named assistant, their team lead, and the
        Australian account manager assigned to you. Access is logged and
        audited quarterly.
      </p>
      <p>Outside Outpost, we share information only with:</p>
      <ul>
        <li>
          <strong>Service providers</strong> who operate our infrastructure
          (AWS Sydney for storage; Stripe for payments; Google / Microsoft
          for productivity tooling).
        </li>
        <li>
          <strong>Professional advisers</strong> (accountants, lawyers,
          auditors) under confidentiality.
        </li>
        <li>
          <strong>Authorities</strong> where we are legally required to
          disclose.
        </li>
      </ul>

      <h2>5. Cross-border disclosure</h2>
      <p>
        Some of our delivery team operates from Nepal and India. They access
        your information under contractual privacy obligations equivalent to
        the Australian Privacy Principles, with audit rights reserved by
        Outpost (APP 8.1). Where you instruct us to interact with overseas
        services on your behalf, those interactions follow the same rules.
      </p>

      <h2>6. Storage & security</h2>
      <p>
        Personal information at rest is held in AWS Sydney
        (ap-southeast-2), encrypted with AES-256, in per-tenant storage
        buckets. Access is gated by SSO with mandatory MFA and logged in
        CloudTrail. Work devices are MDM-managed and disk-encrypted.
      </p>
      <p>
        Despite our controls, no system is perfectly secure. If a breach
        affecting your personal information occurs, we will notify you in
        accordance with the Notifiable Data Breaches scheme.
      </p>

      <h2>7. Retention & deletion</h2>
      <p>
        We hold personal information for as long as your account is active.
        On cancellation, tenant data — including backups — is deleted within
        30 days. We will provide a deletion certificate on request.
      </p>
      <p>
        We may retain limited records (invoices, audit logs) longer where
        required by Australian tax, accounting, or other laws.
      </p>

      <h2>8. Cookies & analytics</h2>
      <p>
        We use first-party cookies for sessions and a privacy-respecting
        analytics tool (e.g. Plausible / PostHog) to count visits and
        measure feature use. We do not use advertising cookies or sell data
        to third parties.
      </p>

      <h2>9. Your rights</h2>
      <ul>
        <li>
          <strong>Access & correction:</strong> request a copy of the
          personal information we hold about you and ask for corrections.
        </li>
        <li>
          <strong>Deletion:</strong> ask us to delete your account and
          associated personal information.
        </li>
        <li>
          <strong>Complaints:</strong> if you believe we have mishandled
          your information, contact our Privacy Officer below. You may also
          complain to the{" "}
          <a href="https://www.oaic.gov.au/" target="_blank" rel="noreferrer">
            Office of the Australian Information Commissioner (OAIC)
          </a>
          .
        </li>
      </ul>

      <h2>10. Contact</h2>
      <p>
        Privacy Officer, Outpost Admin Pty Ltd. Email{" "}
        <a href="mailto:trust@outpost.com.au">trust@outpost.com.au</a>. Post:
        Perth WA. We aim to respond inside 30 days.
      </p>

      <h2>11. Updates</h2>
      <p>
        We may revise this policy from time to time. Material changes will be
        announced via email to active customers and noted on this page.
      </p>
    </LegalPage>
  );
}
