export const Footer = () => {
  return (
    <footer className="py-4 px-4 relative pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} Maintained by <a href="#">Nischal Chandur</a>.
      </p>
    </footer>
  );
};