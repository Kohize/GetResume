export default function Mission() {
  return (
    <section className="p-20 bg-gray-100 flex flex-col items-center dark:bg-gray-800">
      <div className="flex flex-col items-center justify-center gap-y-10 mb-15">
        <h3 className="text-3xl text-black font-semibold dark:text-white">
          Our <span className="text-indigo-600 text-4xl">Mission</span>
        </h3>

        <div className="rounded-md shadow-xl flex flex-col items-center justify-center p-15 gap-y-10 bg-indigo-600 max-w-2xl">
          <div className="w-25 h-25 rounded-full bg-indigo-300 flex justify-center items-center">
            <span className="text-3xl">🎯</span>
          </div>
          <p className="font-semibold text-center text-white">
            We believe that everyone deserves a professional, polished resume
            that showcases their unique talents and experiences. Our mission is
            to eliminate the frustration of resume formatting and design,
            allowing job seekers to focus on what truly matters – telling their
            story and landing their dream job.
          </p>
        </div>
      </div>
    </section>
  );
}
