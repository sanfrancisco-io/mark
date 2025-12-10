import clsx from 'clsx'

interface IFooter {
  className: string
}

export const Footer = ({ className }: IFooter) => {
  const footerClasses = clsx('bg-gray-800 text-white py-10 px-6', className)
  const currentYear = new Date().getFullYear()

  return (
    <footer className={footerClasses}>
      <div className='text-center text-gray-400 text-sm'>
        &copy; {currentYear} Marketplace. all rights stolen.
      </div>
    </footer>
  )
}
