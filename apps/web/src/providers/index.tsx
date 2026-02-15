import ClientProviders from './ClintProviders';

const Providers = async ({ children }: { children: React.ReactNode }) => {
  return <ClientProviders>{children}</ClientProviders>;
};

export default Providers;
