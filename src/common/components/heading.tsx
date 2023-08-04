import { createElement } from 'react';
import type { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren } from 'react'
import type { IntRange } from '../types/number';
import classNames from 'classnames';
import { isEqual } from 'lodash';

type Props = {
  level: IntRange<1, 6>
  as: string
} & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

const Heading: FC<Props> = ({ level, as, children, className = '', ...props }) => {
  return createElement(`${as}`, {
    ...props,
    className: classNames({
      "font-bold": true,
      "text-3xl": isEqual(level, 1),
      "text-2xl": isEqual(level, 2),
      "text-xl": isEqual(level, 3),
      [className]: !!className,
    })
  }, children)
}

export default Heading
