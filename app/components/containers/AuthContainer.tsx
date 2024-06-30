const AuthContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-fit h-full flex items-center justify-center">
      {children}
    </div>
  );
};

export default AuthContainer;
