import { NavBar } from "./components/NavBar";
import { Icon } from "./components/Icon";
import { PictureBar } from "./components/PictureBar";
import { Info } from "./components/Info";
import { IconBar } from "./components/IconBar";
import { ArticleItem } from "./components/ArticleItem";
import { WorkItem } from "./components/WorkItem";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="container py-4 space-y-16">
      <NavBar />
      <div className="py-4 space-y-4">
        <div className="space-y-4">
          <Icon />
          <Info />
        </div>
        <IconBar />
        <PictureBar />
      </div>
      <div className="grid grid-cols-12 gap-20">
        <div className="col-span-7 space-y-6">
          <ArticleItem
            title="Crafting a design system for a multiplanetary future"
            date="September 5, 2022"
            description="Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system."
          />
          <ArticleItem
            title="Introducing Animaginary: High performance web animations"
            date="September 2, 2022"
            description="When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself."
          />
          <ArticleItem
            title="Rewriting the cosmOS kernel in Rust"
            date="July 14, 2022"
            description="When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language with a lot of benefits, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week."
          />
        </div>
        <div className="col-span-5 space-y-2">
          <div className="p-3 border border-zinc-200 rounded-md space-y-2">
            <div className="flex gap-2 items-center">
              <span className="i-tabler-mail text-2xl" />
              <h1 className="text-base">Stay up to date</h1>
            </div>
            <div>
              <p className="text-zinc-500 text-sm">
                Get notified when I publish something new, and unsubscribe at
                any time.
              </p>
            </div>
            <div className="grid grid-cols-12 gap-5">
              <input
                type="email"
                className="w-full border p-2 rounded-md bg-zinc-100 col-span-10 text-sm"
                placeholder="Email address"
              />
              <button
                type="submit"
                className="bg-black text-white rounded-md col-span-2 text-sm hover:bg-gray-800 transition-colors"
              >
                Join
              </button>
            </div>
          </div>
          <div className="p-3 border border-zinc-200 rounded-md space-y-2">
            <div className="flex gap-2 items-center">
              <span className="i-tabler-briefcase text-2xl" />
              <h1 className="text-base">Work</h1>
            </div>
            <WorkItem title="Planetaria" position="CEO" year="2019 — Present" />
            <WorkItem
              title="Airbnb"
              position="Product Designer"
              year="2014 — 2019"
            />
            <WorkItem
              title="Facebook"
              position="iOS Software Engineer"
              year="2011 — 2014"
            />
            <WorkItem
              title="Starbucks"
              position="Shift Supervisor"
              year="2008 — 2011"
            />
            <div className="py-4">
              <button className="w-full bg-zinc-200 rounded-md py-1.5 items-center text-sm hover:bg-zinc-300 transition-colors">
                <div className="flex justify-center gap-2 items-center">
                  Download CV
                  <span className="i-tabler-arrow-down" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
