import React from "react";
interface ContainerProps {
  children: React.ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  return (
    <main className="container mx-auto py-10 px-4 md:px-6">{children}</main>
  );
};

export default Container;
