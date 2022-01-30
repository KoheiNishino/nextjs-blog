const Footer = () => {
  return (
    <footer className="text-secondary border-t border-solid border-opacity-10 py-7">
      <div className="flex flex-col items-center">
        <div className="text-sm md:text-lg">
          © {new Date().getFullYear()} Kohei Nishino
        </div>
      </div>
    </footer>
  )
}

export default Footer
