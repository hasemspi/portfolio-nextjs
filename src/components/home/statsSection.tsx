
const StatsSection = () => {
    const stats = [
        { id: 1, value: "8", label: "Years of Experience" },
        { id: 2, value: "150+", label: "Projects Completed" },
        { id: 3, value: "2.5K", label: "Happy Clients" },
      ];

    return (
        <section
        className="flex flex-wrap justify-around gap-8 p-4 border-dotted border-2 border-sky-500 style={{ backgroundColor: 'var(--background)' }}"
      >
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-row items-center text-center w-full sm:w-auto">
            <span className="text-6xl font-bold">{stat.value}</span>
            <p className="mt-2 ml-5 text-lg font-medium">{stat.label}</p>
          </div>
        ))}
      </section>
      
    );
};

export default StatsSection;