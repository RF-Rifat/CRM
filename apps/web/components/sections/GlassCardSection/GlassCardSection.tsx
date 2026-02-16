export const GlassCardSection = () => {
  return (
    <section className="flex min-h-[60vh] w-full items-center justify-center bg-green-500 py-20 [perspective:1000px]">
      <div className="relative h-[300px] w-[600px] transition-all duration-500 hover:scale-105">
        <div className="absolute inset-0 [transform:rotateY(-15deg)] rounded-3xl border border-white/40 bg-white/10 shadow-xl backdrop-blur-xl [transform-style:preserve-3d]">
          {/* reflection lines */}
          <div className="absolute top-0 left-1/2 h-[1px] w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/80 to-transparent" />
          <div className="absolute bottom-0 left-1/2 h-[1px] w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent opacity-50" />
        </div>
      </div>
    </section>
  );
};
