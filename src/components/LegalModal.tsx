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
        <p className="legal-updated">Effective Date: March 1, 2026</p>
        <p>These Terms and Conditions ("Terms") govern the tracking, shipment, delivery, and related services for goods shipped within and from the Philippines by Gracey Logistics Services or GLS. By placing an order, requesting shipment, or using our tracking and shipping services, the customer agrees to be bound by these Terms.</p>

        <h4>1. Scope of Services</h4>
        <p>1.1 The GLS provides shipping, delivery, and tracking services for goods within the Philippines and, where applicable, to international destinations.</p>
        <p>1.2 Services may be performed directly by the Company or through third-party logistics providers, carriers, or courier partners.</p>
        <p>1.3 The GLS provides land-based truck transportation services for dry goods within the Philippines.</p>
        <p>1.4 Services include hauling, delivery, and related logistics services as agreed upon in writing.</p>
        <p>1.5 The GLS transports dry goods only and does not accept perishable, hazardous, liquid, or temperature-sensitive cargo unless expressly agreed upon in writing.</p>

        <h4>2. Shipment Acceptance</h4>
        <p>2.1 All shipments are subject to acceptance by the Company.</p>
        <p>2.2 The GLS reserves the right to refuse or cancel the shipment of goods that are prohibited, restricted, improperly packed, or inaccurately declared.</p>
        <p>2.3 The Customer warrants that all shipment details provided, including contents, value, weight, and destination, are true, correct, and complete.</p>

        <h4>3. Packaging and Labeling</h4>
        <p>3.1 The Customer is responsible for ensuring that goods are properly packed, sealed, and labeled to withstand normal handling and transportation.</p>
        <p>3.2 Unless otherwise agreed in writing: loading shall be performed by the Customer or shipper; unloading shall be performed by the Customer or consignee.</p>
        <p>3.3 The GLS shall not be liable for damage caused by improper packaging, loading, stacking, or securing performed by or on behalf of the Customer.</p>

        <h4>4. Tracking of Shipments</h4>
        <p>4.1 A tracking number may be provided for eligible shipments.</p>
        <p>4.2 Tracking information is provided for reference only and is based on data received from carriers and logistics partners.</p>
        <p>4.3 The GLS does not guarantee real-time or error-free tracking updates and shall not be liable for delays, inaccuracies, or interruptions in tracking information.</p>

        <h4>5. Delivery of Goods</h4>
        <p>5.1 Delivery timelines are estimates only and are not guaranteed.</p>
        <p>5.2 Delays may occur due to factors beyond the GLS control, including but not limited to weather conditions, natural disasters, customs inspections, traffic conditions, labor issues, or force majeure events.</p>
        <p>5.3 Delivery shall be deemed complete upon receipt by the Customer, an authorized representative, or delivery to the address provided by the Customer.</p>

        <h4>6. Freight Charges and Payment</h4>
        <p>6.1 Transport charges shall be based on agreed rates, distance, truck type, weight, volume, or trip basis.</p>
        <p>6.2 Additional charges may apply for waiting time, detention, demurrage, toll fees, ferry fees, overtime, re-delivery, or route changes.</p>
        <p>6.3 Additional charges may apply for special handling, remote area delivery, storage, customs duties, taxes, or re-delivery attempts.</p>
        <p>6.4 All charges must be paid in accordance with the agreed payment terms. The GLS reserves the right to withhold delivery for non-payment, as allowed by law.</p>

        <h4>7. Customer Responsibilities</h4>
        <p>The Customer shall: ensure goods comply with Philippine laws and regulations; secure necessary permits, clearances, and documentation; provide safe and accessible pickup and delivery locations; and ensure personnel at loading and unloading points are available.</p>

        <h4>8. Customs, Duties, and Taxes</h4>
        <p>8.1 For international shipments, the customer is solely responsible for all customs duties, taxes, fees, and compliance with applicable Philippine and foreign laws and regulations, or requested additional services to GLS in written communications.</p>
        <p>8.2 The GLS shall not be responsible for delays, seizures, or penalties imposed by customs authorities.</p>

        <h4>9. Loss or Damage Claims</h4>
        <p>9.1 The Customer must inspect goods upon delivery and report any visible loss or damage immediately.</p>
        <p>9.2 Written claims must be filed within 14 days from the date of delivery or the expected delivery.</p>
        <p>9.3 The GLS's liability, if any, shall be limited to the lesser of: the declared value of the goods, or the maximum amount allowed under applicable Philippine laws.</p>
        <p>9.4 The GLS shall not be liable for: concealed damage; normal wear and tear; loss or damage caused by improper packaging or loading; or indirect or consequential losses (loss of profit, delay penalties).</p>
        <p>9.5 The GLS shall not be liable for indirect, incidental, or consequential damages, including loss of profits or business interruption.</p>

        <h4>10. Prohibited and Restricted Items</h4>
        <p>10.1 The Customer shall not ship items prohibited or restricted under Philippine laws, regulations, or carrier policies, including but not limited to dangerous goods, illegal substances, firearms, explosives, and counterfeit items.</p>
        <p>10.2 The GLS may dispose of or surrender prohibited items to the authorities without prior notice.</p>

        <h4>11. Insurance</h4>
        <p>11.1 Unless otherwise agreed, cargo insurance is not included in the transportation charges.</p>
        <p>11.2 The Customer is encouraged to secure separate cargo insurance for the goods being transported.</p>

        <h4>12. Force Majeure</h4>
        <p>The GLS shall not be liable for failure or delay in performance due to events beyond its reasonable control, including acts of God, natural disasters, government actions, pandemics, strikes, or transportation disruptions.</p>

        <h4>13. Limitation of Liability</h4>
        <p>13.1 To the maximum extent permitted by Philippine law, the Company's total liability shall not exceed the amount paid for the shipping service.</p>
        <p>13.2 Nothing in these Terms shall exclude liability for matters that cannot be excluded under applicable law.</p>

        <h4>14. Data Privacy</h4>
        <p>14.1 The GLS shall collect and process personal data in accordance with the Data Privacy Act of 2012 (Republic Act No. 10173).</p>
        <p>14.2 Shipment and tracking information may be shared with third-party carriers solely for the purpose of completing delivery and tracking services.</p>

        <h4>15. Amendments</h4>
        <p>The GLS reserves the right to amend or update these Terms at any time. Updated Terms shall take effect upon publication or notice to the customer.</p>

        <h4>16. Governing Law and Jurisdiction</h4>
        <p>These Terms shall be governed by and construed in accordance with the laws of the Republic of the Philippines. Any disputes shall be subject to the exclusive jurisdiction of the proper courts of the Philippines.</p>

        <h4>17. Contact Information</h4>
        <p>For inquiries, concerns, or claims, please contact Gracey Logistics Services (GLS):</p>
        <p>Metro Manila: Lot 21 Blk 19 Tenacity Street, Pagsibol Phase 2, Catmon, Sta. Maria, Bulacan</p>
        <p>Visayas: Bgry Crossing Lanot, Roxas City, Capiz</p>
        <p>Email: <a href="mailto:gracey.logisticsservices@gmail.com">gracey.logisticsservices@gmail.com</a> · Phone: <a href="tel:09271739599">0927-1739-599</a></p>
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
