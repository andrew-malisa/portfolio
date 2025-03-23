import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
    return (
        <section>
            <a href={socialLinks.twitter} target="_blank">
                <Image
                    src="/profile.png"
                    alt="Andrew Malisa's Profile Photo"
                    className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
                    unoptimized
                    width={160}
                    height={160}
                    priority
                />
            </a>
            <h1 className="mb-8 text-2xl font-medium tracking-tight">
                Curious Mind, Problem Solver, and Builder
            </h1>
            <div className="prose prose-neutral dark:prose-invert">
                <p>
                    I’m <strong>Andrew Malisa</strong>—a software engineer, problem solver, and
                    tech enthusiast with a passion for building <strong>scalable, high-performance systems</strong>.
                    I thrive at the intersection of <strong>innovation</strong> and <strong>execution</strong>,
                    constantly exploring new technologies to push boundaries.
                </p>
                <p>
                    My expertise spans <strong>backend engineering</strong>, <strong>cloud infrastructure</strong>,
                    and <strong>real-time systems</strong>. I work with
                    <strong> NestJS, Spring Boot, Kafka, and event-driven architectures</strong>,
                    crafting solutions that are not just functional but <strong>future-proof</strong>.
                </p>
                <p>
                    Beyond coding, I enjoy breaking down <strong>complex problems</strong>,
                    architecting <strong>efficient workflows</strong>, and sharing insights with fellow developers.
                    Open-source contributions, AI explorations, and system design keep me inspired.
                </p>
                <p>
                    Let’s connect! Whether it’s <strong>tech discussions</strong>, <strong>collaborations</strong>,
                    or just sharing ideas, I’m always open to meaningful conversations.
                    <a href={socialLinks.linkedin} target="_blank">Reach out here</a>.
                </p>
            </div>
        </section>
    );
}
