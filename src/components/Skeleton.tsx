import type { ComponentPropsWithoutRef } from 'react'
import { classNames } from 'utils/classNames'

type SkeletonProps = ComponentPropsWithoutRef<'div'>

export default function Skeleton({ className, ...rest }: SkeletonProps) {
  return (
    <div
      className={classNames('animate-shimmer bg-white/95', className)}
      style={{
        backgroundImage: 'linear-gradient(to right, white 0%, #edeef1 20%, white 40%, white 100%)',
        backgroundSize: '700px 100%',
        backgroundRepeat: 'no-repeat',
      }}
      {...rest}
    />
  )
}
