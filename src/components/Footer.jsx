import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className="site-footer">
      <img src="footer-logo.png" alt="ACM Qatar University" className="footer-logo" />

      <nav className="cols">
        <div className="col">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#mission">Mission</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#internship">Internship</a></li>
            <li><a href="#team">Team & Departments</a></li>
          </ul>
        </div>

        <div className="col">
          <h4>Partners</h4>
          <ul>
            <li><a href="https://www.qu.edu.qa/en-us/Colleges/engineering/students/Pages/default.aspx">QU Student Affairs</a></li>
            <li><a href="https://www.acm.org/">ACM</a></li>
          </ul>
        </div>

        <div className="col">
          <h4>Social</h4>
          <ul>
            <li><a href="https://www.instagram.com/acm.qu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Instagram</a></li>
            <li><a href="https://www.linkedin.com/company/acm-qu/">LinkedIn</a></li>
            <li><a href="https://quqa.campuslabs.com/engage/organization/acm">QU ENGAGE</a></li>
          </ul>
        </div>
      </nav>
    </footer>
  )
}

export default Footer