export function Footer() {
  return (
    <footer className="footer footer-center mt-auto w-full bg-gray-100 px-6 pb-6 pt-0 text-gray-800">
      <div className="text-center">
        <p>
          {'Built with '}
          <a className="font-semibold" href="https://nextjs.org/">
            Next.js
          </a>
          {' + '}
          <a className="font-semibold" href="https://tailwindcss.com/">
            TailwindCSS
          </a>
          {' by '}
          <a className="font-semibold" href="https://github.com/p-perotti">
            Patrick Perotti
          </a>
        </p>
      </div>
    </footer>
  )
}
