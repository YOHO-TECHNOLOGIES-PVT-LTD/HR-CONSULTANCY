import { UI_CONSTANTS } from '../constants/colors';

export default function Stats() {
  const stats = [
    { number: '100K+', label: 'Vetted Talent' },
    { number: '500+', label: 'Companies Served' },
    { number: '40+', label: 'Countries' },
    { number: '95%', label: 'Client Satisfaction' }
  ];

  return (
    <section style={{ backgroundColor: UI_CONSTANTS.WHITE }} className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div style={{ color: UI_CONSTANTS.PRIMARY }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div style={{ color: UI_CONSTANTS.DARK }} className="text-sm sm:text-base lg:text-lg font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}