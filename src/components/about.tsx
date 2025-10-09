export default function ContentSection() {
    return (
      <section id="about" className="py-16 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <h2 className="text-4xl font-medium">
              hi there, i am shraavani, a student of mathematics and computing
              at nsut delhi.
            </h2>
            <div className="space-y-6">
              <p>
                my core work is built upon the T3 stack principles, that leverages
                next.js and typescript for end-to-end type safety, complemented
                by tailwind css for rapid, responsive ui development.
              </p>
              <p>when i'm not writing code, you can usually find me listening to music or watching tv shows (guess who's a breaking bad fanatic).</p>
              <p>i'm always open to discussing new opportunities or collaborations. feel free to explore my projects, or get in touch with me!</p>
            </div>
          </div>
        </div>
      </section>
    );
}
