const Footer = () => {
  return (
    <footer className="border-t border-accent-2 py-7 text-gray-400">
      <div className="flex flex-col items-center">
        <div className="text-sm md:text-lg">
          © {new Date().getFullYear()} Kohei Nishino
        </div>
      </div>
    </footer>
  )
}

export default Footer
