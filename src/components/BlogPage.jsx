import React from "react"

const blogs = [
  {
    title: "Amplifying Every Voice: Building Inclusive Speech Technology for Non-Standard Speech.",
    author: "Collins Njau",
    role: "Founder and CEO",
    platform: "Medium",
    readTime: "4 min read",
    image: "/blog/echo1.png",
    link: "https://medium.com/@collinsnjau39/amplifying-every-voice-building-inclusive-speech-technology-for-non-standard-speech-49c2dde635a4",
    excerpt:
      "This article captures the genesis of Echo, written just after Collins built the first version. It traces how early user stories, technical experiments, and a simple belief in the right to be understood became the foundation for Echo's first working product.",
  },
  {
    title: "Teaching AI to Hear Voices It Was Never Trained For",
    author: "Martin Muru",
    role: "Co-Founder & Head of Technology",
    platform: "LinkedIn",
    readTime: "Research note",
    image: "/blog/selective-finetuning.png",
    link: "https://www.linkedin.com/pulse/teaching-ai-hear-voices-never-trained-martin-muru-iwwie/",
    excerpt:
      "How we personalised a speech recognition model for Kenyan Swahili speakers with cerebral palsy, and what the process taught us. This piece looks at the practical challenge of adapting AI to voices that mainstream models were never trained to hear.",
  },
  {
    title: "Personalized Speech Recognition: Rethinking Voice AI for Non-Standard Speech.",
    author: "Martin Muru",
    role: "Co-Founder & Head of Technology",
    platform: "LinkedIn",
    readTime: "Deep dive",
    image: "/blog/Loras.png",
    link: "https://www.linkedin.com/pulse/personalized-speech-recognition-rethinking-voice-ai-martin-muru-vfhre/",
    excerpt:
      "Imagine using a voice assistant that has never heard someone like you speak. The article explains how Echo adapts to individual acoustic patterns, helping speech recognition move away from one-size-fits-all systems and toward personal voice models.",
  },
]

const BlogPage = () => {
  const [featured, ...otherBlogs] = blogs

  return (
    <main className="relative overflow-hidden px-4 sm:px-12 lg:px-24 xl:px-40 pt-14 text-gray-700 dark:text-white">
      <div className="absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(ellipse_at_top,rgba(80,68,229,0.18),transparent_58%),linear-gradient(180deg,rgba(248,250,252,0.96),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_at_top,rgba(80,68,229,0.24),transparent_58%),linear-gradient(180deg,rgba(15,23,42,0.92),rgba(0,0,0,0))]" />

      <section className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.32em] text-primary">
              ISRI Journal
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.03] tracking-tight text-gray-900 dark:text-white">
              Ideas from the team building Echo
            </h1>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-gray-600 dark:text-white/72">
              Research notes, field reflections, and technical deep dives from the people
              designing speech technology for voices that deserve to be heard clearly.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-white/55">
              <span className="rounded-full border border-gray-200 bg-white/75 px-4 py-2 dark:border-gray-700 dark:bg-gray-900/60">
                Accessibility
              </span>
              <span className="rounded-full border border-gray-200 bg-white/75 px-4 py-2 dark:border-gray-700 dark:bg-gray-900/60">
                Voice AI
              </span>
              <span className="rounded-full border border-gray-200 bg-white/75 px-4 py-2 dark:border-gray-700 dark:bg-gray-900/60">
                Research
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl">
        <article className="group grid overflow-hidden rounded-2xl border border-gray-200/80 bg-white/90 shadow-[0_34px_100px_rgba(15,23,42,0.12)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_40px_120px_rgba(80,68,229,0.18)] dark:border-gray-700/70 dark:bg-gray-900/75 lg:grid-cols-[1.05fr_0.95fr]">
          <a
            href={featured.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block min-h-[280px] overflow-hidden bg-gradient-to-br from-[#f7f5ef] via-white to-[#eceefa] p-3 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 sm:min-h-[360px] sm:p-4 lg:min-h-[520px]"
            aria-label={`Read ${featured.title}`}
          >
            <img
              src={featured.image}
              alt={featured.title}
              className="h-full w-full rounded-xl object-contain transition duration-700 group-hover:scale-[1.015]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-900 backdrop-blur dark:bg-gray-950/85 dark:text-white">
              Featured
            </div>
          </a>

          <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-primary">
                <span>{featured.platform}</span>
                <span className="h-1 w-1 rounded-full bg-primary/50" />
                <span>{featured.readTime}</span>
              </div>
              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white">
                {featured.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-gray-600 dark:text-white/72">
                {featured.excerpt}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-5 border-t border-gray-100 pt-6 dark:border-gray-800 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  {featured.author}
                </p>
                <p className="mt-1 text-sm text-gray-500 dark:text-white/55">
                  {featured.role}
                </p>
              </div>
              <a
                href={featured.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-primary dark:bg-white dark:text-gray-900 dark:hover:bg-primary dark:hover:text-white"
              >
                Read more
              </a>
            </div>
          </div>
        </article>
      </section>

      <section className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-2">
        {otherBlogs.map((blog) => (
          <article
            key={blog.title}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white/85 shadow-lg shadow-gray-200/50 transition duration-500 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_28px_90px_rgba(80,68,229,0.15)] dark:border-gray-700/70 dark:bg-gray-900/70 dark:shadow-none"
          >
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-950"
              aria-label={`Read ${blog.title}`}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent" />
            </a>

            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-primary">
                <span>{blog.platform}</span>
                <span className="h-1 w-1 rounded-full bg-primary/50" />
                <span>{blog.readTime}</span>
              </div>
              <h2 className="mt-4 text-2xl sm:text-3xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white">
                {blog.title}
              </h2>
              <p className="mt-4 flex-1 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-white/70">
                {blog.excerpt}
              </p>

              <div className="mt-6 flex flex-col gap-4 border-t border-gray-100 pt-5 dark:border-gray-800 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {blog.author}
                  </p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-white/55">
                    {blog.role}
                  </p>
                </div>
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center justify-center rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-900 transition hover:border-primary hover:text-primary dark:border-gray-700 dark:text-white dark:hover:border-primary"
                >
                  Read more
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default BlogPage
