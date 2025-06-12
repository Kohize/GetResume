import StoryCard from './StoryCard';

export default function Story() {
  return (
    <section className="flex flex-col items-center p-20 bg-gray-200 dark:bg-gray-800">
      <h2 className="font-semibold text-4xl mb-5 dark:text-white text-center">
        The Story Behind <span className="text-indigo-600">ResumeFast</span>
      </h2>
      <p className="font-light text-2xl mb-20 dark:text-white text-center">
        Experience the future of resume building with our intelligent platform
      </p>
      <ul className="grid grid-cols-2 gap-5">
        <StoryCard
          color={'pink'}
          title={'The Problem'}
          description={
            "Hours spent wrestling with Word templates. Broken formatting after every edit. Beautiful designs that look terrible when exported. We've all been there - the endless cycle of resume frustration that steals time from what really matters: job searching."
          }
          icon={'😤'}
        />
        <StoryCard
          color={'green'}
          title={'The Solution'}
          description={
            'What if creating a resume could be as simple as filling out a form? What if you could see your changes instantly, without any formatting headaches? ResumeFast was born from this vision – a tool that just works, beautifully and effortlessly.'
          }
          icon={'💡'}
        />
      </ul>
    </section>
  );
}
