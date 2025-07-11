type BannerProps = {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
};

export default function Banner({ title, subtitle, backgroundImage, ctaText, ctaLink }: BannerProps) {
  return (
    <section 
      className="relative h-96 flex items-center justify-center border-4"
      style={{ 
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="relative z-10 bg-white bg-opacity-80 rounded-lg p-8 text-center max-w-2xl mx-4 shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">{title}</h1>
        {subtitle && (
          <p className="text-lg text-gray-700 mb-6">{subtitle}</p>
        )}
        {ctaText && ctaLink && (
          <a 
            href={ctaLink}
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
}