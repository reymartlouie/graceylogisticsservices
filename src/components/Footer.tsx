export default function Footer() {
  return (
    <footer className="footer">
      <div className="inner footer-inner">
        <div className="footer-brand">🚚 Gracey Logistics Services</div>
        <p>Safe, efficient, and cost-effective freight solutions across the Philippines.</p>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Gracey Logistics Services. All rights reserved.</p>
      </div>
    </footer>
  )
}
