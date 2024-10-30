
const StatsSection = () => {
    const stats = [
        { id: 1, value: "10", label: "Years of Experience" },
        { id: 2, value: "40+", label: "Projects Completed" },
        { id: 3, value: "1.5K", label: "Happy Clients" },
        { id: 4, value: "20", label: "Programming Contest" },
      ];

    return (
        <section
        className="flex flex-wrap justify-around gap-8 p-4 border-dotted border-2 border-sky-500 style={{ backgroundColor: 'var(--background)' }}"
      >
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center text-center w-full sm:w-auto">
            <span className="text-6xl font-bold">{stat.value}</span>
            <p className="mt-2 ml-5 text-lg font-medium">{stat.label}</p>
          </div>
        ))}
      </section>
      
    );
};

export default StatsSection;