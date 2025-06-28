const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer footer-center p-4 fixed bottom-0 left-0 right-0 bg-gradient-to-b from-gray-950 to-slate-950 text-slate-50">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} -{" "}
          <a href="https://alexgeer.dev/" target="blank">
            Alex Geer
          </a>
        </p>
      </aside>
    </footer>
  );
};
export default Footer;
// Footer design by Arya: https://tailwindflex.com/@arya/very-simple-footer
