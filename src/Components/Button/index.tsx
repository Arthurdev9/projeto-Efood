import * as S from './styles'

export type Props = {
  type: 'link' | 'button' | 'submit'
  title: string
  to?: string | null
  onClick?: () => void
  children: string
}

const Button = ({ children, title, type, onClick, to }: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.SecondaryButton type={type} title={title} onClick={onClick}>
        {children}
      </S.SecondaryButton>
    )
  }

  return (
    <S.ButtonLink onClick={onClick} title={title}>
      {children}
    </S.ButtonLink>
  )
}

export default Button
