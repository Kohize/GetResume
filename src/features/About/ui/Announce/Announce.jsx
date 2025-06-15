import { Link } from 'react-router';

export default function Announce() {
  return (
    <section className="p-20 dark:bg-gray-900 ">
      <div className="flex flex-col justify-center items-center gap-y-10">
        <p className="text-center bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 text-white font-semibold p-3 rounded-lg text-sm">
          🔮 Looking Ahead
        </p>
        <h3 className="font-semibold text-3xl text-center text-black dark:text-white">
          The Future of{' '}
          <span className="font-semibold text-indigo-600 text-4xl">
            Resume Building
          </span>
        </h3>
        <p className="text-center max-w-lg font-semibold text-black dark:text-white">
          We're just getting started. Our roadmap includes AI-powered content
          optimization, industry-specific templates, real-time collaboration
          features, and intelligent job matching. ResumeFast isn't just a resume
          builder – it's your career advancement partner.
        </p>
        <div className="rounded-lg border-1 border-white cursor-pointer hover:opacity-70 flex items-center max-w-fit p-2 bg-indigo-600 text-white text-semibold dark:border-0">
          <Link to={'/'}>Back to Home</Link>
        </div>
      </div>
    </section>
  );
}
