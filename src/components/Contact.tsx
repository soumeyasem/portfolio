const Contact = () => {
  return (
    <section className="py-16 px-4 bg-primary/10" id="contact">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl font-extrabold mt-1 mb-6">Let's Connect! 💌</h2>

        <div className="flex flex-col md:flex-row justify-center gap-6 flex-wrap items-center mb-8">
  {/* GitHub Button */}
  <a
    href="https://github.com/soumeyasem"
    target="_blank"
    rel="noopener noreferrer"
    className="border-2 border-primary text-primary px-4 py-2 rounded-full hover:bg-primary/10 transition"
  >
    🐱 GitHub
  </a>

  {/* LinkedIn Button */}
  <a
    href="https://www.linkedin.com/in/soumeya-semsoum-2030a533b/"
    target="_blank"
    rel="noopener noreferrer"
    className="border-2 border-primary text-primary px-4 py-2 rounded-full hover:bg-primary/10 transition"
  >
    💼 LinkedIn
  </a>

  {/* Email and Phone */}
  <div className="flex flex-col md:flex-row gap-4 text-sm text-muted-foreground">
    <span>✉️ semsoumsoumeya@gmail.com</span>
    <span>📞 0557533796</span>
  </div>
</div>


        <p className="text-sm text-muted-foreground">
          From brain to browser, crafted with care 🌸
        </p>
      </div>
    </section>
  );
};

export default Contact;
