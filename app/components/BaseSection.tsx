import React from 'react'
type Props = {
    children: React.ReactNode,
    sectionID: string,
    className?: string,
}
function BaseSection({children,sectionID,className}:Props) {
  return (
    <section  id={sectionID} className={`w-full min-h-screen px-3 ${className || ''}`}>
      {/* Title */}
      {children}
    </section>
  )
}

export default BaseSection
