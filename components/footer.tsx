const Footer = () => {
  return (
    <footer className="text-secondary border-t border-solid border-opacity-10">
      <div className="flex flex-col items-center">
        <div className="text-sm md:text-lg py-5">
          <a className="hover:underline" href="/policy">Privacy Policy</a>
        </div>
        <div className="text-sm md:text-lg pb-5">
          © {new Date().getFullYear()} Kohei Nishino
        </div>
      </div>
    </footer>
  )
}

export default Footer
