import clsx from 'clsx'

export function Logo({className, ...props}) {
  return (
    <svg width="51" height="24" viewBox="0 0 51 24" fill="none"
         className={clsx('text-slate-900 dark:text-white', className)}
         {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M9 0H15.6V24H9V0ZM0 9H6.6V24H0V9ZM24.6 0H18V24H24.6V0Z"
            fill="#654AEC"/>
      <rect width="6.6" height="6.6" fill="#FF58BE"/>
      <path fillRule="evenodd" clipRule="evenodd"
            d="M44.4 12C44.4 14.9823 41.9823 17.4 39 17.4C36.0177 17.4 33.6 14.9823 33.6 12C33.6 9.01766 36.0177 6.6 39 6.6C41.9823 6.6 44.4 9.01766 44.4 12ZM44.4 22.7192V24H51L51 12C51 5.37258 45.6274 0 39 0C32.3726 0 27 5.37258 27 12C27 18.6274 32.3726 24 39 24C40.9423 24 42.7769 23.5385 44.4 22.7192Z"
            fill="#654AEC"/>
    </svg>
  )
}
