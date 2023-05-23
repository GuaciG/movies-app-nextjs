export default function BlogLayout({ children }) {
  return (
    <div className='blog-layout'>
      <h1>Best comments and Posts of our bloggers</h1>
      {children}
    </div>
  )
}
