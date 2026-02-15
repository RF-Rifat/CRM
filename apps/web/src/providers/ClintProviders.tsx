import MantineWrapper from "./MantineWrapper";

const ClientProviders = ({ children }: { children: React.ReactNode }) => {
  return <MantineWrapper>{children}</MantineWrapper>;
};

export default ClientProviders;
