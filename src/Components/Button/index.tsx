import { ButtonLink, SecondaryButton } from './styles'

export type Props = {
  type: 'link' | 'button'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ children, title, type, onClick, to }: Props) => {
  if (type === 'button') {
    return (
      <SecondaryButton type="button" title={title} onClick={onClick}>
        {children}
      </SecondaryButton>
    )
  }

  return <ButtonLink title={title}>{children}</ButtonLink>
}

export default Button
