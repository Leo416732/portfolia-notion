import Image from "next/image";
import { allPosts } from "@/.contentlayer/generated";
import PostList from "./blog/components/ui/PostList";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Avatar from "@/public/avatar.png";
import Link from "@/components/ui/Link";
import Card from "@/components/bento/CardTemplate";
import MapParis from "@/components/bento/mapParis";
import Instagram from "@/components/bento/Instagram";
import Map from "@/components/bento/map";
import X from "@/components/bento/X";

export default async function Home() {
  const posts = allPosts
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    // 3 most recent
    .filter((_, i) => i < 3);

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex animate-in flex-col gap-8">
        <Image
          src={Avatar}
          width={100}
          height={100}
          alt="avatar"
          className="rounded-full bg-secondaryA"
          style={{ "--index": 1 } as React.CSSProperties}
        />
        <div
          className="animate-in space-y-4"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <h1 className="text-3xl font-bold tracking-tight text-primary">
            Munkh Suld
          </h1>
          <p className="max-w-lg leading-relaxed text-secondary">
            Hi there, I&apos;m a software engineer who builds for the web with a
            design-oriented approach. In addition to coding, I also make YouTube
            videos, where I focus on tech, and productivity.
          </p>
        </div>{" "}
        <ul
          className="animated-list flex animate-in flex-col gap-2 text-secondary md:flex-row md:gap-6"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <li className="transition-opacity">
            <Link
              href="/links"
              className="flex items-center gap-2 no-underline"
            >
              <ArrowUpRightIcon className="h-5 w-5" />
              <span>Contact</span>
            </Link>
          </li>
          <li className="transition-opacity">
            <Link
              href="mailto:contact@sulde.dev@gmail.com"
              className="flex items-center gap-2 no-underline"
            >
              <ArrowUpRightIcon className="h-5 w-5" />
              <span>Get Newsletter</span>
            </Link>
          </li>
        </ul>
      </div>
      <div
        className="grid animate-in grid-cols-2 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-2 md:gap-8"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        {/* <YouTube /> */}
        <Card className="relative col-span-2 row-span-1" disableHalo noPadding>
          <MapParis />
          <div className="absolute bottom-4 left-4 flex items-center rounded-lg bg-neutral-100/75 px-4 py-1.5 backdrop-blur dark:bg-neutral-900/75 md:bottom-6 md:left-6">
            <p className="text-sm font-medium text-primary">Eiffel Tower, FR</p>
          </div>
        </Card>
        <Instagram />
        <X />
        <Card className="relative col-span-2 row-span-1" disableHalo noPadding>
          <Map />
          <div className="absolute bottom-4 left-4 flex items-center rounded-lg bg-neutral-100/75 px-4 py-1.5 backdrop-blur dark:bg-neutral-900/75 md:bottom-6 md:left-6">
            <p className="text-sm font-medium text-primary">Dublin, IRE</p>
          </div>
        </Card>
      </div>
      <div
        className="flex animate-in flex-col gap-8"
        style={{ "--index": 4 } as React.CSSProperties}
      >
        <div className="space-y-4">
          <Link
            className="group flex items-center gap-2 text-xl font-semibold tracking-tight text-primary"
            href="/blog"
          >
            Latest Posts
            <ArrowUpRightIcon className="h-5 w-5 text-tertiary transition-all group-hover:text-primary" />
          </Link>
          <p className="max-w-lg leading-relaxed text-secondary">
            I occasionally write about programming, productivity, and more.
            Check me out and subscribe to stay up to date.
          </p>
        </div>
        <PostList posts={posts} />
      </div>
    </div>
  );
}
