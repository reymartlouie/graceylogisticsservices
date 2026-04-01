import { useEffect } from 'react'

type Policy = 'terms' | 'privacy'

interface Props {
  open: Policy | null
  onClose: () => void
}

const content: Record<Policy, { title: string; body: React.ReactNode }> = {
  terms: {
    title: 'Terms & Conditions',
    body: (
      <>
        <p className="legal-updated">Last updated: April 2026</p>

        <h4>1. Acceptance of Terms</h4>
        <p>By engaging Gracey Logistics Services for any freight or delivery service, you agree to be bound by these Terms and Conditions. If you do not agree, please refrain from using our services.</p>

        <h4>2. Services</h4>
        <p>Gracey Logistics Services provides trucking, freight forwarding, door-to-door delivery, and related logistics services across the Philippines. Service availability may vary by location and is subject to fleet capacity.</p>

        <h4>3. Bookings & Quotations</h4>
        <p>All quotations are valid for 7 days from the date of issuance and are subject to change based on fuel surcharges, tolls, or route conditions. A booking is confirmed only upon written or verbal acceptance by Gracey Logistics Services.</p>

        <h4>4. Cargo & Prohibited Items</h4>
        <p>Clients are responsible for ensuring cargo is properly packed and declared. Gracey Logistics Services reserves the right to refuse shipments that are misdeclared, hazardous, illegal, or improperly packaged. Prohibited items include but are not limited to firearms, explosives, illegal substances, and live animals (unless pre-arranged).</p>

        <h4>5. Liability</h4>
        <p>Gracey Logistics Services takes reasonable care to ensure timely and safe delivery. However, our liability for loss or damage is limited to the declared value of the cargo or the service fee paid, whichever is lower. We are not liable for delays caused by traffic, weather, acts of God, or circumstances beyond our control.</p>

        <h4>6. Claims</h4>
        <p>Any claim for loss, damage, or delay must be submitted in writing within 48 hours of delivery. Claims submitted beyond this period will not be entertained.</p>

        <h4>7. Payment</h4>
        <p>Payment terms are agreed upon at the time of booking. Overdue balances may incur a late fee of 2% per month. Gracey Logistics Services reserves the right to withhold cargo until outstanding balances are settled.</p>

        <h4>8. Amendments</h4>
        <p>Gracey Logistics Services may update these Terms at any time. Continued use of our services constitutes acceptance of the revised terms.</p>

        <h4>9. Governing Law</h4>
        <p>These Terms are governed by the laws of the Republic of the Philippines. Any disputes shall be resolved through the appropriate courts in Bulacan.</p>

        <h4>10. Contact</h4>
        <p>For any questions regarding these Terms, contact us at <a href="mailto:gracey.logisticsservices@gmail.com">gracey.logisticsservices@gmail.com</a> or call <a href="tel:09271739599">0927 1739 599</a>.</p>
      </>
    ),
  },
  privacy: {
    title: 'Privacy Policy',
    body: (
      <>
        <p className="legal-updated">Last updated: April 2026</p>

        <h4>1. Information We Collect</h4>
        <p>We collect personal information you provide when booking our services, including your name, contact number, email address, and delivery addresses. We may also collect cargo details necessary to fulfill your shipment.</p>

        <h4>2. How We Use Your Information</h4>
        <p>Your information is used solely to process and fulfill your shipment, communicate delivery updates, respond to inquiries, and improve our services. We do not sell or rent your personal data to third parties.</p>

        <h4>3. Data Sharing</h4>
        <p>We may share your information with drivers and logistics partners only to the extent necessary to complete your delivery. All parties are required to handle your data with the same level of care we apply.</p>

        <h4>4. Data Retention</h4>
        <p>We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. You may request deletion of your data at any time by contacting us.</p>

        <h4>5. Security</h4>
        <p>We implement reasonable measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of transmission or storage is 100% secure.</p>

        <h4>6. Your Rights</h4>
        <p>Under the Philippine Data Privacy Act of 2012, you have the right to access, correct, or request deletion of your personal data held by us. To exercise these rights, contact us at <a href="mailto:gracey.logisticsservices@gmail.com">gracey.logisticsservices@gmail.com</a>.</p>

        <h4>7. Cookies</h4>
        <p>This website does not currently use tracking cookies or analytics tools that collect personal data.</p>

        <h4>8. Changes to This Policy</h4>
        <p>We may update this Privacy Policy periodically. Any changes will be reflected on this page with a revised date.</p>

        <h4>9. Contact</h4>
        <p>For privacy concerns, reach us at <a href="mailto:gracey.logisticsservices@gmail.com">gracey.logisticsservices@gmail.com</a> or <a href="tel:09271739599">0927 1739 599</a>.</p>
      </>
    ),
  },
}

export default function LegalModal({ open, onClose }: Props) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  const { title, body } = content[open]

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="modal-body">{body}</div>
      </div>
    </div>
  )
}
